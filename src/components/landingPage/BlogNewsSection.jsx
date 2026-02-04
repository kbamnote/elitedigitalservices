import { ArrowRight, ArrowUp, User, MessageCircle } from 'lucide-react';

const BlogNewsSection = () => {
  const blogPosts = [
    {
      date: {
        day: "10",
        month: "Dec"
      },
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      author: "Admin",
      comments: 0,
      title: "Designing Secure Virtual Courtroom Platforms",
      link: "#"
    },
    {
      date: {
        day: "12",
        month: "Dec"
      },
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
      author: "Admin",
      comments: 0,
      title: "Re‑platforming Retail with Headless Commerce",
      link: "#"
    },
    {
      date: {
        day: "15",
        month: "Dec"
      },
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      author: "Admin",
      comments: 0,
      title: "Choosing the Right Cloud Platform for Growth",
      link: "#"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-4 bg-[#2563eb] rounded-full relative">
              <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-[#2563eb] text-sm font-semibold tracking-wider uppercase">
              Blog & News
            </span>
          </div>
          
          {/* Title */}
          <h2 className="text-5xl font-bold text-gray-900">
            Explore Blogs And News
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-[#2563eb] text-white text-center rounded-lg overflow-hidden shadow-lg">
                  <div className="px-5 py-2">
                    <div className="text-3xl font-bold leading-none">
                      {post.date.day}
                    </div>
                    <div className="text-sm font-medium mt-1">
                      {post.date.month}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Meta Information */}
                <div className="flex items-center gap-6 text-gray-500 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-[#2563eb]" />
                    <span>By {post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle size={16} className="text-[#2563eb]" />
                    <span>{post.comments} Comments</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#2563eb] transition-colors duration-300">
                  <a href={post.link}>
                    {post.title}
                  </a>
                </h3>

                {/* Read More Link */}
                <a
                  href={post.link}
                  className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:text-[#2563eb] transition-colors duration-300 group/link"
                >
                  Read More
                  <ArrowRight 
                    size={20} 
                    className="group-hover/link:translate-x-1 transition-transform duration-300" 
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {/* <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-white border-2 border-[#2563eb] text-[#2563eb] rounded-full flex items-center justify-center shadow-lg hover:bg-[#2563eb] hover:text-white transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="group-hover:scale-110 transition-transform" />
      </button> */}
    </section>
  );
};

export default BlogNewsSection;