// FirstPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

const FirstPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Validate form data if needed

    // Save data to localStorage
    localStorage.setItem('userDetails', JSON.stringify(formData));

    // Redirect to the second page
    navigate('/second-page');
  };

  return (
    <div>
      <h1>First Page</h1>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        label="Phone Number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Button variant='contained' size = 'large' onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default FirstPage;
