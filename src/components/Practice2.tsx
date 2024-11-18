import React from 'react';
import { useState } from 'react';
import { Input } from './Input';

export const Practice2 = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="w-28 h-3 flex flex-col justify-center">
      <Input type="checkbox" checked={isChecked} onChange={handleChange} />
    </div>
  );
};
