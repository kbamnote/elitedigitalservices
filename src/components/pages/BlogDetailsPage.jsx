import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, User, CalendarDays, Tag, Share2, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 'designing-enterprise-software',
    title: 'Designing enterprise software that people actually want to use',
    category: 'Product & UX',
    author: 'Elite Digital Solutions',
    date: 'January 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop',
    summary: 'How to move from feature‑driven requirements to outcome‑driven roadmaps, and why UX research is non‑negotiable for complex internal tools.',
    content: `
      <p class="text-lg leading-relaxed mb-6">Enterprise software has a reputation problem. Too often, it's built for compliance rather than usability, resulting in tools that employees dread using. But it doesn't have to be this way.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The User Experience Gap</h2>
      <p class="mb-4">Most enterprise software projects focus heavily on technical requirements and compliance standards, often at the expense of user experience. This approach leads to:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>High training costs and extended onboarding times</li>
        <li>Low user adoption rates and poor engagement</li>
        <li>Increased support tickets and maintenance overhead</li>
        <li>Reduced productivity and user frustration</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Shifting to Outcome-Driven Design</h2>
      <p class="mb-4">The key is moving from feature-driven requirements to outcome-driven roadmaps:</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
        <h3 class="font-bold text-blue-800 mb-2">Start with User Outcomes</h3>
        <p class="text-blue-700">Instead of asking "What features do we need?" ask "What outcomes do users need to achieve?" This fundamental shift changes how we approach design and development.</p>
      </div>
      
      <h3 class="text-xl font-semibold mb-3 mt-6">Research Methods That Work</h3>
      <p class="mb-4">Effective UX research in enterprise environments requires specific approaches:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Contextual Inquiry:</strong> Observe users in their actual work environment</li>
        <li><strong>Job Shadowing:</strong> Spend time understanding daily workflows</li>
        <li><strong>Stakeholder Interviews:</strong> Include both end users and business leaders</li>
        <li><strong>Task Analysis:</strong> Break down complex workflows into component tasks</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Implementation Strategies</h2>
      <p class="mb-4">Building user-centered enterprise software requires a systematic approach:</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-white p-6 rounded-lg shadow-sm border">
          <h3 class="font-bold text-lg mb-3">Iterative Design Process</h3>
          <ul class="space-y-2 text-sm">
            <li>• Start with low-fidelity prototypes</li>
            <li>• Conduct regular usability testing</li>
            <li>• Gather feedback from actual users</li>
            <li>• Refine based on real usage data</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm border">
          <h3 class="font-bold text-lg mb-3">Change Management</h3>
          <ul class="space-y-2 text-sm">
            <li>• Communicate benefits clearly</li>
            <li>• Provide comprehensive training</li>
            <li>• Address resistance proactively</li>
            <li>• Celebrate early wins</li>
          </ul>
        </div>
      </div>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Measuring Success</h2>
      <p class="mb-4">Track these key metrics to measure user adoption and satisfaction:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>User engagement rates and session duration</li>
        <li>Task completion rates and time-to-completion</li>
        <li>User satisfaction scores and NPS</li>
        <li>Reduction in support tickets and training requests</li>
        <li>Business outcome improvements</li>
      </ul>
      
      <p class="text-lg font-semibold mt-8">The investment in user-centered design pays dividends through increased productivity, reduced training costs, and higher user satisfaction. Enterprise software can be both powerful and delightful to use.</p>
    `
  },
  {
    id: 'modernising-legacy-platforms',
    title: 'A practical roadmap for modernising legacy platforms',
    category: 'Architecture & Cloud',
    author: 'Elite Digital Solutions',
    date: 'December 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop',
    summary: 'Where to start when your core systems are decades old: patterns for safely introducing new services, de‑risking migrations, and earning stakeholder trust.',
    content: `
      <p class="text-lg leading-relaxed mb-6">Legacy system modernization is one of the most challenging yet critical initiatives facing modern enterprises. The stakes are high, and the path forward is rarely straightforward.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Understanding Your Legacy Landscape</h2>
      <p class="mb-4">Before any modernization effort begins, conduct a thorough assessment:</p>
      
      <div class="bg-gray-50 p-6 my-6 rounded-lg">
        <h3 class="font-bold mb-3">Technical Debt Assessment</h3>
        <ul class="space-y-2">
          <li>• Code quality and maintainability metrics</li>
          <li>• Architecture documentation gaps</li>
          <li>• Dependency and security vulnerabilities</li>
          <li>• Performance bottlenecks and scalability issues</li>
        </ul>
      </div>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Strategic Migration Patterns</h2>
      
      <h3 class="text-xl font-semibold mb-3 mt-6">The Strangler Fig Pattern</h3>
      <p class="mb-4">Gradually replace legacy functionality with new services while maintaining the existing system:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Identify bounded contexts within your monolith</li>
        <li>Extract services one at a time, starting with least critical</li>
        <li>Maintain dual systems during transition period</li>
        <li>Gradually route traffic to new services</li>
      </ul>
      
      <h3 class="text-xl font-semibold mb-3 mt-6">Lift and Shift with Modernization</h3>
      <p class="mb-4">For systems that can't be easily decomposed:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Containerize existing applications</li>
        <li>Move to cloud infrastructure for better scalability</li>
        <li>Implement modern monitoring and logging</li>
        <li>Gradually refactor internal components</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Risk Mitigation Strategies</h2>
      
      <div class="grid md:grid-cols-3 gap-6 my-8">
        <div class="bg-white p-6 rounded-lg shadow-sm border">
          <h3 class="font-bold mb-3">Data Migration Safety</h3>
          <ul class="space-y-2 text-sm">
            <li>• Comprehensive backup strategies</li>
            <li>• Incremental migration approach</li>
            <li>• Data validation at each step</li>
            <li>• Rollback procedures</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm border">
          <h3 class="font-bold mb-3">Business Continuity</h3>
          <ul class="space-y-2 text-sm">
            <li>• Parallel running environments</li>
            <li>• Canary deployment strategies</li>
            <li>• Comprehensive testing</li>
            <li>• Clear communication plans</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm border">
          <h3 class="font-bold mb-3">Stakeholder Management</h3>
          <ul class="space-y-2 text-sm">
            <li>• Regular progress updates</li>
            <li>• Early involvement of key users</li>
            <li>• Clear benefit communication</li>
            <li>• Training and support planning</li>
          </ul>
        </div>
      </div>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Technology Stack Considerations</h2>
      <p class="mb-4">Choose technologies that balance innovation with stability:</p>
      
      <div class="bg-blue-50 border border-blue-200 p-6 my-6 rounded-lg">
        <h3 class="font-bold text-blue-800 mb-2">Recommended Modern Stack</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold text-blue-700 mb-2">Frontend</h4>
            <ul class="text-sm text-blue-600 space-y-1">
              <li>• React or Vue.js for modern interfaces</li>
              <li>• Progressive Web App capabilities</li>
              <li>• Responsive design principles</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-blue-700 mb-2">Backend</h4>
            <ul class="text-sm text-blue-600 space-y-1">
              <li>• Microservices architecture</li>
              <li>• Cloud-native technologies</li>
              <li>• API-first development approach</li>
            </ul>
          </div>
        </div>
      </div>
      
      <p class="text-lg font-semibold mt-8">Successful legacy modernization requires patience, planning, and a commitment to continuous improvement. The journey is long, but the competitive advantages gained are substantial.</p>
    `
  },
  {
    id: 'data-ai-digital-experiences',
    title: 'Using data and AI to unlock smarter digital experiences',
    category: 'Data & AI',
    author: 'Elite Digital Solutions',
    date: 'November 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop',
    summary: 'From intelligent search to personalised content and predictive operations, here are concrete ways AI can support your roadmap today.',
    content: `
      <p class="text-lg leading-relaxed mb-6">Artificial Intelligence and data analytics are transforming how we create digital experiences. The key is implementing practical solutions that deliver real business value today.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Intelligent Search and Discovery</h2>
      <p class="mb-4">Modern search goes beyond keyword matching to understand user intent:</p>
      
      <div class="bg-green-50 border-l-4 border-green-500 p-6 my-6">
        <h3 class="font-bold text-green-800 mb-2">AI-Powered Search Features</h3>
        <ul class="text-green-700 space-y-2">
          <li>• Natural language processing for better query understanding</li>
          <li>• Personalized search results based on user behavior</li>
          <li>• Semantic search that understands context and meaning</li>
          <li>• Auto-complete and query suggestions</li>
        </ul>
      </div>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Personalization at Scale</h2>
      <p class="mb-4">Deliver tailored experiences without compromising performance:</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-6">Content Personalization</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Dynamic content recommendations based on user preferences</li>
        <li>Personalized user interfaces and navigation paths</li>
        <li>Context-aware content delivery</li>
        <li>A/B testing for personalization effectiveness</li>
      </ul>
      
      <h3 class="text-xl font-semibold mb-3 mt-6">Behavioral Analytics</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>User journey mapping and pattern recognition</li>
        <li>Predictive analytics for user actions</li>
        <li>Real-time personalization engines</li>
        <li>Privacy-compliant data collection and usage</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Predictive Operations</h2>
      <p class="mb-4">Use AI to anticipate needs and prevent issues:</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-white p-6 rounded-lg shadow-sm border">
          <h3 class="font-bold mb-3">Proactive Support</h3>
          <ul class="space-y-2 text-sm">
            <li>• Predictive issue detection</li>
            <li>• Automated troubleshooting</li>
            <li>• Smart knowledge base suggestions</li>
            <li>• Chatbot assistance with escalation</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm border">
          <h3 class="font-bold mb-3">Resource Optimization</h3>
          <ul class="space-y-2 text-sm">
            <li>• Demand forecasting</li>
            <li>• Automated scaling decisions</li>
            <li>• Performance optimization</li>
            <li>• Cost management insights</li>
          </ul>
        </div>
      </div>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Implementation Best Practices</h2>
      
      <div class="bg-yellow-50 border border-yellow-200 p-6 my-6 rounded-lg">
        <h3 class="font-bold text-yellow-800 mb-3">Getting Started with AI</h3>
        <ol class="list-decimal pl-6 space-y-2 text-yellow-700">
          <li>Start with well-defined use cases and clear success metrics</li>
          <li>Begin with existing data sources rather than building new ones</li>
          <li>Implement gradual improvements rather than wholesale changes</li>
          <li>Ensure proper data governance and privacy compliance</li>
          <li>Plan for model monitoring and continuous improvement</li>
        </ol>
      </div>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Measuring Impact</h2>
      <p class="mb-4">Track these key performance indicators:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>User engagement and time-on-site improvements</li>
        <li>Conversion rate increases</li>
        <li>Customer satisfaction scores</li>
        <li>Operational efficiency gains</li>
        <li>Return on investment for AI initiatives</li>
      </ul>
      
      <p class="text-lg font-semibold mt-8">The most successful AI implementations focus on solving specific business problems rather than implementing technology for its own sake. Start small, measure impact, and scale successful approaches.</p>
    `
  }
];

const BlogDetailsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    // Find the current post
    const currentPost = blogPosts.find(post => post.id === id);
    setPost(currentPost);
    
    // Get related posts (same category, excluding current post)
    if (currentPost) {
      const related = blogPosts
        .filter(post => post.category === currentPost.category && post.id !== id)
        .slice(0, 2);
      setRelatedPosts(related);
    }
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Post not found</h2>
          <Link 
            to="/blog" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-gray-50 pt-20">
      {/* Article Header */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              to="/blog" 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
          </div>
          
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
              <Tag size={16} />
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">{post.summary}</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <User size={16} className="text-blue-600" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays size={16} className="text-blue-600" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-blue-600" />
              <span>{post.readTime}</span>
            </div>
            <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
              <Share2 size={16} />
              <span>Share</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <article className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-3">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      <Link to={`/blog/${relatedPost.id}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {relatedPost.summary}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{relatedPost.date}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default BlogDetailsPage;