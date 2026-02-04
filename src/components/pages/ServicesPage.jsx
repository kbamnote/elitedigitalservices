import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe2,
  Smartphone,
  BrainCircuit,
  Palette,
  Cloud,
  Megaphone,
  ArrowRight,
} from 'lucide-react';
import ThreeDCanvas from '../common/ThreeDCanvas';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const services = [
  {
    icon: Globe2,
    title: 'Web Application Engineering',
    short:
      'Robust, high‑performance web platforms that stay fast and secure as traffic grows.',
    bullets: [
      'SPA and micro‑frontend architectures built with modern React stacks.',
      'API‑first platforms ready to integrate with CRMs, ERPs, and third‑party services.',
      'Performance budgets, accessibility checks, and security reviews baked into delivery.',
    ],
    category: 'Web Development',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Cross‑Platform Apps',
    short:
      'Native‑feel mobile experiences that reinforce your brand on every device.',
    bullets: [
      'Product discovery to prioritize the journeys that matter on iOS and Android.',
      'React Native and modern toolchains to move fast without sacrificing quality.',
      'Analytics, in‑app messaging, and experimentation frameworks wired from day one.',
    ],
    category: 'Mobile Development',
  },
  {
    icon: BrainCircuit,
    title: 'Applied AI & Automation',
    short:
      'Practical AI integrations that improve operations, not just dashboards.',
    bullets: [
      'Recommendation, routing, and scoring engines aligned with your KPIs.',
      'ML‑powered search and personalization across content and commerce.',
      'Secure data pipelines and MLOps practices to keep models reliable in production.',
    ],
    category: 'AI Solutions',
  },
  {
    icon: Palette,
    title: 'Product Design & UI/UX',
    short:
      'Interface systems your teams can scale, and users immediately understand.',
    bullets: [
      'Experience mapping and UX research to de‑risk product decisions.',
      'Design systems and component libraries documented for future squads.',
      'High‑fidelity prototyping to validate ideas with real stakeholders quickly.',
    ],
    category: 'UI/UX Design',
  },
  {
    icon: Cloud,
    title: 'Cloud & Platform Engineering',
    short:
      'Secure, observable, cloud‑native foundations for modern digital products.',
    bullets: [
      'Architecture for AWS, Azure, and GCP with clear guardrails and documentation.',
      'CI/CD pipelines, automated testing, and infrastructure as code.',
      'Scalable APIs, messaging, and event‑driven systems built for growth.',
    ],
    category: 'Cloud Services',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing Engineering',
    short:
      'Technology and content working together to bring qualified traffic to your funnels.',
    bullets: [
      'SEO‑ready architectures with clean URL structures, schema, and performance budgets.',
      'Analytics, tracking, and reporting set up with marketing teams in mind.',
      'Landing pages and experimentation programs that continually improve conversion.',
    ],
    category: 'Digital Marketing',
  },
];

