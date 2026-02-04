import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import ThreeDCanvas from '../common/ThreeDCanvas';

const ContactPage = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute inset-x-0 -bottom-32 mx-auto hidden max-w-md sm:block">
            <ThreeDCanvas className="h-40" variant="particles" />
          </div>
        </div>
        <div className="relative mx-auto max-w-5xl px-6 text-center text-slate-50">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-sky-400"
          >
            Let&apos;s Talk About Your Roadmap
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
            className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Share where you are today and where you need your digital products to be.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="mx-auto max-w-3xl text-sm text-slate-300 sm:text-base"
          >
            We respond to every enquiry with a senior delivery lead. No sales scripts—just a practical conversation
            about timelines, constraints, and the outcomes you want from Elite Digital Solutions.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="mt-20 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="rounded-3xl bg-white p-6 shadow-md shadow-slate-200 ring-1 ring-slate-100 sm:p-8"
            >
              <h2 className="mb-2 text-xl font-semibold text-slate-900 sm:text-2xl">
                Tell us about your initiative.
              </h2>
              <p className="mb-6 text-sm text-slate-600">
                Share a brief overview of your project, timelines, and current challenges. The more context you can
                provide, the better we can prepare before our first conversation.
              </p>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#2563eb] focus:bg-white focus:ring-2 focus:ring-[#2563eb]/20"
                      placeholder="Alex Johnson"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-700"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#2563eb] focus:bg-white focus:ring-2 focus:ring-[#2563eb]/20"
                      placeholder="Your organisation or product name"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-700"
                    >
                      Work Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#2563eb] focus:bg-white focus:ring-2 focus:ring-[#2563eb]/20"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-700"
                    >
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#2563eb] focus:bg-white focus:ring-2 focus:ring-[#2563eb]/20"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="services"
                    className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-700"
                  >
                    Services You&apos;re Interested In
                  </label>
                  <input
                    id="services"
                    name="services"
                    type="text"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#2563eb] focus:bg-white focus:ring-2 focus:ring-[#2563eb]/20"
                    placeholder="e.g. Web platform, mobile app, AI, cloud, UX"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-700"
                  >
                    Project Overview
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#2563eb] focus:bg-white focus:ring-2 focus:ring-[#2563eb]/20"
                    placeholder="Share your goals, current challenges, budget range, and preferred timeline."
                  />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/40 transition hover:bg-[#1d4ed8] hover:shadow-lg hover:shadow-blue-500/50"
                  >
                    Submit enquiry
                    <ArrowRight size={16} />
                  </button>
                  <p className="text-xs text-slate-500">
                    We aim to reply to new enquiries within one business day.
                  </p>
                </div>
              </form>
            </motion.div>

            {/* Contact details */}
            <motion.aside
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
              className="space-y-6 rounded-3xl bg-slate-900 px-6 py-7 text-slate-50 shadow-xl shadow-slate-900/60 sm:px-7 sm:py-8"
            >
              <h2 className="mb-2 text-lg font-semibold sm:text-xl">
                Prefer to reach out directly?
              </h2>
              <p className="mb-4 text-sm text-slate-200">
                Our team is available across time zones in Europe and North America. Share a short brief and we will
                connect you with the best people to help.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sky-300">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Email
                    </p>
                    <a
                      href="mailto:hello@elitedigitalsolutions.com"
                      className="text-sm font-medium text-slate-50 hover:text-sky-300"
                    >
                      hello@elitedigitalsolutions.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sky-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Phone
                    </p>
                    <p className="text-sm font-medium text-slate-50">
                      +1 (628) 555‑0142
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sky-300">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Offices
                    </p>
                    <p className="text-sm text-slate-100">
                      London · Berlin · Toronto (remote‑first delivery teams).
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sky-300">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Availability
                    </p>
                    <p className="text-sm text-slate-100">
                      Monday–Friday, 9:00–18:00 (client time zones).
                    </p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

