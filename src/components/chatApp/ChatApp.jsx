/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cerateSocketConnetion } from './chat';
import { useSelector } from 'react-redux';
import ChatLayout from './ChatLayout';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatInput from './ChatInput';
import userServer from '../api/userServer';

export default function ChatApp() {
  const { fromUserId } = useParams();
  const { user } = useSelector((state) => state.user);
  const [targetUser, setTargetUser] = useState({});
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (user?._id) {
          const chat = await userServer.getChat(fromUserId);
          const defaultChat = chat?.data?.messages?.map((item) => ({
            text: item.text,
            firstName: item.sender.firstName,
            createdAt: item.createdAt,
            isOwn: item.sender._id === user._id,
          }));

          setMessages(defaultChat);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user?._id]);

  useEffect(() => {
    if (!user?._id) return;
    (async () => {
      try {
        const targetUserInfo = await userServer.get(fromUserId);
        setTargetUser(targetUserInfo);
      } catch (error) {
        console.error(error);
      }
    })();

    const socket = cerateSocketConnetion();
    socket.emit('joinChat', {
      firstName: user.firstName,
      userId: user._id,
      targetUserId: fromUserId,
    });

    socket.on('receiveMessage', ({ message, firstName, userId, createdAt }) => {
      setMessages((oldMessages) => [
        ...oldMessages,
        { text: message, createdAt, firstName, isOwn: userId === user._id },
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, [fromUserId, user?._id]);

  const sendMessage = (newMessage) => {
    const socket = cerateSocketConnetion();
    socket.emit('sendMessage', {
      firstName: user.firstName,
      userId: user._id,
      targetUserId: fromUserId,
      text: newMessage,
    });
  };
  
  return (
    <div className='pt-25'>
      <ChatLayout>
        <ChatHeader firstName={targetUser?.firstName} />
        <ChatBody messages={messages} />
        <ChatInput onSend={sendMessage} />
      </ChatLayout>
    </div>
  );
}
