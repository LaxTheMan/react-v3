import React from 'react';
import { FieldErrors, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { AddressForm } from '../templates/Practice4';

type InputFieldProps = {
  label: string;
  name: Path<AddressForm>;
  register: UseFormRegister<AddressForm>;
  validationRules?: RegisterOptions<AddressForm>;
  errors?: FieldErrors<AddressForm>;
};

export const InputField = ({ label, name, register, validationRules, errors }: InputFieldProps) => {
  const fieldError = errors?.[name];

  return (
    <div className="space-x-4 flex items-baseline">
      <label className="w-40">{label}</label>
      <div className="flex flex-col items-baseline">
        <input
          {...register(label, validationRules)}
          type="text"
          className="w-auto px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        {fieldError && (fieldError.type === 'required' || 'pattern') && (
          <p className=" text-red text-left">{fieldError.message}</p>
        )}
      </div>
    </div>
  );
};
