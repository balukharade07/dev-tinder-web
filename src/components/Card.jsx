import {
  MessageCircle,
  MessageCircleHeart,
  MessageCircleX,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar } from './chatApp/Avatar';

function Card({
  _id,
  fullName,
  age,
  email,
  gender,
  handleConnection,
  isEdit = false,
  screen = '',
  chat = false,
  isOnline = false,
}) {
  console.log('isOnline', isOnline);
  return (
    <div
      className='flex justify-center items-center min-h-screen  shrink-0'
      key={_id}>
      <div className='card w-80  shadow-xl border border-white/10 rounded-2xl  shadow-blue-400'>
        <div className='card-body items-center text-center space-y-3'>
          <div className='avatar mt-10 relative'>
            {isOnline && (
              <span className='absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping'></span>
            )}

            <div className='w-24 rounded-full text-4xl flex justify-center items-center bg-blue-500 ring ring-white/10 ring-offset-base-100 ring-offset-2 relative z-10'>
              <Avatar name={fullName} isCard={true} />
            </div>

            {isOnline && (
              <span className='absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white z-20'></span>
            )}
          </div>

          <h2 className='text-xl font-semibold text-white'>{fullName}</h2>

          <p className='text-gray-400 text-sm'>{email}</p>

          <p className='badge badge-success badge-outline px-4 mb-10'>
            {age} {gender}
          </p>
          {chat && (
            <Link to={`/user/connection/${_id}`}>
              <button className='btn btn-ghost bg-green-600 '>
                <MessageCircle size={16} />
                Chat
              </button>
            </Link>
          )}
        </div>
        {!isEdit ? (
          <div className='grid grid-cols-2 border-t border-white/10 rounded-2xl'>
            <button
              onClick={() =>
                handleConnection(
                  _id,
                  screen === 'connectionRequest' ? 'rejected' : 'ignored',
                )
              }
              className='btn btn-ghost rounded-t-none rounded-2xl rounded-r-none text-white gap-2 bg-red-400 '>
              <MessageCircleX size={16} />
              {screen === 'connectionRequest' ? 'Rejected' : 'Ignored'}
            </button>
            <button
              onClick={() =>
                handleConnection(
                  _id,
                  screen === 'connectionRequest' ? 'accepeted' : 'interested',
                )
              }
              className='btn btn-ghost rounded-t-none rounded-2xl rounded-l-none  text-white gap-2 border-l border-white/10 bg-green-400'>
              <MessageCircleHeart size={16} />

              {screen === 'connectionRequest' ? 'Accepeted' : 'Interested'}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
