import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import authServer from './api/authServer';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './store/slice/userSlice';
import Toast from './utils/Toast';

function Body() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const location = useLocation();

  useEffect(() => {
    if (user?._id && location.pathname.includes('auth/')) {
      navigate('/user/feed', { replace: true });
    } else {
      authServer
        .getLoggedInUser()
        .then((res) => {
          dispatch(addUser(res));
          if (res._id && (location.pathname.includes('auth/') || location.pathname === '/')) {
            dispatch(addUser(res));
            navigate('/user/feed', { replace: true });
          }
        })
        .catch((err) => {
          console.error('ERROR: ', err);
          navigate('/auth/login');
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Toast />
    </>
  );
}

export default Body;
