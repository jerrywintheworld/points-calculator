import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Testimonials from '../components/Testimonials'

const HomePage: React.FC = () => {
  const [points, setPoints] = useState('')
  const [currency, setCurrency] = useState('USD')
  const [result, setResult] = useState<number | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  // Auto-recalculate when currency type changes
  React.useEffect(() => {
    if (points && parseFloat(points) > 0) {
      calculateValue()
    }
  }, [currency])

  // Steam points exchange rates (based on Steam's actual pricing in different regions)
  const exchangeRates = {
    USD: 0.01, // 1 point = $0.01 (US region)
    EUR: 0.008, // 1 point = €0.008 (EU region - typically lower than USD)
    GBP: 0.007, // 1 point = £0.007 (UK region - typically lower than EUR)
    CAD: 0.013, // 1 point = C$0.013 (Canada - higher due to regional pricing)
    AUD: 0.015, // 1 point = A$0.015 (Australia - higher due to regional pricing)
  }

  const calculateValue = () => {
    const pointsNum = parseFloat(points)
    if (isNaN(pointsNum) || pointsNum <= 0) {
      setResult(null)
      return
    }
    
    const rate = exchangeRates[currency as keyof typeof exchangeRates]
    const value = pointsNum * rate
    setResult(value)
  }

  // Manual calculation function (for button click)
  const handleCalculate = () => {
    calculateValue()
  }

  const formatCurrency = (value: number, curr: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: curr,
    }).format(value)
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="space-y-8">
      <SEO 
        title="Points Calculator | The Most Comprehensive Points Value Platform"
        description="Free online calculator for Steam points, airline miles, and hotel points. Multi-currency support. Calculate points value in seconds."
        canonical="https://www.points-calculator.com/"
      />
      
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          The Most Comprehensive Points Calculator Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          One-stop points calculation service supporting gaming points, airline miles, hotel points, and more.
          Calculate points value in 3 seconds to make the smartest redemption decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Temporarily hide button to let users focus on Steam points calculator */}
        </div>
      </section>

      {/* Steam Points Calculator - Main Feature */}
      <section id="calculator" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🎮 Steam Points Calculator
          </h2>
          <p className="text-xl text-gray-600">
            Calculate your Steam points redemption value
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Area */}
            <div className="card">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Enter Points Information
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="points" className="block text-sm font-medium text-gray-700 mb-2">
                    Points Amount
                  </label>
                  <input
                    id="points"
                    type="number"
                    value={points}
                    onChange={(e) => setPoints(e.target.value)}
                    placeholder="Enter Steam points amount"
                    className="input-field"
                    min="0"
                  />
                </div>

                <div>
                  <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-2">
                    Currency Type
                  </label>
                  <select
                    id="currency"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="input-field"
                  >
                    <option value="USD">US Dollar (USD)</option>
                    <option value="EUR">Euro (EUR)</option>
                    <option value="GBP">British Pound (GBP)</option>
                    <option value="CAD">Canadian Dollar (CAD)</option>
                    <option value="AUD">Australian Dollar (AUD)</option>
                  </select>
                </div>

                <button
                  onClick={handleCalculate}
                  className="btn-primary w-full"
                  disabled={!points || parseFloat(points) <= 0}
                >
                  Calculate Value
                </button>
              </div>
            </div>

            {/* Result Area */}
            <div className="card">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Calculation Result
              </h3>
              
              {result !== null ? (
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary-600 mb-4">
                    {formatCurrency(result, currency)}
                  </div>
                  <p className="text-gray-600">
                    {points} Steam points = {formatCurrency(result, currency)}
                  </p>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      💡 Tip: Points are valuable personal assets. Consider tracking other points to build a complete portfolio.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">💰</div>
                  <p>Enter points amount and select currency to calculate value</p>
                </div>
              )}
            </div>
          </div>

          {/* Exchange Rate Information */}
          <div className="mt-16 card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Current Exchange Rates
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Object.entries(exchangeRates).map(([curr, rate]) => (
                <div key={curr} className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900">{curr}</div>
                  <div className="text-sm text-gray-600">
                    100 points = {formatCurrency(100 * rate, curr)}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    1000 points = {formatCurrency(1000 * rate, curr)}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Exchange rates are for reference only. Actual rates may vary by region and time.
            </p>
          </div>
        </div>

        {/* Natural Guidance Tip */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-3">
            Beyond Steam points, we have more gaming platforms and points types
          </p>
          <Link 
            to="/gaming" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
          >
            Explore Other Points Types →
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Points Calculator?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of users who trust our platform for accurate, fast, and comprehensive points valuation
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Lightning Fast */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Lightning Fast</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Get instant results in under 3 seconds. No waiting, no delays - just accurate calculations when you need them most.
              </p>
            </div>

            {/* Comprehensive Coverage */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">All-in-One Platform</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                From gaming points to airline miles and hotel rewards - we cover every major loyalty program in one place.
              </p>
            </div>

            {/* Multi-Currency Support */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">💱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Multi-Currency</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Support for USD, EUR, GBP, CAD, AUD and more. Get values in your local currency instantly.
              </p>
            </div>

            {/* Mobile Optimized */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Mobile First</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Perfectly optimized for all devices. Calculate on-the-go with our responsive design.
              </p>
            </div>

            {/* Always Free */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">🆓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">100% Free</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                No hidden fees, no premium tiers. All our tools are completely free to use, forever.
              </p>
            </div>

            {/* Real-Time Updates */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Always Updated</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Exchange rates and valuations updated regularly to ensure you get the most accurate results.
              </p>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Additional Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium">No Registration Required</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Privacy Focused</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Offline Capable</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium">24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-8 text-gray-500">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🔒</span>
                <span className="text-sm font-medium">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⚡</span>
                <span className="text-sm font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">👥</span>
                <span className="text-sm font-medium">10K+ Users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Use Our Calculators
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">1</span>
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
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">2</span>
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
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">3</span>
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-slate-50 rounded-3xl">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="mr-3">❓</span>
                  What is Points Calculator?
                </h3>
                <span className={`text-gray-400 transition-transform ${expandedFaq === 0 ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {expandedFaq === 0 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Points Calculator is a comprehensive platform that helps you calculate the value of various types of points and rewards, including gaming points, airline miles, and hotel rewards.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="mr-3">❓</span>
                  Is Points Calculator free to use?
                </h3>
                <span className={`text-gray-400 transition-transform ${expandedFaq === 1 ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {expandedFaq === 1 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Yes! All our core tools are completely free to use. We believe that everyone should have access to accurate points valuation information without any cost barriers.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="mr-3">🎮</span>
                  How do I calculate Steam points value?
                </h3>
                <span className={`text-gray-400 transition-transform ${expandedFaq === 2 ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {expandedFaq === 2 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Simply enter your Steam points amount in the Steam calculator, select your preferred currency, and click calculate. The tool will show you the estimated value in your chosen currency.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="mr-3">✈️</span>
                  How do airline miles calculations work?
                </h3>
                <span className={`text-gray-400 transition-transform ${expandedFaq === 3 ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {expandedFaq === 3 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Airline miles calculations consider factors like route distance, cabin class, airline policies, and current market conditions. Our tools provide estimates based on typical redemption values.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="mr-3">🏨</span>
                  How do hotel points calculations work?
                </h3>
                <span className={`text-gray-400 transition-transform ${expandedFaq === 4 ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {expandedFaq === 4 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Hotel points calculations consider factors like property category, location, season, and current market rates. Our tools provide estimates based on typical redemption values for each hotel chain.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Quick Access Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Other Points Types
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* 游戏积分 */}
          <Link to="/gaming" className="group">
            <div className="card group-hover:shadow-lg transition-shadow duration-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">🎮</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Gaming Points</h3>
                <p className="text-gray-600">PlayStation, Xbox and more platforms</p>
              </div>
            </div>
          </Link>

          {/* 航空积分 */}
          <Link to="/airlines" className="group">
            <div className="card group-hover:shadow-lg transition-shadow duration-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">✈️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Airline Miles</h3>
                <p className="text-gray-600">Major airline loyalty programs</p>
              </div>
            </div>
          </Link>

          {/* 酒店积分 */}
          <Link to="/hotels" className="group">
            <div className="card group-hover:shadow-lg transition-shadow duration-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">🏨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hotel Points</h3>
                <p className="text-gray-600">Marriott, Hilton and more hotels</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
