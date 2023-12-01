import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later

const PrivateRoute = ({children}) => {
  const navigate = useNavigate()
  const {user} = useAuth0()
  return user ? children : navigate('/')
};
export default PrivateRoute;
