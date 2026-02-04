import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users2, Target, Award, Briefcase, Sparkles, ShieldCheck } from 'lucide-react';
import ThreeDCanvas from '../common/ThreeDCanvas';

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
  viewport: { once: true, amount: 0.2 },
});

const AboutPage = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Outcome-Driven Delivery',
      description:
        'Every engagement starts with business outcomes. We connect strategy, design, and engineering so your digital investments ship value, not just features.',
    },
    {
      icon: Users2,
      title: 'Embedded Product Teams',
      description:
        'Senior product strategists, designers, and engineers collaborate as one team with your stakeholders, staying tightly aligned from discovery to launch.',
    },
    {
      icon: Award,
      title: 'Quality at Enterprise Scale',
      description:
        'From security reviews to observability and SLAs, we build software that can be trusted in regulated, high‑traffic and mission‑critical environments.',
    },
  ];

  const values = [
    'Ship fast without compromising reliability or security.',
    'Design experiences that make complex workflows feel effortless.',
    'Modernize legacy systems without disrupting day‑to‑day operations.',
    'Lead with data to inform decisions across product and marketing.',
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#0f172a] via-[#020617] to-[#1e3a8a]">
        <div className="absolute inset-0 opacity-60 mix-blend-screen">
          <div className="absolute -left-40 h-72 w-72 rounded-full bg-[#2563eb]/40 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#38bdf8]/30 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center lg:py-12">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-sky-200">
              <span className="h-1.5 w-6 rounded-full bg-[#2563eb]" />
              About Elite Digital Solutions
            </div>
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Digital innovation that turns roadmaps into results.
            </h1>
            <p className="mb-6 text-base text-slate-200 sm:text-lg">
              Elite Digital Solutions is an IT services and software company partnering with enterprises,
              scale‑ups, and forward‑thinking SMEs to design, build, and scale high‑performing digital platforms.
              From first strategy workshop to global rollout, we stay accountable for outcomes.
            </p>
            <div className="grid gap-4 text-sm text-slate-100 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-[#22c55e]">
                  <CheckCircle2 size={20} />
                </span>
                <p>
                  10+ years delivering secure web, mobile, and cloud solutions across finance, retail, healthcare,
                  and SaaS.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-[#22c55e]">
                  <CheckCircle2 size={20} />
                </span>
                <p>
                  Senior product squads with engineering leadership embedded into your roadmap, ceremonies, and KPIs.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-md bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/40 transition hover:bg-[#1d4ed8] hover:shadow-lg hover:shadow-blue-500/60"
              >
                Explore our services
              </a>
              <p className="text-xs text-slate-300">
                From discovery to long‑term support, we ship software your teams can trust.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full max-w-md lg:max-w-lg"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <ThreeDCanvas className="h-72 sm:h-80 lg:h-96" variant="mesh" />
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.header
            className="mb-12 max-w-3xl"
            {...fadeInUp(0)}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
              How We Partner
            </p>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              A senior product team behind every release.
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Our teams blend product strategy, UX, engineering, and QA to take ownership of the full software
              lifecycle. That means fewer hand‑offs, clearer decisions, and releases that actually move KPIs.
            </p>
          </motion.header>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                className="relative overflow-hidden rounded-2xl bg-white/80 p-6 shadow-sm shadow-slate-200 ring-1 ring-slate-100 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/70"
                {...fadeInUp(0.05 * index)}
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#2563eb]">
                  <pillar.icon size={22} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">{pillar.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-slate-100 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <motion.div {...fadeInUp(0)}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
              What Drives Us
            </p>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              A technology partner that speaks the language of the business.
            </h2>
            <p className="mb-6 text-sm text-slate-600 sm:text-base">
              Great software only matters when it advances your commercial and operational goals. We ask the hard
              questions early, then design roadmaps around adoption, maintainability, and measurable impact.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              {values.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 text-[#2563eb]">
                    <CheckCircle2 size={18} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-10 text-slate-100 shadow-xl shadow-slate-900/40"
            {...fadeInUp(0.08)}
          >
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute -right-16 top-10 h-40 w-40 rounded-full bg-[#2563eb]/40 blur-3xl" />
              <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-sky-400/40 blur-3xl" />
            </div>
            <p className="relative mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
              Numbers That Matter
            </p>
            <p className="relative mb-6 text-3xl font-semibold leading-snug">
              90% of our new work comes from referrals and long‑term client relationships.
            </p>
            <div className="relative grid gap-4 text-sm sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 px-4 py-3">
                <p className="text-xs text-sky-200">Average engagement</p>
                <p className="text-2xl font-semibold text-white">18+ months</p>
              </div>
              <div className="rounded-2xl bg-white/5 px-4 py-3">
                <p className="text-xs text-sky-200">Production incidents</p>
                <p className="text-2xl font-semibold text-white">↓ 60%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story timeline */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.header
            className="mb-10 max-w-3xl"
            {...fadeInUp(0)}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
              Our Story
            </p>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              From specialist team to long‑term digital partner.
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Elite Digital Solutions was founded by engineers and product leaders who were frustrated by glossy decks
              and under‑delivered projects. Since then we&apos;ve grown into a distributed team trusted by organisations
              that expect clarity, pace, and reliable execution.
            </p>
          </motion.header>

          <div className="relative border-l border-slate-200 pl-6 sm:pl-8">
            {[
              {
                year: '2016',
                title: 'Founded with a delivery‑first mindset',
                body: 'We started as a compact team helping SaaS companies stabilise critical platforms and ship long‑delayed roadmaps.',
              },
              {
                year: '2019',
                title: 'Expanded into cloud and data programmes',
                body: 'Our work grew from feature delivery to full platform modernisation, including cloud migration and analytics initiatives.',
              },
              {
                year: '2022',
                title: 'Global, remote‑first product squads',
                body: 'We formalised distributed delivery with solid playbooks, overlapping time zones, and embedded product leadership.',
              },
              {
                year: 'Today',
                title: 'Partnering on end‑to‑end digital strategy',
                body: 'Elite Digital Solutions now supports clients from first strategy workshops through to BAU ownership and optimisation.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="relative mb-8 last:mb-0"
                {...fadeInUp(0.05 * index)}
              >
                <div className="absolute -left-[11px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-[#2563eb] shadow-md shadow-blue-500/40" />
                <div className="ml-2 rounded-2xl bg-white p-4 shadow-sm shadow-slate-200 ring-1 ring-slate-100 sm:ml-4 sm:p-5">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#2563eb]">
                    {item.year}
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-slate-900 sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.header
            className="mb-10 max-w-3xl"
            {...fadeInUp(0)}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
              How We Think
            </p>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Vision, mission, and values that keep delivery grounded.
            </h2>
          </motion.header>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: 'Vision',
                body: 'To be the most dependable digital partner for organisations that treat technology as a core advantage, not an afterthought.',
              },
              {
                icon: Target,
                title: 'Mission',
                body: 'To help teams ship secure, usable, and measurable digital products by pairing focused strategy with disciplined engineering.',
              },
              {
                icon: ShieldCheck,
                title: 'Core Values',
                body: 'Clarity over noise, honest estimation, thoughtful design, and taking ownership of software long after launch.',
              },
            ].map((card, index) => (
              <motion.article
                key={card.title}
                {...fadeInUp(0.05 * index)}
                className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-[#eff6ff] via-white to-[#e0f2fe] p-6 shadow-sm shadow-slate-200 ring-1 ring-slate-100 transition-transform hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#2563eb]">
                  <card.icon size={22} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-700">{card.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.header
            className="mb-10 max-w-3xl"
            {...fadeInUp(0)}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
              Why Teams Choose Elite Digital Solutions
            </p>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Six strengths that matter in real delivery.
            </h2>
          </motion.header>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                label: 'Quality by design',
                detail: 'Peer reviews, automated tests, and observability are built into our process, not added on at the end.',
              },
              {
                label: 'Built to scale',
                detail: 'Architectures designed for traffic spikes, global users, and evolving feature sets.',
              },
              {
                label: 'Security as standard',
                detail: 'Security reviews, threat modelling, and compliance considerations woven into every release.',
              },
              {
                label: 'Product‑level thinking',
                detail: 'We push beyond tickets to understand how a feature will impact customers, support, and operations.',
              },
              {
                label: 'Senior support',
                detail: 'You work directly with senior engineers and product leaders who can trade off scope, time, and risk.',
              },
              {
                label: 'Delivery speed with control',
                detail: 'Lightweight ceremonies, clear status updates, and the discipline to say no when it protects outcomes.',
              },
            ].map((item, index) => (
              <motion.article
                key={item.label}
                {...fadeInUp(0.04 * index)}
                className="rounded-2xl bg-white p-5 shadow-sm shadow-slate-200 ring-1 ring-slate-100"
              >
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#2563eb]">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
                <h3 className="mb-1 text-sm font-semibold text-slate-900">{item.label}</h3>
                <p className="text-sm text-slate-600">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack showcase */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.header
            className="mb-8 flex flex-col gap-3 sm:items-center sm:text-center"
            {...fadeInUp(0)}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
              Tech Stack
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Modern technologies we use to ship dependable products.
            </h2>
            <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
              From frontend frameworks to cloud platforms and data tooling, we focus on stacks with strong communities,
              predictable roadmaps, and first‑class support for observability and security.
            </p>
          </motion.header>

          <motion.div
            className="grid gap-4 rounded-3xl bg-slate-900/95 px-5 py-6 text-slate-100 shadow-xl shadow-slate-900/60 sm:px-7 sm:py-7 md:grid-cols-3"
            {...fadeInUp(0.05)}
          >
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                Frontend
              </h3>
              <p className="text-sm">React, TypeScript, Next.js, Tailwind CSS, design systems and component libraries.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                Backend & Cloud
              </h3>
              <p className="text-sm">
                Node.js, serverless, REST and GraphQL APIs, event‑driven architectures on AWS, Azure, and GCP.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                Data, AI & Operations
              </h3>
              <p className="text-sm">
                Data pipelines, analytics, search, ML‑assisted experiences, CI/CD, observability, and SRE practices.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

