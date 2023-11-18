import { useEffect } from 'react';
import axios from 'axios';
import authFetch from '../custom';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await authFetch('/react-store-products')
      const resp2 = await axios(randomUserUrl)
      console.log(resp1);
      console.log(resp2);
    } catch (e) {
      console.log(e.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
