"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(), // Honeypot field
});

type FormData = z.infer<typeof formSchema>;

export function EmailForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          company: data.company,
          source: new URLSearchParams(window.location.search).get("utm_source"),
          campaign: new URLSearchParams(window.location.search).get(
            "utm_campaign"
          ),
        }),
      });

      if (response.status === 204) {
        // Honeypot or rate limit - silently accept
        reset();
        setIsSuccess(true);
        return;
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      // Success!
      setIsSuccess(true);
      reset();

      // Dispatch analytics event
      window.dispatchEvent(
        new CustomEvent("lead:submitted", {
          detail: { email: data.email },
        })
      );

      toast({
        variant: "success",
        title: "Welcome to the family! 🎉",
        description: "Check your inbox soon for exclusive early-bird perks!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong",
        description:
          error instanceof Error ? error.message : "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-4"
      aria-live="polite"
    >
      <div className="space-y-2">
        <Label htmlFor="email" className="sr-only">
          Email address
        </Label>
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            id="email"
            type="email"
            placeholder="mom@email.com"
            aria-label="Email address"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`flex-1 h-14 text-lg bg-white/80 border-2 ${
              isSuccess
                ? "border-stemGreen-500 focus-visible:ring-stemGreen-500"
                : ""
            }`}
            disabled={isSubmitting}
            {...register("email")}
          />
          <Button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className="h-14 px-8 bg-gradient-to-r from-pumpkin-500 to-orange-500 hover:from-pumpkin-600 hover:to-orange-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all sm:w-auto w-full"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />✨ Joining...
              </>
            ) : isSuccess ? (
              "🎉 You're in!"
            ) : (
              "Get Early Access"
            )}
          </Button>
        </div>
        {errors.email && (
          <p id="email-error" className="text-sm text-destructive" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        {...register("company")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <p className="text-sm text-muted-foreground text-center">
        No spam—just launch updates.
      </p>
    </form>
  );
}
