import { formatDistanceToNow } from 'date-fns';
import { Avatar } from './Avatar';

export default function ChatMessage({ message, isOwn, firstName,createdAt }) {
    console.log("createdAt",createdAt)
  return (
    <div className={`chat ${isOwn ? 'chat-end' : 'chat-start'}`}>
      <div className='chat-image avatar'>
        <div className='w-8 rounded-full'>
          <Avatar name={firstName} />
        </div>
      </div>
      <div className='chat-header'>
        <time className='text-xs opacity-50'>
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </time>
      </div>

      <div className='chat-bubble'>{message}</div>
      <div className='chat-footer opacity-50 text-xs'>Seen</div>
    </div>
  );
}
