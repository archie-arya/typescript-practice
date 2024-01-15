// Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

const RoutesComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/first-page" />} />
        <Route path="/first-page" element={<FirstPage />} />
        <Route
          path="/second-page"
          element={<SecondPage />}
        />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
