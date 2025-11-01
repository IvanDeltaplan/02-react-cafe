// src/components/notification/Notification.tsx
import css from "./Notification.module.css";

export interface NotificationProps {
  message: string;
}

export default function Notification({ message }: NotificationProps) {
  return <p className={css.message}>{message}</p>;
}
