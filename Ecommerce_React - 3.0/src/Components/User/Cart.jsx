import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    axios.get('/api/cart/user/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        setCart(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
        if (err.response?.status === 401) navigate('/login');
      });
  }, [navigate]);

  const updateQuantity = async (productId, newQuantity) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.patch(`/api/cart/update/${cart._id}`, {
        product_id: productId,
        quantity: newQuantity
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCart(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const removeItem = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      const updatedItems = cart.items.filter(item => item.product_id._id !== productId);
      const res = await axios.patch(`/api/cart/update/${cart._id}`, {
        items: updatedItems
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCart(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const checkout = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('/api/order/create', {
        user_id: 'me',
        items: cart.items,
        shipping_address: {
          line1: '123 Main St',
          city: 'Sample City',
          state: 'Sample State',
          zip: '12345',
          country: 'Sample Country'
        },
        payment_status: 'Pending'
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      await axios.delete(`/api/cart/delete/${cart._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCart(null);
      navigate('/user');
      alert('Order placed successfully! Order ID: ' + res.data.order._id);
    } catch (err) {
      console.error(err);
      alert('Checkout failed');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!cart || !cart.items.length) return <div>Your cart is empty.</div>;

  return (
    <section className="py-5">
      <div className="container-lg">
        <h2>Your Cart</h2>
        <ul className="list-group mb-4">
          {cart.items.map(item => (
            <li key={item.product_id._id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>{item.product_id.name}</h5>
                <p>${item.price} (Qty: {item.quantity})</p>
              </div>
              <div>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.product_id._id, parseInt(e.target.value))}
                  className="form-control d-inline-block w-auto me-2"
                />
                <button
                  className="btn btn-danger"
                  onClick={() => removeItem(item.product_id._id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <h3>Total: ${cart.total}</h3>
        <button className="btn btn-primary" onClick={checkout}>Proceed to Checkout</button>
      </div>
    </section>
  );
};

export default Cart; // Ensure this line is present and correct