import React from 'react'
import SEO from '../components/SEO'
import BackToTop from '../components/BackToTop'

const TermsPage: React.FC = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    // Always scroll to top when this page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-12">
      <SEO 
        title="Terms of Service - Points Calculator | Usage Terms & Conditions"
        description="Read Points Calculator's terms of service. Understand our usage terms, conditions, and your rights when using our points calculation tools."
        canonical="https://www.points-calculator.com/terms"
      />
      
      {/* Hero Section */}
      <section id="terms-hero" className="text-center py-16 scroll-mt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Terms of Service
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Please read these terms carefully before using our services.
        </p>
        <p className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="#our-services" className="text-blue-600 hover:text-blue-700 font-medium">
            Our Services →
          </a>
          <a href="#disclaimers" className="text-blue-600 hover:text-blue-700 font-medium">
            Important Disclaimers →
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Agreement to Terms
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              These Terms of Service ("Terms") govern your use of the Points Calculator website 
              and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p>
              If you disagree with any part of these terms, you may not access our services. 
              We reserve the right to modify these terms at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section id="our-services" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Services
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              Points Calculator provides online tools for calculating the value of various types 
              of points and rewards, including but not limited to:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Gaming platform points (Steam, PlayStation, Xbox, Nintendo, Epic)</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Airline miles and loyalty programs</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Hotel rewards and loyalty programs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Disclaimers */}
      <section id="disclaimers" className="py-16 bg-gray-50 rounded-3xl scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Important Disclaimers
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                📊 Calculation Accuracy
              </h3>
              <p className="text-gray-600">
                Our calculations are estimates based on available data and may not reflect 
                actual redemption values. We recommend verifying results with the respective 
                loyalty programs before making decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                💰 Financial Advice
              </h3>
              <p className="text-gray-600">
                Our tools are for informational purposes only and do not constitute 
                financial advice. Please consult with qualified professionals for 
                investment or financial decisions.
              </p>
            </div>
          </div>
        </div>
      </section>



      <BackToTop targetId="terms-hero" />
    </div>
  )
}

export default TermsPage
