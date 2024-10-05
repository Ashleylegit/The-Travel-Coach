/* import React, { useContext } from 'react';
import { AuthContext } from './auth';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: any) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
 */