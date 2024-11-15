import { useState } from 'react';

export const InputField = () => {
  const [textField, setTextField] = useState<string>('');

  const handleClick = () => {
    setTextField('');
  };

  return (
    <div className="relative w-64">
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        onChange={(e) => {
          setTextField(e.target.value);
          console.log(e.target.value);
        }}
        value={textField}
      />
      {textField && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
          onClick={handleClick}
        >
          ×
        </button>
      )}
    </div>
  );
};
