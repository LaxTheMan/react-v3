import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { InputField } from './InputField';

export const Practice3 = () => {
  return (
    <InputField
      label={'Postal Code'}
      register={function <
        TFieldName extends 'Postal Code' | 'Prefecture' | 'City/Ward/Town' =
          | 'Postal Code'
          | 'Prefecture'
          | 'City/Ward/Town',
      >(): UseFormRegisterReturn<TFieldName> {
        throw new Error('Function not implemented.');
      }}
    />
  );
};
