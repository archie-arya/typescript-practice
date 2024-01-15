// SecondPage.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SecondPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
    if (!userDetails.name || !userDetails.phoneNumber || !userDetails.email) {
      // Redirect to the first page with a message
      navigate('/first-page?message=Please enter your details');
    }
  }, [navigate]);

  // Avoid rendering the actual details if there was an issue with the form
  // This will also help if the user directly navigates to the /second-page URL
  if (window.location.href.includes('/first-page')) {
    return null;
  }

  const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');

  return (
    <div>
      <h1>Second Page</h1>
      <p>Name: {userDetails.name}</p>
      <p>Phone Number: {userDetails.phoneNumber}</p>
      <p>Email: {userDetails.email}</p>
    </div>
  );
};

export default SecondPage;
