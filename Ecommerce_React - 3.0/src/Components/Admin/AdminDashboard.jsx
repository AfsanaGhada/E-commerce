import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', stock: '', categoryId: '' });

  useEffect(() => {
    axios.get('/api/product').then(res => setProducts(res.data));
    axios.get('/api/categories').then(res => setCategories(res.data));
  }, []);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/product/create', {
        ...newProduct,
        categories: [newProduct.categoryId],
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setProducts([...products, res.data.product]);
      setNewProduct({ name: '', description: '', price: '', stock: '', categoryId: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="py-5">
      <div className="container-lg">
        <h2>Admin Dashboard</h2>
        <form onSubmit={handleAddProduct} className="mb-4">
          <input type="text" className="form-control mb-2" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} placeholder="Product Name" required />
          <input type="text" className="form-control mb-2" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} placeholder="Description" />
          <input type="number" className="form-control mb-2" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} placeholder="Price" required />
          <input type="number" className="form-control mb-2" value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })} placeholder="Stock" required />
          <select className="form-control mb-2" value={newProduct.categoryId} onChange={(e) => setNewProduct({ ...newProduct, categoryId: e.target.value })} required>
            <option value="">Select Category</option>
            {categories.map(cat => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>
          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
        <h3>Products</h3>
        <ul className="list-group">
          {products.map(product => (
            <li key={product._id} className="list-group-item">{product.name} - ${product.price}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AdminDashboard;