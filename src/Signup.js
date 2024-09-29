import React, { useState } from 'react';
import './App.css'; // Import your main CSS file

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    name: '',
    phone_number: '',
    role: 'CUSTOMER' // or 'RESTAURANT'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://test-api.achilyon.in/v1/rest-auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Signup successful:', data);
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone_number"
        placeholder="Phone Number"
        value={formData.phone_number}
        onChange={handleChange}
        required
      />
      <select name="role" onChange={handleChange}>
        <option value="CUSTOMER">Customer</option>
        <option value="RESTAURANT">Restaurant</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;

