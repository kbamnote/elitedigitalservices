import { useState } from 'react';
import { Mail, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const ContactTestimonialSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple form submission - in real app, integrate with backend or email service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="relative min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Image */}
        <div className="relative h-64 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&h=1000&fit=crop"
            alt="Indian software team collaborating in a modern office"
            className="w-full h-full object-cover"
            loading="lazy"
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

            {/* Client Feedback Placeholder */}
          <div className="bg-white p-12 lg:p-16 flex-1 flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-4 bg-[#3b82f6] rounded-full relative">
                <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-[#3b82f6] text-sm font-semibold tracking-wider uppercase">
                Client Feedback
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Client feedback coming soon.
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              We are currently collecting feedback from Indian product and technology teams we partner with on web, mobile, cloud, and data projects. This section will be updated with real client stories soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTestimonialSection;