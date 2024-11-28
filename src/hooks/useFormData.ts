import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { ERROR_MESSAGES } from '../messages';

export type FetchedAddress = {
  prefecture: string;
  area: string;
};

export type AddressForm = FetchedAddress & { postalCode: string };

export const useFormData = () => {
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
  const fetchData = async (query: string) => {
    try {
      const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${query}`);
      const result = await response.json();
      if (!result?.results?.length) return {};
      const { address1: prefecture, address2: area } = result.results[0];
      return { prefecture, area };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  const postalCode = watch('postalCode', '');
  const validatePostalCode = async () => {
    if (postalCode.length === 7) {
      try {
        const result = await fetchData(postalCode);
        if (result.prefecture && result.area) {
          setValue('prefecture', result.prefecture);
          setValue('area', result.area);
          setNoResultsMessage('');
        } else {
          setNoResultsMessage(ERROR_MESSAGES.invalidPostalCode);
        }
      } catch (error) {
        console.error('Error fetching address:', error);
        setNoResultsMessage(ERROR_MESSAGES.invalidPostalCode);
      }
    }
  };

  return { register, handleSubmit, onSubmit, errors, noResultsMessage, validatePostalCode };
};
