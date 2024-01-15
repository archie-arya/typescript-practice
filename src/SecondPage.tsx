// SecondPage.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DataGridComponent from './DataGridComponent';
import DepartmentListComponent from './DepartmentListComponent';

const departmentsData = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];

const SecondPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user details are available in localStorage
    const userDetails = localStorage.getItem('userDetails');
    if (!userDetails) {
      // Redirect to the first page with a message
      navigate('/first-page?message=Please fill out the form');
    }
  }, [navigate]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Second Page</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <DataGridComponent />
        <DepartmentListComponent departments={departmentsData} />
      </div>
    </div>
  );
};

export default SecondPage;
