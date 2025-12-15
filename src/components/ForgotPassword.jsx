/* eslint-disable react-hooks/exhaustive-deps */
import { CircleX } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import authServer from './api/authServer';
import useToast from './utils/useToast';

function ForgotPassword({ modalRef }) {
  const [user, setUser] = useState(null);
  const showToast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: null,
  });

  useEffect(() => {
    reset();
  }, []);

  const onSubmit = (data) => {
    if (data.email) {
      authServer
        .forgotPassword(data.email)
        .then((res) => {
          setUser(res);
          reset();
        })
        .catch(() => {
          showToast('Oops! That email doesn’t look right', 'error');
          reset();
        });
    } else if (data.password) {
      authServer.resetPassword(user._id, data).then(() => {
        setUser(null);
        reset();
        closeModal();
        showToast('Password Reset Successfully...!!', 'error');
      });
    }
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <>
      <dialog ref={modalRef} id='forgotPassword' className='modal'>
        <div className='modal-box w-150 '>
          <h3 className='font-bold text-center text-lg pt-0 mt-0'>
            Forgot Password
          </h3>
          <button
            onClick={closeModal}
            className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
            <CircleX />
          </button>

          <form
            className='fieldset space-y-3'
            onSubmit={handleSubmit(onSubmit)}>
            {!user?._id ? (
              <div>
                <label className='label'>Email</label>
                <input
                  type='email'
                  className={`input w-110 input-bordered ${
                    errors.email ? 'input-error' : ''
                  }`}
                  placeholder='Enter email'
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
            ) : (
              <div>
                <label className='label'>Enter new password</label>
                <input
                  type='password'
                  className={`input w-110 input-bordered ${
                    errors.password ? 'input-error' : ''
                  }`}
                  placeholder='Enter new password'
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
            )}

            <div className='modal-action'>
              <button className='btn btn-primary'>Submit</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default ForgotPassword;
