import { formatDistanceToNow } from 'date-fns';
import { Avatar } from './Avatar';

export default function ChatMessage({
  message,
  isOwn,
  firstName,
  createdAt,
  colorClass = '',
  avatarBgColor = '',
}) {
  return (
    <div className={`chat ${isOwn ? 'chat-end' : 'chat-start'}`}>
      <div className='chat-image avatar'>
        <div className='w-8 rounded-full'>
          <Avatar
            name={firstName}
            avatarBgColor={avatarBgColor}
            isOwn={isOwn}
          />
        </div>
      </div>
      {createdAt && (
        <div className='chat-header'>
          <time className='text-xs opacity-50'>
            {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </time>
        </div>
      )}
      <div className={`chat-bubble ${colorClass} ${isOwn ? "chat-bubble-secondary" : 'chat-bubble-primary'}`}>{message}</div>
      {createdAt && <div className='chat-footer opacity-50 text-xs'>Seen</div>}
    </div>
  );
}
