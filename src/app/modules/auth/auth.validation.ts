import { z } from 'zod';
const loginZodSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required!' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});
const captchaZodSchema = z.object({
  body: z.object({
    token: z.string({ required_error: 'Email is required!' }),
  }),
});
export const AuthValidation = {
  loginZodSchema,
  captchaZodSchema,
};
