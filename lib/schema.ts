import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: "Please enter your First Name with at least 2 characters",
    })
    .max(50),
  lastName: z
    .string()
    .min(2, {
      message: "Please enter your Last Name with at least 2 characters",
    })
    .max(50),
  email: z.string().min(1, { message: "Email is required for contact" }).email({
    message: "Please enter a valid email address.",
  }),
  // phoneNo: z.string().optional(),
  inquiryType: z.string().min(1, { message: "Please select an inquiry type" }),
  message: z.string().min(20, {
    message:
      "Please provide a detailed message with at least 20 characters to help us better understand your inquiry.",
  }),
});
