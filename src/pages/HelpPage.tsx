import React, { useState } from 'react'
import SEO from '../components/SEO'
import BackToTop from '../components/BackToTop'

const HelpPage: React.FC = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    // Always scroll to top when this page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-12">
      <SEO 
        title="PC - Help Center | Points Calculator"
        description="Get help with Points Calculator tools. Find answers to frequently asked questions, usage guides, and tips for maximizing your points value."
        canonical="https://www.points-calculator.com/help"
      />
      
      {/* Hero Section */}
      <section id="help-hero" className="text-center py-16 scroll-mt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Help Center
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Find answers to your questions and learn how to get the most out of our points calculation tools.
        </p>
      </section>

      {/* How to Use */}
      <section id="how-to-use" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Use Our Calculators
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Choose Your Calculator
                  </h3>
                  <p className="text-gray-600">
                    Navigate to the appropriate section (Gaming, Airlines, or Hotels) and select the specific calculator you need.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Enter Your Points
                  </h3>
                  <p className="text-gray-600">
                    Input the amount of points you have and select your preferred currency from the dropdown menu.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Get Your Results
                  </h3>
                  <p className="text-gray-600">
                    View your calculated value instantly and use it to make informed decisions about your points redemption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          {/* FAQ Content */}
          <div className="space-y-6">
            {/* General Questions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <span className="mr-2">❓</span>
                What is Points Calculator?
              </h3>
              <p className="text-gray-600">
                Points Calculator is a comprehensive platform that helps you calculate the value of various types of points and rewards, including gaming points, airline miles, and hotel rewards.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <span className="mr-2">❓</span>
                Is Points Calculator free to use?
              </h3>
              <p className="text-gray-600">
                Yes! All our core tools are completely free to use. We believe that everyone should have access to accurate points valuation information without any cost barriers.
              </p>
            </div>

            {/* Gaming Questions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <span className="mr-2">🎮</span>
                How do I calculate Steam points value?
              </h3>
              <p className="text-gray-600">
                Simply enter your Steam points amount in the Steam calculator, select your preferred currency, and click calculate. The tool will show you the estimated value in your chosen currency.
              </p>
            </div>

            {/* Airline Questions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <span className="mr-2">✈️</span>
                How do airline miles calculations work?
              </h3>
              <p className="text-gray-600">
                Airline miles calculations consider factors like route distance, cabin class, airline policies, and current market conditions. Our tools provide estimates based on typical redemption values.
              </p>
            </div>

            {/* Hotel Questions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <span className="mr-2">🏨</span>
                How do hotel points calculations work?
              </h3>
              <p className="text-gray-600">
                Hotel points calculations consider factors like property category, location, season, and current market rates. Our tools provide estimates based on typical redemption values for each hotel chain.
              </p>
            </div>
          </div>
        </div>
      </section>



      <BackToTop targetId="help-hero" />
    </div>
  )
}

export default HelpPage
