import { io } from 'socket.io-client';

export const cerateSocketConnetion = () => {
  return io(import.meta.env.VITE_API_BASE_URL, {
    withCredentials: true,
  });
};
