import { useState } from 'react';
import { Input } from './input';

export const Practice2 = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="w-28 h-3 flex flex-col justify-center">
      <Input type="checkbox" checked={isChecked} onChange={handleChange} />
    </div>
  );
};
