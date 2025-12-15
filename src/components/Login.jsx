import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import authServer from './api/authServer';
import { addUser } from './store/userSlice';
import { useDispatch } from 'react-redux';
import ForgotPassword from './ForgotPassword';
import useToast from './utils/useToast';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const showToast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    authServer
      .login(data)
      .then((user) => {
        dispatch(addUser(user));
        showToast('Login Successfully...!!', 'success');
        navigate('/user/request');
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };

  const handleOpen = () => {
    modalRef.current?.showModal();
  };
  return (
    <div className='hero max-h-full'>
      <div className='hero-content flex-col lg:flex-row-reverse mt-15'>
        <div className='card bg-base-200 w-160 mt-10 max-w-120 shrink-0 shadow-2xl rounded-2xl shadow-blue-400'>
          <h1 className='text-3xl font-bold text-center mt-2'>Login now!</h1>
          <div className='card-body'>
            <form
              className='fieldset space-y-3'
              onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className='label'>Email</label>
                <input
                  type='email'
                  className={`input w-110 input-bordered ${
                    errors.email ? 'input-error' : ''
                  }`}
                  placeholder='Email'
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter valid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className='text-error text-sm'>{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className='label'>Password</label>
                <input
                  type='password'
                  className={`input w-110 input-bordered ${
                    errors.password ? 'input-error' : ''
                  }`}
                  placeholder='Password'
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Minimum 8 characters',
                    },
                    pattern: {
                      value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
                      message: 'Must include upper, lower & number',
                    },
                  })}
                />
                {errors.password && (
                  <p className='text-error text-sm'>
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className='flex justify-between items-center'>
                <button
                  className='btn link link-hover'
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleOpen();
                  }}>
                  Forgot password?
                </button>
                <button className='btn link link-hover'>
                  <Link className='font-bold' to='/auth/register'>
                    Register now
                  </Link>
                </button>
              </div>

              <button className='btn btn-primary mt-4 w-110'>Login</button>
            </form>
          </div>
        </div>
      </div>
      <ForgotPassword modalRef={modalRef} />
    </div>
  );
}

export default Login;
