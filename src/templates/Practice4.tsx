import React from 'react';
import { InputField } from '../components/InputField';
import { ERROR_MESSAGES } from '../messages';
import { useFormData } from '../hooks/useFormData';

export const Practice4 = () => {
  const { register, handleSubmit, onSubmit, errors, noResultsMessage, validatePostalCode } = useFormData();

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
            onClick={validatePostalCode}
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
