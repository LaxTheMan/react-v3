import React from "react";
type InputProps = {
  type: string;
  checked: boolean;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLElement>) => void;
};

export const Input: React.FC<InputProps> = ({ type, checked, className = '', onChange }: InputProps) => {
  return (
    <div className="flex justify-between">
      <input type={type} className={className} checked={checked} onChange={onChange} />
      {checked && <label className="mx-2">&apos;hello world&apos;</label>}
    </div>
  );
};
