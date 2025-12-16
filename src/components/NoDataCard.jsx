import React from 'react';

function NoDataCard({ text = '' }) {
  return (
    <div className='flex justify-center items-center min-h-screen  shrink-0'>
      <div className='card w-80  shadow-xl border border-white/10 rounded-2xl  shadow-blue-400'>
        <div className='card-body items-center text-center space-y-3'>
          <h2 className='text-xl font-semibold text-white'>No Data</h2>
          <p className='text-gray-400 text-sm'>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default NoDataCard;
