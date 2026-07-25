"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

type FieldConfig = {
  id: string;
  question: string;
  subtitle: string;
  placeholder: string;
  type: string;
};

const steps: FieldConfig[] = [
  {
    id: "location",
    question: "Where's your business based?",
    subtitle: "Country or city",
    placeholder: "e.g. United Arab Emirates",
    type: "text",
  },
  {
    id: "name",
    question: "What is your full name?",
    subtitle: "First and last name",
    placeholder: "e.g. Jane Doe",
    type: "text",
  },
  {
    id: "email",
    question: "What is your email address?",
    subtitle: "Work email preferred",
    placeholder: "e.g. jane@company.com",
    type: "email",
  },
  {
    id: "company",
    question: "What is your company name?",
    subtitle: "Your organization",
    placeholder: "e.g. Acme Corp",
    type: "text",
  },
  {
    id: "services",
    question: "What services are you looking for?",
    subtitle: "e.g. Branding, Digital, Social",
    placeholder: "e.g. A new website and branding",
    type: "text",
  },
  {
    id: "details",
    question: "Any additional details?",
    subtitle: "Project timeline, budget, or other notes",
    placeholder: "Tell us more about your project...",
    type: "textarea",
  },
];

export function ContactForm({ title = "New enquiry" }: { title?: string }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const currentField = steps[currentStep];
  const currentValue = formData[currentField?.id] || "";
  const isValid = currentValue.trim().length > 0;

  const handleNext = () => {
    if (isValid && currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else if (isValid && currentStep === steps.length - 1) {
      submitForm();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentField.type !== "textarea") {
      e.preventDefault();
      handleNext();
    }
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.error('Failed to submit form');
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[2rem] border border-foreground/10 bg-card p-10 text-center shadow-[0_30px_80px_-30px_rgba(0,0,0,0.15)] md:p-16"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[color:var(--brand-cyan)]/10 text-[color:var(--brand-cyan)]">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h2 className="mt-8 font-display text-4xl tracking-tight">
          Request Received
        </h2>
        <p className="mt-4 text-lg text-foreground/70">
          Thank you for reaching out. We will get back to you within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-[2rem] border border-foreground/10 bg-card p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.15)] md:p-10"
    >
      <div className="mb-8 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-foreground/50">
        <span>{title}</span>
        <span>
          0{currentStep + 1} / 0{steps.length}
        </span>
      </div>

      <div className="mb-10 h-1 w-full overflow-hidden rounded-full bg-foreground/10">
        <motion.div
          className="h-full bg-[color:var(--brand-blue)]"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <div className="font-display text-3xl leading-tight tracking-tight md:text-4xl">
                {currentField.question}
              </div>
              <div className="mt-2 text-sm text-foreground/50">
                {currentField.subtitle}
              </div>
              <div className="mt-6">
                {currentField.type === "textarea" ? (
                  <textarea
                    autoFocus
                    className="w-full resize-none rounded-2xl border border-foreground/15 bg-background px-5 py-4 text-lg outline-none placeholder:text-foreground/40 focus:border-foreground/40 min-h-[120px]"
                    placeholder={currentField.placeholder}
                    value={currentValue}
                    onChange={(e) =>
                      setFormData({ ...formData, [currentField.id]: e.target.value })
                    }
                  />
                ) : (
                  <input
                    type={currentField.type}
                    autoFocus
                    className="w-full rounded-2xl border border-foreground/15 bg-background px-5 py-4 text-lg outline-none placeholder:text-foreground/40 focus:border-foreground/40"
                    placeholder={currentField.placeholder}
                    value={currentValue}
                    onChange={(e) =>
                      setFormData({ ...formData, [currentField.id]: e.target.value })
                    }
                    onKeyDown={handleKeyDown}
                  />
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentStep === 0 || isSubmitting}
          className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 text-sm disabled:opacity-30 transition-opacity"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={!isValid || isSubmitting}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background disabled:opacity-40 transition-opacity"
        >
          {isSubmitting ? "Submitting..." : currentStep === steps.length - 1 ? "Submit" : "Continue"}
          {!isSubmitting && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
        </button>
      </div>
    </motion.div>
  );
}