const ServicesPage = () => {
  return (
    <main className="bg-gray-50 mt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-br from-[#eff6ff] via-white to-[#e0f2fe]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-16 pt-16 lg:flex-row lg:items-center lg:pb-20 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
              Elite Digital Services
            </p>
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              A full stack of digital capabilities under one senior team.
            </h1>
            <p className="mb-6 text-sm text-slate-600 sm:text-base">
              From greenfield products to modernization programs, Elite Digital
              Solutions offers specialized squads that plug into your roadmap
              and deliver reliable software, clear documentation, and measurable
              business value.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-medium">
              <span className="rounded-full bg-[#2563eb]/10 px-3 py-1 text-[#2563eb]">
                Web & Mobile
              </span>
              <span className="rounded-full bg-slate-900 text-slate-50 px-3 py-1">
                Cloud & DevOps
              </span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
                Data & AI
              </span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-md bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/40 transition hover:bg-[#1d4ed8] hover:shadow-lg hover:shadow-blue-500/60">
                Get a free consultation
              </button>
              <p className="text-xs text-slate-500">
                Share your roadmap and we&apos;ll outline options, trade‑offs, and realistic timelines.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
            className="w-full max-w-md lg:max-w-lg"
          >
            <ThreeDCanvas className="h-64 sm:h-72 lg:h-80" variant="orb" />
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
                What We Do
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Specialist teams across the digital lifecycle.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-600 sm:text-base">
              Choose a focused capability or assemble an end‑to‑end squad.
              Either way, you work with senior talent that understands both the
              technology stack and the business context behind each release.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <motion.article
                key={service.title}
                variants={itemVariants}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/90 p-6 shadow-sm shadow-slate-200 ring-1 ring-slate-100 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/80"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#2563eb]">
                    <service.icon size={22} />
                  </div>
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-50">
                    {service.category}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm text-slate-600">{service.short}</p>
                <ul className="mb-4 space-y-2 text-xs text-slate-600">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563eb]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2">
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] transition group-hover:gap-2.5">
                    Discuss this service
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed services breakdown */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.header
            className="mb-10 max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
              What We Deliver
            </p>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Depth where it matters across every service line.
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Each engagement combines product strategy, design, engineering, and QA. Below is how we usually structure
              work across our core capabilities.
            </p>
          </motion.header>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Web Development',
                offer:
                  'Product‑grade web applications, marketing sites, and internal tools designed to stay fast as you grow.',
                benefits: [
                  'Faster delivery without sacrificing stability.',
                  'Interfaces that work across teams, devices, and markets.',
                ],
                tech: 'React, TypeScript, Next.js, Node.js, REST and GraphQL APIs.',
              },
              {
                title: 'Mobile App Development',
                offer:
                  'Cross‑platform mobile apps that feel native and integrate with your existing platforms and data.',
                benefits: [
                  'Reduce duplicate effort across iOS and Android.',
                  'Ship new features quickly with a single, well‑tested codebase.',
                ],
                tech: 'React Native, native modules, analytics and experimentation tooling.',
              },
              {
                title: 'UI/UX Design',
                offer:
                  'Design systems, interaction patterns, and content structures that make complex flows feel simple.',
                benefits: [
                  'Reduce design debt with a shared component library.',
                  'Align product, marketing, and engineering around the same patterns.',
                ],
                tech: 'Design systems, Figma, prototyping, design tokens wired into your codebase.',
              },
              {
                title: 'AI & Automation',
                offer:
                  'Applied AI that supports real processes—search, routing, personalisation, and operations.',
                benefits: [
                  'Free up teams from repetitive manual work.',
                  'Use predictions and insights to make better everyday decisions.',
                ],
                tech: 'Data pipelines, ML APIs, modern cloud‑native AI services, and observability around models.',
              },
              {
                title: 'Cloud & DevOps',
                offer:
                  'Secure, observable, and repeatable environments so your teams can deploy with confidence.',
                benefits: [
                  'Shorten time between idea and deployment.',
                  'Make performance, logs, and errors visible to the right people.',
                ],
                tech: 'AWS, Azure, GCP, containers, serverless, CI/CD pipelines, infrastructure as code.',
              },
              {
                title: 'Digital Marketing Engineering',
                offer:
                  'Technology foundations that give marketing teams reliable data and fast‑to‑ship experiences.',
                benefits: [
                  'Cleaner analytics and attribution across channels.',
                  'Landing pages that can be tested, iterated, and scaled.',
                ],
                tech: 'SEO‑ready architectures, analytics, experimentation, and marketing automation integrations.',
              },
            ].map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.03 }}
                className="flex h-full flex-col rounded-2xl bg-gray-50 p-5 shadow-sm shadow-slate-200 ring-1 ring-slate-100"
              >
                <h3 className="mb-2 text-base font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mb-3 text-sm text-slate-700">{service.offer}</p>
                <ul className="mb-3 space-y-1.5 text-xs text-slate-700">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[6px] h-1 w-4 shrink-0 rounded-full bg-[#2563eb]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Technologies:</span> {service.tech}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Process workflow */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.header
            className="mb-10 max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
              Process
            </p>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              A delivery workflow designed for clarity and pace.
            </h2>
          </motion.header>

          <div className="grid gap-6 md:grid-cols-6">
            {['Discovery', 'Strategy', 'Design', 'Development', 'Testing', 'Deployment & Support'].map(
              (step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.03 }}
                  className="relative flex flex-col rounded-2xl bg-white p-4 text-sm shadow-sm shadow-slate-200 ring-1 ring-slate-100"
                >
                  <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2563eb]/10 text-xs font-semibold text-[#2563eb]">
                    {index + 1}
                  </div>
                  <p className="font-semibold text-slate-900">{step}</p>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Industry solutions */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.header
            className="mb-10 max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
              Industry Solutions
            </p>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Tailored delivery for the sectors we know best.
            </h2>
          </motion.header>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Startups & Scale‑ups',
                body: 'Right‑sized squads that help you reach product‑market fit and build the foundations for growth.',
              },
              {
                title: 'Enterprises',
                body: 'Secure, compliant, and well‑documented delivery that can plug into complex environments and governance.',
              },
              {
                title: 'E‑commerce',
                body: 'Faster, more resilient shopping and fulfilment experiences with clear conversion targets.',
              },
              {
                title: 'FinTech',
                body: 'Reliable systems for customer onboarding, payments, and risk scoring with security from day one.',
              },
              {
                title: 'Healthcare',
                body: 'Digital journeys built with data privacy, accessibility, and clinician workflows in mind.',
              },
              {
                title: 'Education',
                body: 'Learning and administration platforms that support students, teachers, and operations teams.',
              },
            ].map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.03 }}
                className="group rounded-2xl bg-gray-50 p-5 shadow-sm shadow-slate-200 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:bg-white"
              >
                <h3 className="mb-1 text-sm font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600">{card.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-gray-50 pb-16 pt-4 sm:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-3xl bg-linear-to-r from-[#1d4ed8] via-[#2563eb] to-[#38bdf8] px-6 py-8 text-white shadow-xl shadow-blue-500/40 sm:px-10 sm:py-10"
          >
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="mb-1 text-2xl font-bold tracking-tight">
                  Ready to talk about your next release?
                </h2>
                <p className="text-sm text-blue-100">
                  Share a short brief and we&apos;ll respond with a perspective from a senior delivery lead, not a script.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#2563eb] shadow-md shadow-slate-900/20 transition hover:bg-slate-50"
              >
                Get a quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;

