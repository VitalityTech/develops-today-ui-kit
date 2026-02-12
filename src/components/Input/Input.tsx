import React, { useState } from 'react';
import styles from './Input.module.css';

// Описуємо типи (TypeScript - обов'язкова вимога ТЗ)
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'password' | 'number';
  clearable?: boolean;
  label?: string;
}

export const Input: React.FC<InputProps> = ({ 
  type = 'text', 
  clearable, 
  label, 
  value, 
  onChange, 
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const currentType = isPassword && showPassword ? 'text' : type;

  const handleClear = () => {
    if (onChange) {
      const event = { target: { value: '' } } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    }
  };

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.container}>
        <input
          {...props}
          type={currentType}
          value={value}
          onChange={onChange}
          className={styles.input}
        />
        <div className={styles.actions}>
          {clearable && value && (
            <button onClick={handleClear} className={styles.btn} type="button">✕</button>
          )}
          {isPassword && (
            <button onClick={() => setShowPassword(!showPassword)} className={styles.btn} type="button">
              {showPassword ? '🔒' : '👁️'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};