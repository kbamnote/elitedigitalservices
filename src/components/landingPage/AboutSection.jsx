import { ArrowRight, Play, Settings, Headphones, ArrowUp } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=700&fit=crop"
                alt="Product and engineering team reviewing software roadmap"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>

            {/* Decorative Blue Circle */}
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#2563eb] rounded-full -z-10"></div>
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-72 h-72 border-4 border-[#2563eb]/30 rounded-full -z-20"></div>

            {/* Video Thumbnail */}
            {/* <div className="absolute -bottom-8 -right-8 z-20">
              <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-xl group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=300&fit=crop"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#2563eb]/80 flex items-center justify-center group-hover:bg-[#2563eb]/90 transition-colors">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={28} className="text-[#2563eb] ml-1" fill="#2563eb" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-4 bg-[#2563eb] rounded-full relative">
                <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-[#2563eb] text-sm font-semibold tracking-wider uppercase">
                About Elite Digital Solutions
              </span>
            </div>

            {/* Title */}
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We design, build, and run dependable digital products.
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Elite Digital Solutions is an IT services and software development company focused on complex web and mobile applications, cloud‑native platforms, and long‑term product support. Our teams combine engineering discipline with clear communication so your technology roadmap stays realistic and achievable.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Best Services */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Settings size={32} className="text-[#2563eb]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Senior engineering leadership
                  </h3>
                  <p className="text-gray-600">
                    Technical leads who can discuss architecture, delivery risk, and trade‑offs with both engineers and stakeholders.
                  </p>
                </div>
              </div>

              {/* 24/7 Call Support */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Headphones size={32} className="text-[#2563eb]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Responsive delivery support
                  </h3>
                  <p className="text-gray-600">
                    A delivery model built around regular check‑ins, transparent status, and quick responses when priorities shift.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex items-center gap-8">
              {/* Explore More Button */}
              <button className="bg-[#2563eb] text-white px-8 py-4 rounded-md font-medium inline-flex items-center gap-2 hover:bg-[#1d4ed8] transition-all duration-300 group">
                Explore More
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Founder Info */}
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
                  alt="Ronald Richards"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Ronald Richards</h4>
                  <p className="text-gray-600 text-sm">Co. Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-[#2563eb] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1d4ed8] transition-all duration-300 hover:scale-110 z-50">
        <ArrowUp size={20} />
      </button>
    </section>
  );
};

export default AboutSection;