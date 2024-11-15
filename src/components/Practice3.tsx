import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';
import { FormInput } from '../templates/Practice4';
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
      >(
        name: TFieldName,
        options?: RegisterOptions<FormInput, TFieldName> | undefined,
      ): UseFormRegisterReturn<TFieldName> {
        throw new Error('Function not implemented.');
      }}
    />
  );
};
