import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div>Загрузка...</div>;
  return user ? children : <Navigate to="/loginregistr" />;
};

export default PrivateRoute;
