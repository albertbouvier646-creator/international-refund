import React from 'react';

export const Badge = ({ children, className = '', ...props }) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${className}`} {...props}>
      {children}
    </span>
  );
};