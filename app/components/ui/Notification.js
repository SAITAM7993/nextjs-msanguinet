import { useContext } from 'react';
import NotificationContext from '../context/NotificationContext';

const Notification = () => {
  const { showNotification, type, message } = useContext(NotificationContext);

  return (
    <>
      {showNotification && (
        //  <div className={`${isOpen ? 'hidden' : 'flex justify-end'} md:flex`}>
        <div
          className={`${
            type === 'success'
              ? 'text-green-600 bg-green-50 border-green-600'
              : 'text-red-600 bg-red-50 border-red-600'
          } flex items-center p-4 mb-4 font-semibold text-base border-l-4 absolute  bottom-12 right-12 py-5`}
          role='alert'
        >
          <svg
            className='flex-shrink-0 inline w-4 h-4 me-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
          </svg>

          <div>
            <span
              className={type === 'success' ? 'text-green-500' : 'text-red-500'}
            >
              {message}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
export default Notification;
