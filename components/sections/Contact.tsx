"use client";

import { useState } from "react";
import { useLivery } from "@/components/ui/LiveryContext";
import { Mail, MapPin, Clock, CheckCircle2, Loader2, ArrowUpRight } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const { activeTeam } = useLivery();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "UI/UX & Product Design",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please provide your name or company";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /.+@.+\..+/;
    if (!formData.email.trim()) {
      newErrors.email = "Please provide your work email";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@domain.com)";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe what you are looking to design or build";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Brief should be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1100));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      name: "",
      email: "",
      service: "UI/UX & Product Design",
      message: "",
    });
    setErrors({});
  };

  const handleReset = () => {
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="relative min-h-[100dvh] flex flex-col justify-center py-20 md:py-28 transition-colors">
      {/* Smooth Gradient Divider with Fluid Margin */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28" aria-hidden="true">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/50 dark:via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(1.5rem,3vw+1vh,3rem)] items-center">
          {/* Left Column: Studio Info */}
          <div>
            <h2 className="fluid-h2 font-black text-slate-900 dark:text-white uppercase tracking-tight leading-[0.98]">
              HAVE A PROJECT IN MIND?{" "}
              <span style={{ color: activeTeam.color }}>LET'S CREATE TOGETHER.</span>
            </h2>

            <p className="mt-[clamp(0.75rem,1.5vh,1.25rem)] fluid-body text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
              Have a new brand to launch, a digital product to design, or a web experience to elevate?
              Send us your project details below.
            </p>

            <div className="mt-[clamp(1.25rem,2.2vh,2rem)] space-y-[clamp(0.75rem,1.5vh,1.25rem)]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#12141c] border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white flex-shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4" style={{ color: activeTeam.color }} />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Studio Address
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-mono">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#12141c] border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white flex-shrink-0 shadow-sm">
                  <Mail className="w-4 h-4" style={{ color: activeTeam.color }} />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Direct Email
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-mono">
                    hello@win.studio
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#12141c] border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white flex-shrink-0 shadow-sm">
                  <Clock className="w-4 h-4" style={{ color: activeTeam.color }} />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Response SLA
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-mono">
                    Under 24 business hours turnaround
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form with Fluid Padding */}
          <div className="p-[clamp(1.25rem,2vw+0.5vh,2rem)] rounded-2xl sm:rounded-3xl bg-white dark:bg-[#12141c] border border-slate-200/90 dark:border-white/10 shadow-2xl transition-all">
            {isSuccess ? (
              <div className="text-center py-8 animate-in fade-in duration-300">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-950 font-bold"
                  style={{ backgroundColor: activeTeam.color }}
                >
                  <CheckCircle2
                    className={`w-7 h-7 ${
                      activeTeam.id === "vr46-neon" ? "text-slate-950" : "text-white"
                    }`}
                  />
                </div>
                <h3 className="fluid-h4 font-black uppercase text-slate-900 dark:text-white font-mono">
                  Message Received Successfully
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Our design team in Chennai will review your requirements and respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 px-6 py-2.5 text-xs uppercase tracking-wider font-mono font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.08] rounded-full transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-[clamp(0.75rem,1.4vh,1.1rem)]">
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name <span style={{ color: activeTeam.color }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl border ${
                      errors.name
                        ? "border-rose-500 bg-rose-50/20 dark:bg-rose-950/20"
                        : "border-slate-300 dark:border-white/15 bg-white dark:bg-white/[0.03]"
                    } text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all font-sans`}
                    placeholder="e.g. Alex Rivera"
                  />
                  {errors.name && (
                    <p className="mt-1 text-[11px] font-mono font-medium text-rose-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Work Email <span style={{ color: activeTeam.color }}>*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl border ${
                      errors.email
                        ? "border-rose-500 bg-rose-50/20 dark:bg-rose-950/20"
                        : "border-slate-300 dark:border-white/15 bg-white dark:bg-white/[0.03]"
                    } text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all font-sans`}
                    placeholder="name@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-[11px] font-mono font-medium text-rose-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Design Discipline
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#151824] text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all font-sans"
                  >
                    <option value="UI/UX & Product Design">UI/UX & Product Design</option>
                    <option value="Brand Identity & Art Direction">Brand Identity & Art Direction</option>
                    <option value="Motion & Interactive Experience">Motion & Interactive Experience</option>
                    <option value="Creative Web Development">Creative Web Development</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Project Brief <span style={{ color: activeTeam.color }}>*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl border ${
                      errors.message
                        ? "border-rose-500 bg-rose-50/20 dark:bg-rose-950/20"
                        : "border-slate-300 dark:border-white/15 bg-white dark:bg-white/[0.03]"
                    } text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all font-sans resize-none`}
                    placeholder="Tell us about your brand, scope, timelines, or product goals..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] font-mono font-medium text-rose-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ backgroundColor: activeTeam.color }}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs uppercase tracking-wider font-mono font-bold ${
                    activeTeam.id === "vr46-neon" ? "text-slate-950" : "text-white"
                  } shadow-lg transition-all duration-200 hover:brightness-110 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
