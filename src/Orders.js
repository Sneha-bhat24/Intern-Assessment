import React, { useState, useEffect } from 'react';
import './App.css'; // Import your main CSS file

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState({
    status: 'PENDING',
    is_cash: true,
  });

  const fetchOrders = async () => {
    try {
      const response = await fetch('https://test-api.achilyon.in/v1/orders/all-orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filter),
      });
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [filter]);

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="orders-container">
      <h2>Orders</h2>
      <label>
        Status:
        <select name="status" onChange={handleFilterChange}>
          <option value="PENDING">Pending</option>
          <option value="SERVED">Served</option>
        </select>
      </label>
      <label>
        Cash Payment:
        <input
          type="checkbox"
          name="is_cash"
          checked={filter.is_cash}
          onChange={(e) => setFilter({ ...filter, is_cash: e.target.checked })}
        />
      </label>
      <button onClick={fetchOrders}>Filter Orders</button>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <p>Status: {order.status}</p>
            <p>Order Version: {order.order_version}</p>
            <p>Cash Payment: {order.is_cash ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
