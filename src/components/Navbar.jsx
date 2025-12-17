import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useToast from './utils/useToast';
import { logoutUser } from './store/Thunk/userThunk';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showToast = useToast();
  const user = useSelector((state) => state?.user.user);

  const handleLogout = async () => {
    const result = await dispatch(logoutUser());
    if (logoutUser.fulfilled.match(result)) {
      showToast('Logout Successfully...!!', 'success');
      navigate('/auth/login');
    }

    if (logoutUser.rejected.match(result)) {
      showToast(result.payload, 'error');
      console.error('ERROR:', result.payload);
    }
  };

  return (
    <div className='navbar bg-base-200 shadow-sm  text-neutral-content  p-4 fixed z-10'>
      <div className='flex-1'>
        <Link className='btn btn-ghost text-xl' to='/user/feed'>
          DevTinder
        </Link>
      </div>
      <div className='flex gap-2'>
        {user?._id ? (
          <>
            <div
              className={`pt-2 pl-5 pr-5 rounded-box ${
                location.pathname === '/user/feed' ? 'bg-blue-500' : ''
              }`}>
              <Link to='/user/feed' className='justify-between '>
                Feed
              </Link>
            </div>
            <div
              className={`pt-2 pl-5 pr-5 rounded-box ${
                location.pathname === '/user/connection' ? 'bg-blue-500' : ''
              }`}>
              <Link to='/user/connection' className='justify-between '>
                Connections
              </Link>
            </div>
            <div
              className={`pt-2 pl-5 pr-5 rounded-box ${
                location.pathname === '/user/connection-request'
                  ? 'bg-blue-500'
                  : ''
              }`}>
              <Link to='/user/connection-request' className='justify-between '>
                Requests
              </Link>
            </div>
            <div
              className={`pt-2 pl-5 pr-5 rounded-box ${
                location.pathname === '/user/profile' ? 'bg-blue-500' : ''
              }`}>
              <Link to='/user/profile' className='justify-between'>
                Profile
              </Link>
            </div>
            <div className='pt-2'>
              Welcome, {user?.firstName?.toUpperCase()}
            </div>
            <div className='dropdown dropdown-end mx-5'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'>
                <div className='w-10 rounded-full'>
                  <button className='btn btn-circle bg-orange-400'>
                    {user?.firstName[0]?.toUpperCase()}
                  </button>
                </div>
              </div>

              <ul
                tabIndex='-1'
                className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
                <li>
                  <Link to='/user/profile' className='justify-between '>
                    {user?.firstName} {user?.lastName}
                  </Link>
                </li>
                <li>
                  <button className='button-link' onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;
