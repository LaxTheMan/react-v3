import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';
import { AddressForm } from '../templates/Practice4';
import { InputField } from './InputField';

export const Practice3 = () => {
  return (
    <InputField
      label={'Postal Code'}
      name={'postalCode'}
      register={function <
        TFieldName extends 'postalCode' | 'prefecture' | 'area' = 'postalCode' | 'prefecture' | 'area',
      >(
        name: TFieldName,
        options?: RegisterOptions<AddressForm, TFieldName> | undefined,
      ): UseFormRegisterReturn<TFieldName> {
        throw new Error('Function not implemented.');
      }}
    />
  );
};
