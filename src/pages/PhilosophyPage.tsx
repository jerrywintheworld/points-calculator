import React from 'react'
import SEO from '../components/SEO'
import BackToTop from '../components/BackToTop'

const PhilosophyPage: React.FC = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    // Always scroll to top when this page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-12">
      <SEO 
        title="Service Philosophy - Points Calculator | Our Values & Commitments"
        description="Discover Points Calculator's service philosophy, core values, and commitments to transparency, accuracy, and user empowerment in points value calculation."
        canonical="https://www.points-calculator.com/philosophy"
      />
      
      {/* Hero Section */}
      <section id="philosophy-hero" className="text-center py-16 scroll-mt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Our Service Philosophy
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          We believe in transparency, accuracy, and putting users first in everything we do.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#core-values" className="text-blue-600 hover:text-blue-700 font-medium">
            Our Values →
          </a>
          <a href="#commitments" className="text-blue-600 hover:text-blue-700 font-medium">
            Our Commitments →
          </a>
        </div>
      </section>

      {/* Core Values */}
      <section id="core-values" className="py-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Transparency
              </h3>
              <p className="text-gray-600">
                We believe in complete transparency about how our calculations work, 
                where our data comes from, and how we make decisions.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Accuracy
              </h3>
              <p className="text-gray-600">
                We're committed to providing the most accurate and up-to-date 
                information to help you make informed decisions.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                User-First
              </h3>
              <p className="text-gray-600">
                Every feature we build and every decision we make is driven by 
                what's best for our users, not what's best for our bottom line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Commitments */}
      <section id="commitments" className="py-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Service Commitments
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Always Free Access
                </h3>
                <p className="text-gray-600">
                  We're committed to keeping our core tools completely free. No hidden fees, 
                  no premium tiers, no paywalls.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Data Accuracy & Transparency
                </h3>
                <p className="text-gray-600">
                  We source our data from reliable, publicly available sources and clearly 
                  indicate the source and update frequency of all information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Experience Our Philosophy in Action
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          See how our values and commitments translate into real tools that help 
          you maximize your points value.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          Try Our Calculators
        </a>
      </section>

      <BackToTop targetId="philosophy-hero" />
    </div>
  )
}

export default PhilosophyPage
