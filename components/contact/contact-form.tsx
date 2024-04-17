"use client";

import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Wrapper from "../wrapper";
import { useEffect, useRef, useState, useTransition } from "react";
import { contactFormSchema } from "@/lib/schema";
import { apply } from "@/actions/contact";
import Spinner from "../icons/spinner";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const initialState = {
  message: "",
  status: "",
  errors: null || undefined,
};

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  inquiryType: "",
  message: "",
};

const baseClassName = `h-12 bg-secondaryBg border border-border/80 rounded-md px-4 w-full focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition duration-300 text-foreground/80 focus:text-foreground focus:bg-secondaryBg focus:border-secondaryBg/80 hover:bg-secondaryBg/80 hover:border-secondaryBg/80 hover:text-foreground`;

function SubmitButton({ isPending }: { isPending: boolean }) {
  // console.log(pending);
  return (
    <Button
      type="submit"
      aria-disabled={isPending}
      disabled={isPending}
      size="lg"
      className={cn(
        "text-white flex items-center gap-x-2 text-center text-base transition w-full sm:max-w-56 mx-auto"
        // isPending
        //   ? "bg-gray text-muted-foreground hover:text-muted-foreground"
        //   : ""
      )}
    >
      {isPending && <Spinner />}
      Submit
    </Button>
  );
}

export const ContactForm = () => {
  const [status, setStatus] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: defaultValues,
  });
  const router = useRouter();
  useEffect(() => {
    if (Boolean(status)) {
      if (status === "success") {
        toast.success(
          "Thank you for reaching out to us! Your inquiry has been successfully submitted. We'll get back to you as soon as possible."
        );
        form.reset(defaultValues);
      } else {
        toast.error(
          "Oops! It seems there was an issue with your submission. Please review your information and try again."
        );
      }
    }
  }, [status, form, router]);

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    startTransition(() => {
      apply(values).then((data) => {
        console.log(data.status);
        setStatus(data?.status);
      });
    });
  }

  return (
    <section className="py-12">
      <Wrapper className="space-y-7">
        <div className="space-y-3">
          <h2 className="text-xl font-medium text-headerFg">Get In Touch</h2>
          <p className="max-sm:text-sm">
            We&apos;re eager to connect with you and discover more about your
            construction needs. Please use the form below to reach out to
            BrochureWare. Whether you&apos;re a potential client, partner, or
            just interested in our services, we&apos;re here to address your
            inquiries and offer the support you require.
          </p>
        </div>
        <div className="py-12 px-5 border rounded-md">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 max-sm:space-y-6 sm:space-x-8 md:space-x-10">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={cn("transition duration-300")}>
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter First Name"
                          {...field}
                          className={cn(
                            "",
                            baseClassName,
                            field.value && "text-foreground"
                          )}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={cn("transition duration-300")}>
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Last Name"
                          {...field}
                          className={cn(
                            "",
                            baseClassName,
                            field.value && "text-foreground"
                          )}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 max-sm:space-y-6 sm:space-x-8 md:space-x-10">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={cn("transition duration-300")}>
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your Email"
                          {...field}
                          className={cn(
                            "",
                            baseClassName,
                            field.value && "text-foreground"
                          )}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="inquiryType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={cn("transition duration-300")}>
                        Inquiry Type
                      </FormLabel>
                      <Select
                        name="state"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger
                            className={cn(
                              "outline-none ring-0 focus:ring-0",
                              baseClassName,
                              field.value && "text-foreground"
                            )}
                          >
                            <SelectValue placeholder="Select Inquiry Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            {inquiryTypes.map((item) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your message here..."
                          className="resize-none h-40 bg-secondaryBg border border-border/80 rounded-md px-4 w-full focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition duration-300 text-foreground/80 focus:text-foreground focus:bg-secondaryBg focus:border-secondaryBg/80 hover:bg-secondaryBg/80 hover:border-secondaryBg/80 hover:text-foreground"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <SubmitButton isPending={isPending} />
            </form>
          </Form>
        </div>
      </Wrapper>
    </section>
  );
};

const inquiryTypes = [
  { value: "general-inquiry", label: "General Inquiry" },
  { value: "project-consultation", label: "Project Consultation" },
  { value: "request-for-quote", label: "Request for Quote" },
  { value: "partnership-opportunities", label: "Partnership Opportunities" },
];
