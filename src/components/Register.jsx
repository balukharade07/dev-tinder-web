import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div className='hero max-h-full'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='card bg-base-200 w-400 m-1 max-w-200 shrink-0 shadow-2xl'>
          <h1 className='text-3xl font-bold text-center mt-1'>Register now!</h1>
          <div className='card-body'>
            <form
              className='fieldset space-y-3'
              onSubmit={handleSubmit(onSubmit)}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='label'>First Name</label>
                  <input
                    className={`input input-bordered w-full ${
                      errors.firstName ? 'input-error' : ''
                    }`}
                    placeholder='First Name'
                    {...register('firstName', {
                      required: 'First name is required',
                      minLength: {
                        value: 3,
                        message: 'Minimum 3 characters',
                      },
                      pattern: {
                        value: /^[A-Za-z][A-Za-z0-9-]*$/,
                        message: 'Only letters, numbers or dash',
                      },
                    })}
                  />
                  {errors.firstName && (
                    <p className='text-error text-sm'>
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className='label'>Last Name</label>
                  <input
                    className={`input input-bordered w-full ${
                      errors.lastName ? 'input-error' : ''
                    }`}
                    placeholder='Last Name'
                    {...register('lastName', {
                      required: 'Last name is required',
                      minLength: {
                        value: 3,
                        message: 'Minimum 3 characters',
                      },
                    })}
                  />
                  {errors.lastName && (
                    <p className='text-error text-sm'>
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='label'>Age</label>
                  <input
                    type='number'
                    placeholder='Age'
                    className={`input input-bordered w-full ${
                      errors.age ? 'input-error' : ''
                    }`}
                    {...register('age', {
                      required: 'Age is required',
                      min: {
                        value: 18,
                        message: 'Must be 18+',
                      },
                    })}
                  />
                  {errors.age && (
                    <p className='text-error text-sm'>{errors.age.message}</p>
                  )}
                </div>

                <div>
                  <label className='label'>Gender</label>
                  <select
                    placeholder='Select Gender'
                    className={`select select-bordered w-full ${
                      errors.gender ? 'input-error' : ''
                    }`}
                    {...register('gender', {
                      required: 'Gender is required',
                    })}>
                    <option value='MALE'>Male</option>
                    <option value='FEMALE'>Female</option>
                    <option value='OTHER'>Other</option>
                  </select>
                  {errors.gender && (
                    <p className='text-error text-sm'>
                      {errors.gender.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className='label'>Email</label>
                <input
                  type='email'
                  placeholder='Enter email'
                  className={`input input-bordered w-full ${
                    errors.email ? 'input-error' : ''
                  }`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email',
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
                  placeholder='Enter password'
                  className={`input input-bordered w-full ${
                    errors.password ? 'input-error' : ''
                  }`}
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

              <div className='flex justify-center'>
                <Link className='font-bold' to='/auth/login'>
                  Login now
                </Link>
              </div>

              <button className='btn btn-primary mt-4 w-full'>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
