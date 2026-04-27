import styles from './Button.module.css';

export default function Button({ variant = 'primary', size, children, onClick, className = '' }) {
  const cls = [
    styles.btn,
    styles[variant],
    size ? styles[size] : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
