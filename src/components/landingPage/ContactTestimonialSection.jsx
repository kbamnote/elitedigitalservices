import { useState } from 'react';
import { Mail, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const ContactTestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const testimonials = [
    {
      name: "Suborna Tarchera",
      role: "Web Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 4,
      text: "Elite Digital Solutions helped us refactor an aging frontend into a modern React application with cleaner APIs, better performance, and a design system our team can extend."
    },
    {
      name: "John Smith",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      rating: 5,
      text: "Their engineers joined our in‑house squad to deliver a new cloud‑based claims platform. We now release changes weekly instead of quarterly, with far fewer incidents."
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
      text: "The team rebuilt our analytics and marketing stack so we can trust our data and run experiments across web and mobile without relying on developers for every change."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}
      />
    ));
  };

  return (
    <section className="relative min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Image */}
        <div className="relative h-64 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&h=1000&fit=crop"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Right Side - Contact Form & Testimonials */}
        <div className="flex flex-col">
          {/* Contact Form Section */}
          <div className="bg-[#3b82f6] text-white p-12 lg:p-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-4 bg-white rounded-full relative">
                <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
              </div>
              <span className="text-white text-sm font-semibold tracking-wider uppercase">
                Talk To Us
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl font-bold mb-8">
              How May We Help You!
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Your Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Alex Johnson"
                    className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  />
                </div>

                {/* Your Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Email*
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 pr-12"
                      required
                    />
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3b82f6]" size={20} />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject*
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  />
                </div>

                {/* Your Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Phone*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1253 457 7840"
                    className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Details*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your IT project, current systems, and goals"
                  rows="4"
                  className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 rounded font-semibold hover:bg-gray-800 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Testimonials Section */}
          <div className="bg-white p-12 lg:p-16 flex-1 flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-4 bg-[#3b82f6] rounded-full relative">
                <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-[#3b82f6] text-sm font-semibold tracking-wider uppercase">
                Clients Review
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What clients say about our delivery.
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-12 leading-relaxed">
              We work with product, technology, and operations teams that need an experienced software development company to help them ship secure, maintainable digital platforms.
            </p>

            {/* Testimonial Card */}
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 right-0 text-[#3b82f6] text-8xl font-serif leading-none opacity-20">
                "
              </div>

              <div className="relative">
                {/* Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <div className="flex gap-1 mt-1">
                      {renderStars(testimonials[currentTestimonial].rating)}
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed italic">
                  " {testimonials[currentTestimonial].text} "
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-200">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border-2 border-[#3b82f6] text-[#3b82f6] flex items-center justify-center hover:bg-[#3b82f6] hover:text-white transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-[#3b82f6] text-white flex items-center justify-center hover:bg-[#2563eb] transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTestimonialSection;