import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Login Data:', data);
  };

  return (
    <div className='hero max-h-full'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='card bg-base-200 w-160 mt-10 max-w-120 shrink-0 shadow-2xl'>
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

              <div>
                <a className='link link-hover'>Forgot password?</a>
              </div>

              <div className='flex justify-center items-center'>
                <Link className='font-bold' to='/auth/register'>
                  Register now
                </Link>
              </div>

              <button className='btn btn-primary mt-4 w-110'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
