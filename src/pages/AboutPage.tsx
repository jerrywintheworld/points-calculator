import React from 'react'
import SEO from '../components/SEO'
import BackToTop from '../components/BackToTop'

const AboutPage: React.FC = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    // Always scroll to top when this page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-12">
      <SEO 
        title="PC - About Us | Points Calculator"
        description="Learn about Points Calculator, our mission to make points value calculation simple and transparent. Discover our story and commitment to helping users maximize their rewards."
        canonical="https://www.points-calculator.com/about"
      />
      
      {/* Hero Section */}
      <section id="about-hero" className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          About Points Calculator
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          We're on a mission to make points value calculation simple, transparent, and accessible to everyone.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#our-story" className="text-blue-600 hover:text-blue-700 font-medium">
            Read Our Story →
          </a>
          <a href="#mission-vision" className="text-blue-600 hover:text-blue-700 font-medium">
            Our Mission →
          </a>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="py-16 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Story
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              Points Calculator was born from a simple observation: millions of people around the world 
              collect various types of points and rewards, but struggle to understand their true value 
              and make informed decisions about how to use them.
            </p>
            <p className="mb-6">
              Whether it's Steam points for gaming, airline miles for travel, or hotel rewards for 
              accommodation, we believe everyone deserves to know exactly what their points are worth 
              and how to maximize their value.
            </p>
            <p>
              Our platform brings together comprehensive data and intuitive tools to help you make 
              the smartest decisions about your rewards.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize access to points value information, making it easy for anyone to 
                understand and maximize their rewards, regardless of their technical expertise.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Provide accurate, real-time points valuations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Support all major points and rewards programs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Offer multi-currency support for global users
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To become the world's most trusted platform for points and rewards optimization, 
                helping millions of users make smarter decisions about their loyalty programs.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Global coverage of all major loyalty programs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  AI-powered optimization recommendations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Seamless integration with loyalty platforms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Gaming Points
              </h3>
              <p className="text-gray-600">
                Steam, PlayStation, Xbox, Nintendo, and Epic Games points calculators with 
                real-time exchange rates and value comparisons.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✈️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Airline Miles
              </h3>
              <p className="text-gray-600">
                Comprehensive coverage of major airlines including Delta, American, United, 
                British Airways, and Lufthansa with route-specific valuations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hotel Rewards
              </h3>
              <p className="text-gray-600">
                Marriott, Hilton, IHG, Hyatt, and Choice Hotels rewards calculators with 
                property-specific redemption values and elite benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 rounded-3xl">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose Points Calculator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                🚀 Fast & Accurate
              </h3>
              <p className="text-gray-600">
                Get accurate points valuations in under 3 seconds with our optimized algorithms.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                🌍 Global Coverage
              </h3>
              <p className="text-gray-600">
                Support for multiple currencies and loyalty programs from around the world.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                💰 Always Free
              </h3>
              <p className="text-gray-600">
                No hidden fees, no premium tiers - all our tools are completely free to use.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                🔒 Privacy First
              </h3>
              <p className="text-gray-600">
                Your data stays private. We never sell or share your personal information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Start?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of users who are already maximizing their points value with our platform.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          Start Calculating Now
        </a>
      </section>

      <BackToTop targetId="about-hero" />
    </div>
  )
}

export default AboutPage
