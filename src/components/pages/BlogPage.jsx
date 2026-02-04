import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, CalendarDays, Tag } from 'lucide-react';

const posts = [
  {
    title: 'Designing enterprise software that people actually want to use',
    category: 'Product & UX',
    author: 'Elite Digital Solutions',
    date: 'January 2026',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&h=650&fit=crop',
    href: '#',
    summary:
      'How to move from feature‑driven requirements to outcome‑driven roadmaps, and why UX research is non‑negotiable for complex internal tools.',
  },
  {
    title: 'A practical roadmap for modernising legacy platforms',
    category: 'Architecture & Cloud',
    author: 'Elite Digital Solutions',
    date: 'December 2025',
    readTime: '9 min read',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=650&fit=crop',
    href: '#',
    summary:
      'Where to start when your core systems are decades old: patterns for safely introducing new services, de‑risking migrations, and earning stakeholder trust.',
  },
  {
    title: 'Using data and AI to unlock smarter digital experiences',
    category: 'Data & AI',
    author: 'Elite Digital Solutions',
    date: 'November 2025',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=650&fit=crop',
    href: '#',
    summary:
      'From intelligent search to personalised content and predictive operations, here are concrete ways AI can support your roadmap today.',
  },
];

const BlogPage = () => {
  const [progress, setProgress] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const maxScroll = scrollHeight - clientHeight;
      const value = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
      setProgress(value);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))];
  const visiblePosts =
    activeCategory === 'All' ? posts : posts.filter((post) => post.category === activeCategory);

  return (
    <main className="bg-gray-50 mt-20">
      {/* Reading progress */}
      <div className="sticky top-0 z-30 h-1 w-full bg-transparent">
        <div
          className="h-full bg-[#2563eb] transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      {/* Hero */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]"
          >
            Insights from the Delivery Floor
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
            className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            Articles on building, scaling, and sustaining digital products.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="mx-auto max-w-3xl text-sm text-slate-600 sm:text-base"
          >
            The Elite Digital Solutions team writes about the practical side of delivering technology programmes:
            architecture trade‑offs, design systems at scale, product strategy, analytics, and more.
          </motion.p>
        </div>
      </section>

      {/* Featured post */}
      <section className="bg-gray-50 pb-10 pt-2 sm:pb-12">
        <div className="mx-auto max-w-6xl px-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid gap-6 overflow-hidden rounded-3xl bg-white shadow-sm shadow-slate-200 ring-1 ring-slate-100 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
          >
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
                Featured Insight
              </p>
              <h2 className="mb-2 text-xl font-semibold text-slate-900 sm:text-2xl">
                {posts[0].title}
              </h2>
              <p className="mb-4 text-sm text-slate-600">{posts[0].summary}</p>
              <div className="mb-3 flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <User size={14} className="text-[#2563eb]" />
                  {posts[0].author}
                </span>
                <span className="inline-flex items-center gap-1">
                  <CalendarDays size={14} className="text-[#2563eb]" />
                  {posts[0].date}
                </span>
                <span>{posts[0].readTime}</span>
              </div>
              <a
                href={posts[0].href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb]"
              >
                Read the full article
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="relative h-56 overflow-hidden md:h-full">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-50">
                <Tag size={14} />
                {posts[0].category}
              </span>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Posts grid */}
      <section className="pb-16 pt-4 sm:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* Category filters */}
          <div className="mb-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-slate-600">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-3 py-1 transition ${
                  activeCategory === cat
                    ? 'border-[#2563eb] bg-[#2563eb] text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-[#2563eb]/60 hover:text-[#2563eb]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm shadow-slate-200 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/80"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-50">
                    <Tag size={14} />
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <User size={14} className="text-[#2563eb]" />
                      {post.author}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays size={14} className="text-[#2563eb]" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-[#2563eb]">
                    {post.title}
                  </h2>
                  <p className="mb-4 text-sm text-slate-600">{post.summary}</p>
                  <div className="mt-auto pt-2">
                    <a
                      href={post.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] group-hover:gap-3"
                    >
                      Read the article
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;

