import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({children}) => {
  const navigate = useNavigate()
  const {user} = useAuth0()
  if(!user) {
    return navigate('/');
  }
  return children
};
export default PrivateRoute;
