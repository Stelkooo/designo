/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import { Schema } from '../constants';
import Error from './error/error.component';

type Props = {
  error: FieldError | undefined;
  register: UseFormRegister<Schema>;
  placeholder: string;
  type?: 'text' | 'textarea';
  id: keyof Schema;
};

export default forwardRef(function Input(
  { id, error, placeholder, register, type = 'text' }: Props,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <div className="relative w-full">
      {type === 'text' ? (
        <input
          type="text"
          placeholder={placeholder}
          {...register(id)}
          ref={register(id).ref}
          className="w-full border-b border-b-white bg-transparent p-3 text-white outline-none transition-all placeholder:text-white placeholder:text-opacity-50 hover:border-b-[3px] hover:placeholder:text-opacity-100 focus:border-b-[3px]"
        />
      ) : (
        <textarea
          placeholder={placeholder}
          {...register(id)}
          ref={register(id).ref}
          className="w-full resize-none border-b border-b-white bg-transparent p-3 font-medium text-white outline-none transition-all placeholder:text-white placeholder:text-opacity-50 hover:border-b-[3px] hover:placeholder:text-opacity-100 focus:border-b-[3px]"
          rows={4}
        />
      )}
      {error?.message ? <Error message={error.message} /> : null}
    </div>
  );
});
