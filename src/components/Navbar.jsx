import React from 'react';
import authServer from './api/authServer';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from './store/userSlice';
import useToast from './utils/useToast';

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showToast = useToast()
  const user = useSelector((state) => state?.user);

  const handleLogout = () => {
    authServer.logout().then(() => {
      dispatch(removeUser());
      navigate('/auth/login');
      showToast('Logout Successfully...!!', 'success');
    });
  };

  return (
    <div className='navbar bg-base-200 shadow-sm  text-neutral-content  p-4 fixed z-10'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>DevTinder</a>
      </div>
      <div className='flex gap-2'>
        {user?._id ? (
          <>
            <div className='pt-2 bg-blue-600 pl-5 pr-5 rounded-box'>
              <Link to='/user/request' className='justify-between '>
                Request
              </Link>
            </div>
            <div className='pt-2 bg-blue-600 pl-5 pr-5 rounded-box'>
              <Link to='/user/profile' className='justify-between'>
                Profile
              </Link>
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
                  <a>Settings</a>
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
