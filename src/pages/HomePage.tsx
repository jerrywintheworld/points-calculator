import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const HomePage: React.FC = () => {
  const [points, setPoints] = useState('')
  const [currency, setCurrency] = useState('USD')
  const [result, setResult] = useState<number | null>(null)

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

  return (
    <div className="space-y-8">
      <SEO 
        title="Points Calculator - Steam Points Value Calculator | Gaming, Airline & Hotel Points"
        description="Calculate Steam points value instantly. Free online calculator for gaming points, airline miles, and hotel points. Multi-currency support for USD, EUR, GBP, CAD, AUD."
        keywords="points calculator, Steam points calculator, gaming points, airline miles, hotel points, points value, Steam wallet, PSN points, Xbox rewards"
        canonical="https://pointscalculator.com/"
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 shadow-lg">
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

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-primary-600 text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Calculation</h3>
            <p className="text-gray-600">Complete points value calculation in 3 seconds</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-primary-600 text-2xl">🌐</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Coverage</h3>
            <p className="text-gray-600">Support all mainstream points types</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-primary-600 text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Friendly</h3>
            <p className="text-gray-600">Perfectly adapted for all devices</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
