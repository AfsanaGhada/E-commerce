// const express = require('express');
// const mongoose = require('mongoose');
// const Cart = require('../Model/Cart');  // Path to the Cart model file
// const Product = require('../Model/Products');  // Path to the Product model file
// const User = require('../Model/User');  // Path to the User model file
// const router = express.Router();
// const authMiddleware = require('../Middleware/authMiddleware');

// // router.get('/user/:userId', authMiddleware, async (req, res) => { ... });
// // router.post('/add', authMiddleware, async (req, res) => { ... });
// // router.patch('/update/:cartId', authMiddleware, async (req, res) => { ... });
// // router.delete('/delete/:cartId', authMiddleware, async (req, res) => { ... });

// router.get('/user/me', authMiddleware, async (req, res) => {
//   const cart = await Cart.findOne({ user_id: req.user.userId }).populate('items.product_id');
//   res.json(cart || { items: [] });
// });
// // Get all carts
// // Get all carts
// router.get('/', async (req, res) => {
//   try {
//     const carts = await Cart.find(); // Fetch carts
//     console.log("Carts Found:", carts); // Log for debugging

//     if (carts.length === 0) {
//       return res.status(404).json({ message: "No carts found" });
//     }

//     res.json(carts);
//   } catch (error) {
//     console.error("Error fetching carts:", error);
//     res.status(500).json({ message: "Error fetching carts", error: error.message });
//   }
// });



// // Get cart by user I
// router.get('/user/:userId', async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ user_id: req.params.userId }).populate('items.product_id');
//     if (cart) {
//       res.json(cart);
//     } else {
//       res.status(404).json({ message: 'Cart not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching cart', error: error.message });
//   }
// });

// // Create or update cart (for adding items to cart)
// router.post('/add', async (req, res) => {
//   try {
//     const { user_id, product_id, quantity } = req.body;

//     // Check if user exists
//     const user = await User.findById(user_id);
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     // Check if product exists
//     const product = await Product.findById(product_id);
//     if (!product) return res.status(404).json({ message: 'Product not found' });

//     // Calculate price (product price * quantity)
//     const price = product.price * quantity;

//     // Check if cart already exists for the user
//     let cart = await Cart.findOne({ user_id });

//     if (cart) {
//       // If cart exists, check if product already in cart
//       const existingItem = cart.items.find(item => item.product_id.toString() === product_id);
//       if (existingItem) {
//         // If the product is already in the cart, update the quantity and price
//         existingItem.quantity += quantity;
//         existingItem.price = product.price * existingItem.quantity;
//       } else {
//         // If the product is not in the cart, add new item
//         cart.items.push({ product_id, quantity, price });
//       }

//       // Recalculate total
//       cart.total = cart.items.reduce((acc, item) => acc + item.price, 0);

//       await cart.save();
//       res.status(200).json(cart);
//     } else {
//       // If no cart exists, create a new one
//       cart = new Cart({
//         user_id,
//         items: [{ product_id, quantity, price }],
//         total: price
//       });

//       await cart.save();
//       res.status(201).json(cart);
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Error adding to cart', error: error.message });
//   }
// });

// // Update cart item (e.g., update quantity)
// router.patch('/update/:cartId', async (req, res) => {
//   try {
//     const { product_id, quantity } = req.body;
//     const cart = await Cart.findById(req.params.cartId);

//     if (!cart) {
//       return res.status(404).json({ message: 'Cart not found' });
//     }

//     // Find the product in the cart and update its quantity
//     const item = cart.items.find(item => item.product_id.toString() === product_id);
//     if (!item) {
//       return res.status(404).json({ message: 'Product not found in cart' });
//     }

//     item.quantity = quantity;
//     item.price = item.product_id.price * quantity;  // Update price based on new quantity

//     // Recalculate total
//     cart.total = cart.items.reduce((acc, item) => acc + item.price, 0);

//     await cart.save();
//     res.json(cart);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating cart', error: error.message });
//   }
// });

