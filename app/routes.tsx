import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DestinationGuide from './pages/DestinationGuide';
import TravelPlanning from './pages/TravelPlanning';
import CommunityForum from './pages/CommunityForum';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import ProtectedRoute from './ProtectedRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination-guide" element={<DestinationGuide />} />
        <Route path="/travel-planning" element={
          <ProtectedRoute>
            <TravelPlanning />
          </ProtectedRoute>
        } />
        <Route path="/community-forum" element={
          <ProtectedRoute>
            <CommunityForum />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
