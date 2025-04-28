import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('/api/cart/user/me', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setCart(res.data.items || []))
      .catch(err => console.error(err));
    axios.get('/api/order/user/me', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="py-5">
      <div className="container-lg">
        <h2>User Dashboard</h2>
        <h3>Your Cart</h3>
        <ul className="list-group mb-4">
          {cart.map(item => (
            <li key={item.product_id._id} className="list-group-item">
              {item.product_id.name} - Quantity: {item.quantity} - ${item.price}
            </li>
          ))}
        </ul>
        <Link to="/cart" className="btn btn-primary mb-4">View Full Cart</Link>
        <h3>Your Orders</h3>
        <ul className="list-group">
          {orders.map(order => (
            <li key={order._id} className="list-group-item">
              Order #{order._id} - Total: ${order.total} - Status: {order.status}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UserDashboard;