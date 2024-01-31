'use client';
import { createContext, useState, useEffect } from 'react';

const NotificationContext = createContext();
export const NotificationProvider = ({ children }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [type, setType] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    //esconder notificacion luego de 3 seg
    const time = setTimeout(() => {
      setShowNotification(false);
    }, 1700);
    return () => clearTimeout(time);
  }, [showNotification]);

  const notificationHandler = (args) => {
    setType(args.type);
    setMessage(args.message);
    setShowNotification(true);
  };
  return (
    <NotificationContext.Provider
      value={{ notificationHandler, showNotification, type, message }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
