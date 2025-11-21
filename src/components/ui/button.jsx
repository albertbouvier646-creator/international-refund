import React from 'react';

export const Button = ({ children, className = '', onClick, size = 'default', type = 'button', ...props }) => {
  const sizeClasses = {
    default: 'px-4 py-2',
    lg: 'px-6 py-3',
    icon: 'p-2'
  };

  return (
    <button
      type={type}
      className={`rounded-lg font-medium transition-colors ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};