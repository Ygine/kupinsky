import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if(!user){
    return <Navigate to={'/login'} state={{from: location}} />
  }

  return children
}

export default RequireAuth;

