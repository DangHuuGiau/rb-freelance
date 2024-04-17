"use server";

import { contactFormSchema } from "@/lib/schema";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function apply(values: z.infer<typeof contactFormSchema>) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // console.log(values);
  const validatedFields = contactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    // console.log(validatedFields.error.flatten().fieldErrors);
    return {
      message: "Invalid data",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = validatedFields.data;

  try {
    // console.log("success");
    // console.log(data);
    revalidatePath("/contact");
    return {
      message: "Message successfully sent!",
      status: "success",
    };
  } catch (err) {
    return {
      message: "There was an error submitting the message!",
      status: "failed",
    };
  }
}
