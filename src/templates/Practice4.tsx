import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputField } from '../components/InputField';
import { useState } from 'react';

export type FormInput = {
  'Postal Code': string;
  Prefecture: string;
  'City/Ward/Town': string;
};

export const Practice4 = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormInput>({ mode: 'onChange' });
  const [, setAddress] = useState<FormInput>({ 'Postal Code': '', Prefecture: '', 'City/Ward/Town': '' });
  const [noResultsMessage, setNoResultsMessage] = useState<string>('');
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  const postalCode = watch('Postal Code', '');

  const fetchData = async (query: string) => {
    try {
      const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${query}`);
      const result = await response.json();
      if (result['results']) {
        const { address1, address2 } = result['results'][0];
        const newAddress = { 'Postal Code': query, Prefecture: address1, 'City/Ward/Town': address2 };

        setAddress(newAddress);
        setValue('Prefecture', address1, { shouldValidate: true });
        setValue('City/Ward/Town', address2, { shouldValidate: true });
        setNoResultsMessage('');
      } else {
        setNoResultsMessage('該当する住所が存在しません');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClick = () => {
    if (postalCode.length === 7) {
      fetchData(postalCode);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-3">addressSearch</h1>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <InputField
            label="Postal Code"
            register={register}
            validationRules={{
              required: '必須項目です',
              pattern: { value: /^(\d{7})?$/, message: '7桁の数字を入力してください' },
            }}
            errors={errors}
          />
          <button
            className="self-start mx-2 px-1 py-1 bg-slate-500 text-white rounded-md hover:bg-slate-600"
            type="button"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
        <InputField
          label="Prefecture"
          register={register}
          validationRules={{
            required: '必須項目です',
          }}
          errors={errors}
        />
        <InputField
          label="City/Ward/Town"
          register={register}
          validationRules={{
            required: '必須項目です',
          }}
          errors={errors}
        />
        <div className="m-10 flex justify-center">
          {noResultsMessage ? (
            <p className="text-red">{noResultsMessage}</p>
          ) : (
            <input className="my-2 p-1 bg-slate-500 text-white rounded-md hover:bg-slate-600" type="submit" />
          )}
        </div>
      </form>
    </div>
  );
};
