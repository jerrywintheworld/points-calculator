import React from 'react'
import SEO from '../components/SEO'
import BackToTop from '../components/BackToTop'

const PrivacyPage: React.FC = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    // Always scroll to top when this page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-12">
      <SEO 
        title="Privacy Policy - Points Calculator | Data Protection & Privacy"
        description="Learn how Points Calculator protects your privacy and handles your data. Read our comprehensive privacy policy and data protection practices."
        canonical="https://www.points-calculator.com/privacy"
      />
      
      {/* Hero Section */}
      <section id="privacy-hero" className="text-center py-16 scroll-mt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>
        <p className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="#information-collection" className="text-blue-600 hover:text-blue-700 font-medium">
            Data Collection →
          </a>
          <a href="#data-security" className="text-blue-600 hover:text-blue-700 font-medium">
            Data Security →
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Introduction
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              Points Calculator ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website and use our services.
            </p>
            <p>
              By using our services, you agree to the collection and use of information in 
              accordance with this policy. If you do not agree with our policies and practices, 
              please do not use our services.
            </p>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section id="information-collection" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Information We Collect
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Information You Provide
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Account information (if you create an account)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Points data you input for calculations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Feedback and support requests</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Automatically Collected Information
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Device information (browser type, operating system)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Usage data (pages visited, time spent on site)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>IP address and general location information</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section id="data-security" className="py-16 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Data Security
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Security Measures
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Encryption of data in transit and at rest</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Regular security assessments and updates</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Access controls and authentication</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Your Responsibilities
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Keep your account credentials secure</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Log out when using shared devices</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Report any security concerns immediately</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Questions About Privacy?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          If you have any questions about this Privacy Policy or our data practices, 
          please don't hesitate to contact us.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          Contact Us
        </a>
      </section>

      <BackToTop targetId="privacy-hero" />
    </div>
  )
}

export default PrivacyPage
