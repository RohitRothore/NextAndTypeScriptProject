import { z } from "zod";

export const userNameValidation = z
  .string()
  .min(2, "User name must have atleast 2 characters")
  .max(20, "User name should not have greater than 20 characters")
  .regex(/^[a-zA-Z0-9]+$/, "User not should not contain special characters");

export const signUpSchema = z.object({
    userName: userNameValidation,
    email: z.string().email({message:"Invalid Email Address"}),
    password:z.string().min(6, {message:"Password must be at least 6 characters"}),
})