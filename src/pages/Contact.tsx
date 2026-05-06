import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(150, "Company must be under 150 characters").optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .max(30, "Phone must be under 30 characters")
    .regex(/^[+0-9\s\-()]*$/, "Phone can only contain digits and + - ( )")
    .optional()
    .or(z.literal("")),
  interest: z.enum(["agency", "merchant", "cdm", "interbank-cdm", "cit", "other"]),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: "agency" | "merchant" | "cdm" | "interbank-cdm" | "cit" | "other";
  message: string;
};

const INTERESTS: { value: FormState["interest"]; label: string }[] = [
  { value: "agency", label: "Agency Banking" },
  { value: "merchant", label: "Merchant POS" },
  { value: "cdm", label: "Dedicated CDM" },
  { value: "interbank-cdm", label: "Interbank CDM (public)" },
  { value: "cit", label: "Cash-in-Transit" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "agency",
    message: "",
  });

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      toast({
        title: "Please check the form",
        description: "Some fields need your attention.",
        variant: "destructive",
      });
      return;
    }
    setSubmitted(true);
    toast({
      title: "Request received",
      description: "Our team will be in touch within one business day.",
    });
  };

  const inputBase =
    "w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:ring-2 focus:ring-accent/40";

  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-forest text-white">
        <div className="container-orbit py-8 lg:py-16">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Contact
            </span>
            <h1 className="mt-3 font-bold tracking-tight" style={{ fontSize: "clamp(24px,4vw,48px)" }}>
              Let's talk about your deployment.
            </h1>
            <p className="mt-3 text-white/75 leading-relaxed" style={{ fontSize: "clamp(13px,1.2vw,17px)" }}>
              Tell us a bit about your network and what you'd like to build.
              We respond within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-white py-8 lg:py-16">
        <div className="container-orbit grid lg:grid-cols-5 gap-6 lg:gap-12">
          {/* Info */}
          <Reveal className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
            <div className="rounded-xl bg-tint p-6 border border-border">
              <Mail size={22} className="text-forest" />
              <h3 className="mt-3 text-base font-semibold text-forest">Email</h3>
              <a
                href="mailto:info@orbit247.co.ke"
                className="mt-1 block text-sm text-muted-foreground hover:text-forest"
              >
                info@orbit247.co.ke
              </a>
            </div>
            <div className="rounded-xl bg-tint p-6 border border-border">
              <Phone size={22} className="text-forest" />
              <h3 className="mt-3 text-base font-semibold text-forest">Phone</h3>
              <a href="tel:0788585832" className="mt-1 block text-sm text-muted-foreground hover:text-forest">
                0788 585 832
              </a>
              <a href="tel:0707324596" className="mt-1 block text-sm text-muted-foreground hover:text-forest">
                0707 324 596
              </a>
            </div>
            <div className="rounded-xl bg-tint p-6 border border-border">
              <MapPin size={22} className="text-forest" />
              <h3 className="mt-3 text-base font-semibold text-forest">Office</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Ndemi Lane, off Ngong Road<br />Nairobi, Kenya
              </p>
            </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={80} className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-border bg-white p-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
                  <CheckCircle2 size={28} className="text-forest" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-forest">Thanks — message received.</h3>
                <p className="mt-2 text-muted-foreground">
                  Our team will reach out within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                className="rounded-2xl border border-border bg-white p-6 sm:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-forest mb-1.5">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={`${inputBase} ${errors.name ? "border-destructive" : "border-border"}`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-forest mb-1.5">
                      Work email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={`${inputBase} ${errors.email ? "border-destructive" : "border-border"}`}
                      placeholder="you@company.co.ke"
                    />
                    {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-forest mb-1.5">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      maxLength={150}
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      className={`${inputBase} ${errors.company ? "border-destructive" : "border-border"}`}
                      placeholder="Bank or business name"
                    />
                    {errors.company && <p className="mt-1 text-xs text-destructive">{errors.company}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-forest mb-1.5">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      maxLength={30}
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={`${inputBase} ${errors.phone ? "border-destructive" : "border-border"}`}
                      placeholder="+254 ..."
                    />
                    {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-xs font-semibold text-forest mb-1.5">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    value={form.interest}
                    onChange={(e) => update("interest", e.target.value as FormState["interest"])}
                    className={`${inputBase} border-border`}
                  >
                    {INTERESTS.map((i) => (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-forest mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    maxLength={1000}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className={`${inputBase} resize-none ${errors.message ? "border-destructive" : "border-border"}`}
                    placeholder="Tell us about your network, locations, or volumes..."
                  />
                  <div className="mt-1 flex justify-between">
                    {errors.message ? (
                      <p className="text-xs text-destructive">{errors.message}</p>
                    ) : (
                      <span />
                    )}
                    <span className="text-xs text-muted-foreground">
                      {form.message.length}/1000
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors w-full sm:w-auto"
                >
                  Send message <Send size={16} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
