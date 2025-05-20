import { z } from "zod";

export const roleEnum = z.enum(["job-seeker", "recruiter"]);

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: roleEnum,
});

export const signupSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: roleEnum,
});

export const newJobSchema = z.object({
  title: z.string().min(2, "Job title is required"),
  type: z.string(),
  skills: z.array(z.string()).min(1, "Please select at least one skill"),
  experience: z.string(),
  description: z.string().min(10, "Job description must be more detailed"),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;
export type SignupFormInputs = z.infer<typeof signupSchema>;
export type JobFormValues = z.infer<typeof newJobSchema>;
