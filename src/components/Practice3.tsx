import React from 'react';
import {  UseFormRegisterReturn } from 'react-hook-form';
import { InputField } from './InputField';

export const Practice3 = () => {
  return (
    <InputField
      label={'Postal Code'}
      name={'postalCode'}
      register={function <
        TFieldName extends 'postalCode' | 'prefecture' | 'area' = 'postalCode' | 'prefecture' | 'area',
      >(
      ): UseFormRegisterReturn<TFieldName> {
        throw new Error('Function not implemented.');
      }}
    />
  );
};
