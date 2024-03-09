"use client";
import Wrapper from "@/components/wrapper";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ContactData } from "@/data/home/contact-us";
import SectionTag from "@/components/section-tag";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Must be 2 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Must be 10 or more characters long" }),
});

const ContactUs = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const {
    reset,
    formState: { isSubmitSuccessful, errors },
  } = form;

  useEffect(
    function () {
      if (isSubmitSuccessful) {
        reset({
          name: "",
          email: "",
          message: "",
        });
      }
    },
    [isSubmitSuccessful, reset]
  );

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok)
        throw new Error("an error occured! message unsuccessful");

      toast.success("Message sent! We'll be in touch shortly.");
    } catch (error) {
      console.log("error", error);
      toast.error("Oops! Something went wrong. Please try again.");
    }
  }

  return (
    <section className="bg-secondaryBg py-16">
      <SectionTag>{ContactData.tag}</SectionTag>
      <Wrapper className="pt-8">
        <div className="w-full sm:w-4/5 md:w-2/3 mx-auto">
          <h2 className="text-center text-xl font-semibold text-headerFg mb-2">
            {ContactData.title}
          </h2>
          <p className="text-center text-sm text-gray-800 dark:text-bodyFg">
            {ContactData.description}
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 py-10 mx-auto"
            >
              <div className="flex gap-6">
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Full name"
                            {...field}
                            className={cn(
                              "h-10 bg-white dark:bg-background rounded-sm",
                              errors.name
                                ? "border-destructive focus-visible:ring-destructive focus-visible:border-transparent"
                                : "border-gray-300 dark:border-gray-700"
                            )}
                          />
                        </FormControl>
                        {/* <FormDescription>
                        This is your public display name.
                      </FormDescription> */}
                        {/* <FormMessage /> */}
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="email"
                            {...field}
                            className={cn(
                              "h-10 bg-white dark:bg-background rounded-sm",
                              errors.email
                                ? "border-destructive focus-visible:ring-destructive focus-visible:border-transparent"
                                : "border-gray-300 dark:border-gray-700"
                            )}
                          />
                        </FormControl>
                        {/* <FormDescription>
                        This is your public display name.
                      </FormDescription> */}
                        {/* <FormMessage /> */}
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="message"
                        {...field}
                        className={cn(
                          "h-28 bg-white dark:bg-background rounded-sm resize-none",
                          errors.message
                            ? "border-destructive focus-visible:ring-destructive focus-visible:border-transparent"
                            : "border-gray-300 dark:border-gray-700"
                        )}
                      />
                    </FormControl>
                    {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}

                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
              <Button type="submit" className="ml-auto block">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </Wrapper>
    </section>
  );
};

export default ContactUs;
