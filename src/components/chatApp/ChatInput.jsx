import { useState } from 'react';

export default function ChatInput({ onSend }) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText('');
  };

  return (
    <div className='p-3 border-t flex gap-2'>
      <input
        type='text'
        className='input input-bordered w-full'
        placeholder='Type a message...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button className='btn btn-primary' onClick={handleSend}>
        Send
      </button>
    </div>
  );
}
