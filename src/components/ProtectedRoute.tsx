import { Navigate } from 'react-router-dom';
import { useRecycle } from '@/context/RecycleContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { state } = useRecycle();

  if (!state.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
