import { useForm, SubmitHandler } from 'react-hook-form';
import { InputField } from '../components/InputField';
import { useState } from 'react';
import { ERROR_MESSAGES } from '../messages';

export type AddressForm = {
  postalCode: string;
  prefecture: string;
  area: string;
};

export type AddressSearchResult = {
  results?: Array<{ address1: string; address2: string }>;
};

export const Practice4 = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<AddressForm>({
    mode: 'onBlur',
    defaultValues: {
      postalCode: '',
      prefecture: '',
      area: '',
    },
  });
  const [noResultsMessage, setNoResultsMessage] = useState<string>('');
  const onSubmit: SubmitHandler<AddressForm> = (data) => console.log(data);

  const postalCode = watch('postalCode', '');

  const fetchData = async (query: string) => {
    try {
      const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${query}`);
      const result: AddressSearchResult = await response.json();
      if (result['results']) {
        const { address1, address2 } = result['results'][0];
        setValue('prefecture', address1, { shouldValidate: true });
        setValue('area', address2, { shouldValidate: true });
        setNoResultsMessage('');
      } else {
        setNoResultsMessage(ERROR_MESSAGES.invalidPostalCode);
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
            name="postalCode"
            register={register}
            validationRules={{
              required: ERROR_MESSAGES.required,
              pattern: { value: /^(\d{7})?$/, message: ERROR_MESSAGES.not7digits },
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
          name="prefecture"
          register={register}
          validationRules={{
            required: ERROR_MESSAGES.required,
          }}
          errors={errors}
        />
        <InputField
          label="City/Ward/Town"
          name="area"
          register={register}
          validationRules={{
            required: ERROR_MESSAGES.required,
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
