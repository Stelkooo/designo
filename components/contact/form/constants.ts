import { z } from 'zod';

export const schema = z.object({
  name: z.string().min(2, { message: "Can't be empty" }),
  email: z.string().email({ message: 'Must be a valid email' }),
  phone: z.string().min(2, { message: "Can't be empty" }),
  message: z.string().min(10, { message: "Can't be empty" }),
});

export type Schema = z.infer<typeof schema>;