// // Delete a cart
// router.delete('/delete/:cartId', async (req, res) => {
//   try {
//     const cart = await Cart.findByIdAndDelete(req.params.cartId);
//     if (cart) {
//       res.json({ message: 'Cart deleted successfully' });
//     } else {
//       res.status(404).json({ message: 'Cart not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting cart', error: error.message });
//   }
// });

// router.get('/find/search', async (req, res) => {
//   try {
//     const query = req.query.name || '';

//     // Fetch carts and populate product details
//     const carts = await Cart.find().populate('items.product_id');

//     // Filter products by name manually after population
//     const filteredCarts = carts.map(cart => ({
//       ...cart.toObject(),
//       items: cart.items.filter(item => 
//         item.product_id.name.toLowerCase().includes(query.toLowerCase())
//       )
//     })).filter(cart => cart.items.length > 0); // Remove empty carts

//     res.json(filteredCarts);
//   } catch (error) {
//     res.status(500).json({ message: 'Error searching cart', error: error.message });
//   }
// });

// router.patch('/update/:cartId', authMiddleware, async (req, res) => {
//   try {
//     const cart = await Cart.findById(req.params.cartId);
//     if (!cart) return res.status(404).json({ message: 'Cart not found' });

//     if (req.body.items) {
//       cart.items = req.body.items.map(item => ({
//         product_id: item.product_id,
//         quantity: item.quantity,
//         price: item.price
//       }));
//     } else {
//       const { product_id, quantity } = req.body;
//       const item = cart.items.find(item => item.product_id.toString() === product_id);
//       if (!item) return res.status(404).json({ message: 'Product not found in cart' });
//       item.quantity = quantity;
//       item.price = (await Product.findById(product_id)).price * quantity;
//     }

//     cart.total = cart.items.reduce((acc, item) => acc + item.price, 0);
//     await cart.save();
//     res.json(cart);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating cart', error: error.message });
//   }
// });
// module.exports = router;
const express = require('express');
const mongoose = require('mongoose');
const Cart = require('../Model/Cart');
const Product = require('../Model/Products');
const User = require('../Model/User');
const authMiddleware = require('../Middleware/authMiddleware');
const router = express.Router();

// Get cart by user ID
router.get('/user/me', authMiddleware, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user_id: req.user.userId }).populate('items.product_id');
    res.json(cart || { items: [] });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart', error: error.message });
  }
});

// Create or update cart (for adding items to cart)
router.post('/add', authMiddleware, async (req, res) => {
  try {
    const { product_id, quantity } = req.body;
    const user_id = req.user.userId;

    const user = await User.findById(user_id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const product = await Product.findById(product_id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const price = product.price * quantity;
    let cart = await Cart.findOne({ user_id });

    if (cart) {
      const existingItem = cart.items.find(item => item.product_id.toString() === product_id);
      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.price = product.price * existingItem.quantity;
      } else {
        cart.items.push({ product_id, quantity, price });
      }
      cart.total = cart.items.reduce((acc, item) => acc + item.price, 0);
      await cart.save();
      res.status(200).json(cart);
    } else {
      cart = new Cart({
        user_id,
        items: [{ product_id, quantity, price }],
        total: price
      });
      await cart.save();
      res.status(201).json(cart);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error adding to cart', error: error.message });
  }
});

// Update cart item
router.patch('/update/:cartId', authMiddleware, async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.cartId);
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    if (req.body.items) {
      cart.items = req.body.items.map(item => ({
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.price
      }));
    } else {
      const { product_id, quantity } = req.body;
      const item = cart.items.find(item => item.product_id.toString() === product_id);
      if (!item) return res.status(404).json({ message: 'Product not found in cart' });
      item.quantity = quantity;
      item.price = (await Product.findById(product_id)).price * quantity;
    }

    cart.total = cart.items.reduce((acc, item) => acc + item.price, 0);
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error updating cart', error: error.message });
  }
});

// Delete a cart
router.delete('/delete/:cartId', authMiddleware, async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.cartId);
    if (cart) {
      res.json({ message: 'Cart deleted successfully' });
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting cart', error: error.message });
  }
});

module.exports = router;