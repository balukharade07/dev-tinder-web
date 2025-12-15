import React from 'react';
import Register from './Register';
import Card from './Card';
import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector((state) => state.user);
  if(!user?._id) return null

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <Register isEdit={true} defaultValues={user} />
        </div>

        <div>
          <Card {...user} fullName={`${user.firstName} ${user.lastName}`} isEdit={true} />
        </div>
      </div>
    </>
  );
}

export default Profile;
