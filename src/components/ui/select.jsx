import React from 'react';

export const Select = ({ children, value, onValueChange, ...props }) => {
  return (
    <select 
      value={value} 
      onChange={(e) => onValueChange && onValueChange(e.target.value)}
      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    >
      {children}
    </select>
  );
};

export const SelectTrigger = ({ children }) => children;
export const SelectValue = ({ placeholder }) => <option value="">{placeholder}</option>;
export const SelectContent = ({ children }) => <>{children}</>;
export const SelectItem = ({ children, value }) => <option value={value}>{children}</option>;