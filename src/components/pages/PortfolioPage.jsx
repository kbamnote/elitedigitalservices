import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building2, ShoppingBag, Stethoscope, Banknote } from 'lucide-react';

const projects = [
  {
    title: 'Omnichannel Retail Commerce Platform',
    client: 'Northbridge Retail Group',
    sector: 'Retail & eCommerce',
    impact: 'Unified three legacy storefronts into a single headless commerce stack, lifting conversion by 22%.',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900&h=650&fit=crop',
    href: '#',
    icon: ShoppingBag,
    stats: [
      { label: 'Conversion uplift', value: '+22%' },
      { label: 'Checkout speed', value: '–37%' },
    ],
    problem: 'Fragmented customer journeys across multiple legacy storefronts and inconsistent checkout performance.',
    solution:
      'Designed and implemented a headless commerce architecture with a unified design system and performance budget.',
    result:
      'Faster page loads, a consistent experience across channels, and a rollout plan that avoided operational disruption.',
  },
  {
    title: 'Patient Engagement & Telehealth Suite',
    client: 'Lumina Health Network',
    sector: 'Healthcare & Life Sciences',
    impact:
      'Designed and shipped a secure telehealth experience that now supports 40k+ remote consultations each month.',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&h=650&fit=crop',
    href: '#',
    icon: Stethoscope,
    stats: [
      { label: 'Monthly sessions', value: '40k+' },
      { label: 'No‑show reduction', value: '–18%' },
    ],
    problem: 'Clinicians and patients relying on a mix of phone, email, and outdated portals for remote consultations.',
    solution:
      'Created an accessible telehealth experience with integrated scheduling, video, and follow‑up workflows.',
    result:
      'Higher patient engagement, fewer missed appointments, and better visibility for care teams working across sites.',
  },
  {
    title: 'Digital Lending & Risk Scoring Platform',
    client: 'Nova Capital',
    sector: 'Financial Services',
    impact:
      'Modernized origination workflows with a cloud‑native platform and AI‑assisted risk scoring for SME lending.',
    image:
      'https://www.alliedmarketresearch.com/assets/sampleimages/digital-lending-platform-market-1610602580.jpeg',
    href: '#',
    icon: Banknote,
    stats: [
      { label: 'Time‑to‑approval', value: '–45%' },
      { label: 'Manual review', value: '–30%' },
    ],
    problem: 'Manual underwriting processes and disconnected data sources slowing down SME lending decisions.',
    solution:
      'Built a cloud‑native platform that centralised data sources and introduced AI‑assisted risk scoring.',
    result:
      'Faster decisions for customers, clearer audit trails for regulators, and more capacity for the credit team.',
  },
];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.sector)))];
  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.sector === activeFilter);

  return (
    <main className="bg-gray-50">
      {/* Hero */}
      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-sky-400">
              Selected Work
            </p>
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Real platforms. Real users. Real impact.
            </h1>
            <p className="mb-6 text-sm text-slate-300 sm:text-base">
              Elite Digital Solutions helps organisations move from slideware to shipped software. Below is a snapshot
              of recent engagements where we owned the journey from discovery through design, delivery, and ongoing optimisation.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                <Building2 size={14} />
                Enterprise & scale‑ups
              </span>
              <span className="rounded-full bg-[#2563eb] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                Web · Mobile · Cloud · AI
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
                Case Studies
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Recent digital transformation journeys.
              </h2>
            </div>
            <p className="hidden max-w-md text-sm text-slate-600 sm:block">
              Every project is supported by clear documentation, measurable targets, and a delivery rhythm that aligns
              with your internal teams and governance.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-slate-600">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full border px-3 py-1 transition ${
                  activeFilter === cat
                    ? 'border-[#2563eb] bg-[#2563eb] text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-[#2563eb]/60 hover:text-[#2563eb]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.04 }}
                className="overflow-hidden rounded-3xl bg-white shadow-sm shadow-slate-200 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/90"
              >
                <div className="grid gap-0 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                  <div className="relative h-64 overflow-hidden md:h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
                  </div>
                  <div className="flex flex-col justify-between p-6 sm:p-8">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-3 text-xs">
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-50">
                          <project.icon size={14} />
                          {project.sector}
                        </span>
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#2563eb]">
                          {project.client}
                        </span>
                      </div>
                      <h3 className="mb-3 text-xl font-semibold text-slate-900 sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mb-4 text-sm text-slate-600">{project.impact}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                      <dl className="flex flex-wrap gap-4 text-xs text-slate-700">
                        {project.stats.map((stat) => (
                          <div key={stat.label} className="rounded-2xl bg-slate-50 px-3 py-2">
                            <dt className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                              {stat.label}
                            </dt>
                            <dd className="text-sm font-semibold text-slate-900">{stat.value}</dd>
                          </div>
                        ))}
                      </dl>
                      <a
                        href={project.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] underline-offset-4 hover:underline"
                      >
                        View engagement overview
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Problem / Solution / Result cards */}
          <div className="mt-16 border-t border-slate-200 pt-12">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-8 max-w-3xl"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
                Case Study Highlights
              </p>
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                How we move from problem statements to measurable outcomes.
              </h2>
            </motion.header>

            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="flex flex-col rounded-2xl bg-white p-5 shadow-sm shadow-slate-200 ring-1 ring-slate-100"
                >
                  <h3 className="mb-1 text-sm font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#2563eb]">
                    {project.sector}
                  </p>
                  <div className="mt-2 space-y-2 text-xs text-slate-700">
                    <div>
                      <span className="font-semibold text-slate-900">Problem: </span>
                      {project.problem}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">Solution: </span>
                      {project.solution}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">Result: </span>
                      {project.result}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;

