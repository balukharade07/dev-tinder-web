import { useDispatch } from 'react-redux';
import { removeToast, setToast } from '../store/slice/utilSlice';

export default function useToast() {
  const dispatch = useDispatch();

  const showToast = (message, type = 'success', duration = 3000) => {
    dispatch(setToast({ show: true, message, type }));

    setTimeout(() => {
      dispatch(removeToast());
    }, duration);
  };

  return showToast;
}
