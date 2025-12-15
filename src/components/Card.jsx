import { MessageCircleHeart, MessageCircleX } from 'lucide-react';

function Card({ fullName, age, email, gender, isEdit = false }) {
  return (
    <div className='flex justify-center items-center min-h-screen  shrink-0'>
      <div className='card w-80  shadow-xl border border-white/10 rounded-2xl  shadow-blue-400'>
        <div className='card-body items-center text-center space-y-3'>
          <div className='avatar mt-10'>
            <div className='w-24 rounded-full ring ring-white/10 ring-offset-base-100 ring-offset-2'>
              <img
                src='https://randomuser.me/api/portraits/women/44.jpg'
                alt={fullName}
              />
            </div>
          </div>

          <h2 className='text-xl font-semibold text-white'>{fullName}</h2>

          <p className='text-gray-400 text-sm'>{email}</p>

          <p className='badge badge-success badge-outline px-4 mb-10'>
            {age} {gender}
          </p>
        </div>
        {!isEdit ? (
          <div className='grid grid-cols-2 border-t border-white/10 rounded-2xl'>
            <button className='btn btn-ghost rounded-t-none rounded-2xl rounded-r-none text-white gap-2 bg-red-400 '>
              <MessageCircleX size={16} />
              Ignored
            </button>
            <button className='btn btn-ghost rounded-t-none rounded-2xl rounded-l-none  text-white gap-2 border-l border-white/10 bg-green-400'>
              <MessageCircleHeart size={16} />
              Interested
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
