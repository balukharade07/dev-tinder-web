import { useSelector } from 'react-redux';

function Toast() {
  const toastConfig = useSelector((state) => state?.util?.toast);
  const { show = false, type = '', message = '' } = toastConfig;
  if (!show) return null;

  return (
    <div className='toast toast-top toast-center z-50'>
      <div
        className={`alert text-white ${
          type === 'success'
            ? 'alert-success'
            : type === 'error'
            ? 'alert-error'
            : 'alert-info'
        }`}>
        <span>{message}</span>
      </div>
    </div>
  );
}

export default Toast;
