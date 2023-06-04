'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from '@/components/common/button/button.component';

import { schema, Schema } from './constants';

import Input from './input/input';

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Schema>({ resolver: zodResolver(schema) });

  const router = useRouter();

  const submitHandler = () => {
    router.push('/');
  };

  return (
    <div>
      <form
        className="flex flex-col items-center gap-10 md:items-end md:gap-6"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="flex w-full max-w-xs flex-col gap-3 md:max-w-xl xl:max-w-sm">
          <Input
            error={errors.name}
            placeholder="Name"
            register={register}
            id="name"
          />
          <Input
            error={errors.email}
            placeholder="Email Address"
            register={register}
            id="email"
          />
          <Input
            error={errors.phone}
            placeholder="Phone"
            register={register}
            id="phone"
          />
          <Input
            error={errors.message}
            placeholder="Message"
            register={register}
            type="textarea"
            id="message"
          />
        </div>
        <Button isSubmit onDark>
          Submit
        </Button>
      </form>
    </div>
  );
}
