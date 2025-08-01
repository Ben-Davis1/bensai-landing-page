import React, { useState } from 'react';

// Simple SVG Bonsai Tree Component
const BonsaiTree = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <svg 
      viewBox="0 0 200 250" 
      className="w-full h-full animate-gentle-sway"
      style={{ transformOrigin: 'bottom center' }}
    >
      {/* Pot */}
      <path
        d="M60 220 L140 220 L135 240 L65 240 Z"
        fill="#8b6751"
        className="drop-shadow-sm"
      />
      
      {/* Trunk */}
      <path
        d="M95 220 Q90 200 85 180 Q80 160 90 140 Q95 120 100 100"
        stroke="#8b6751"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Main branch */}
      <path
        d="M100 120 Q120 115 140 110"
        stroke="#8b6751"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Secondary branch */}
      <path
        d="M95 140 Q80 135 70 130"
        stroke="#8b6751"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Foliage clusters */}
      <circle cx="105" cy="95" r="25" fill="#359668" className="animate-float" style={{ animationDelay: '0s' }} />
      <circle cx="145" cy="105" r="20" fill="#277a53" className="animate-float" style={{ animationDelay: '0.5s' }} />
      <circle cx="65" cy="125" r="18" fill="#359668" className="animate-float" style={{ animationDelay: '1s' }} />
      <circle cx="125" cy="80" r="15" fill="#58b58a" className="animate-float" style={{ animationDelay: '1.5s' }} />
      
      {/* Small details */}
      <circle cx="85" cy="110" r="8" fill="#277a53" className="animate-float" style={{ animationDelay: '0.3s' }} />
      <circle cx="155" cy="115" r="12" fill="#58b58a" className="animate-float" style={{ animationDelay: '0.8s' }} />
    </svg>
  </div>
);

// Process Step Component
const ProcessStep = ({ number, title, description, icon }) => (
  <div className="card text-center group hover:animate-grow">
    <div className="text-4xl mb-4 group-hover:animate-float">{icon}</div>
    <div className="w-12 h-12 bg-bonsai-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
      {number}
    </div>
    <h3 className="text-xl font-semibold text-bonsai-brown-800 mb-2">{title}</h3>
    <p className="text-bonsai-brown-600">{description}</p>
  </div>
);

// Main App Component
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send form data directly to Formspree
      const response = await fetch('https://formspree.io/f/xqaldkle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Bensai Inquiry from ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        // Show success message
        setIsSubmitted(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again or email hello@bensai.co.uk directly.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-cream via-soft-sage to-bonsai-green-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-bonsai-green-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10">
                <BonsaiTree />
              </div>
              <h1 className="text-2xl font-display font-bold text-bonsai-brown-800">
                Bensai
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#how-it-works" className="text-bonsai-brown-700 hover:text-bonsai-green-500 transition-colors font-medium">
                How It Works
              </a>
              <a href="#contact" className="text-bonsai-brown-700 hover:text-bonsai-green-500 transition-colors font-medium">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl lg:text-6xl font-display font-bold text-bonsai-brown-800 mb-6 leading-tight">
                Hi, I'm Ben.
                <br />
                <span className="text-bonsai-green-500">I build websites with AI.</span>
              </h2>
              <p className="text-xl text-bonsai-brown-600 mb-8 leading-relaxed">
                I create beautiful, affordable websites for small businesses using cutting-edge AI technology. 
                Like a carefully tended bonsai, I craft digital experiences that are 
                perfectly sized, elegantly designed, and built to flourish—all at lightning speed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="btn-primary">
                  Start Growing 🌱
                </button>
                <a href="#contact" className="btn-secondary">
                  Get Started
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-bonsai-brown-500">
                <div className="flex items-center space-x-2">
                  <span className="text-bonsai-green-500">✓</span>
                  <span>7-day delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-bonsai-green-500">✓</span>
                  <span>London-based</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-bonsai-green-500">✓</span>
                  <span>Fixed pricing</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-80 h-96 relative">
                <BonsaiTree className="w-full h-full" />
                <div className="absolute -top-4 -right-4 bg-bonsai-green-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-float">
                  £30/month
                </div>
                <div className="absolute -bottom-2 -left-4 bg-bonsai-brown-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-float" style={{ animationDelay: '1s' }}>
                  Ready in 7 days
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">🍃</div>
        <div className="absolute bottom-20 right-10 text-4xl opacity-10 animate-float" style={{ animationDelay: '2s' }}>🌿</div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-bonsai-brown-800 mb-4">
              Growing your digital presence is simple
            </h2>
            <p className="text-xl text-bonsai-brown-600 max-w-2xl mx-auto">
              Like nurturing a bonsai tree, I follow a careful, AI-powered process to create something beautiful and enduring.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ProcessStep
              number="1"
              title="Tell me about your business"
              description="Share your vision, goals, and style preferences. I'll understand what makes your business special."
              icon="💬"
            />
            <ProcessStep
              number="2"
              title="I craft your website with AI"
              description="Using advanced AI tools, I design and build your perfect digital home, carefully pruning every detail for maximum impact."
              icon="🤖"
            />
            <ProcessStep
              number="3"
              title="Launch and grow!"
              description="Your website goes live, ready to attract customers and grow your business like a thriving bonsai."
              icon="🚀"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-bonsai-brown-800 mb-4">
              Ready to plant your digital roots?
            </h2>
            <p className="text-xl text-bonsai-brown-600">
              Tell me about your project and let's grow something beautiful together.
            </p>
            <div className="bg-bonsai-green-50 border border-bonsai-green-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-bonsai-brown-800 mb-3">What You Get for £30/month:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-bonsai-brown-700">
                <div className="flex items-center space-x-2">
                  <span className="text-bonsai-green-500">✓</span>
                  <span>Complete website design & build</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-bonsai-green-500">✓</span>
                  <span>Domain name included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-bonsai-green-500">✓</span>
                  <span>SEO optimisation for visibility</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-bonsai-green-500">✓</span>
                  <span>Unlimited changes per month</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="card">
              {!isSubmitted ? (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-bonsai-brown-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="What should we call you?"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-bonsai-brown-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-bonsai-brown-700 mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="input-field resize-none"
                      placeholder="What kind of website do you need? What's your business about? Any specific features or style preferences?"
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Let's Grow Together 🌱
                  </button>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-bonsai-green-600 mb-2">
                    Thank you for reaching out!
                  </h3>
                  <p className="text-bonsai-brown-600">
                    Your message has been sent directly to hello@bensai.co.uk! 
                    I'll get back to you within 24 hours to discuss your project.
                    Time to start planning your digital garden!
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bonsai-brown-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8">
                  <BonsaiTree />
                </div>
                <h3 className="text-xl font-display font-bold">Bensai</h3>
              </div>
              <p className="text-bonsai-brown-200">
                I'm Ben, crafting beautiful, affordable websites for small businesses across London using AI technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="#" className="block text-bonsai-brown-200 hover:text-white transition-colors">
                  📧 hello@bensai.co.uk
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <div className="text-bonsai-brown-200">Website Design</div>
                <div className="text-bonsai-brown-200">Small Business Sites</div>
                <div className="text-bonsai-brown-200">E-commerce</div>
                <div className="text-bonsai-brown-200">Maintenance</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-bonsai-brown-700 mt-8 pt-8 text-center">
            <p className="text-bonsai-brown-300">
              © 2025 Bensai. Made with 💚 in London. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;