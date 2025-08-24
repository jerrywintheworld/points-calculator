import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const ChoiceCalculator = () => {
  const [points, setPoints] = useState('')
  const [currency, setCurrency] = useState('USD')
  const [result, setResult] = useState<number | null>(null)

  // Auto-recalculate when currency type changes
  React.useEffect(() => {
    if (points && parseFloat(points) > 0) {
      calculateValue()
    }
  }, [currency])

  // Choice Hotels points exchange rates (based on typical redemption values)
  const exchangeRates = {
    USD: 0.004, // 1 point = $0.004 (US region)
    EUR: 0.003, // 1 point = €0.003 (EU region)
    GBP: 0.002, // 1 point = £0.002 (UK region)
    CAD: 0.005, // 1 point = C$0.005 (Canada)
    AUD: 0.006, // 1 point = A$0.006 (Australia)
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
    <div className="max-w-4xl mx-auto">
      <SEO 
        title="Choice Hotels Points Calculator - Calculate Choice Points Value | Points Calculator"
        description="Free Choice Hotels points calculator. Convert Choice points to USD, EUR, GBP, CAD, AUD. Calculate your Choice Hotels points value instantly."
        keywords="Choice Hotels points calculator, Choice points value, Choice points to money, Choice rewards, Choice redemption"
        canonical="https://pointscalculator.com/hotels/choice"
      />
      <div className="text-center mb-12">
        <div className="mb-4">
          <Link 
            to="/hotels" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            ← Back to Hotel Points
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Choice Hotels Points Calculator
        </h1>
        <p className="text-xl text-gray-600">
          Calculate your Choice Hotels points redemption value
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Area */}
        <div className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Enter Points Information
          </h2>
          
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
                placeholder="Enter Choice Hotels points amount"
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Calculation Result
          </h2>
          
          {result !== null ? (
            <div className="text-center">
              <div className="text-6xl font-bold text-primary-600 mb-4">
                {formatCurrency(result, currency)}
              </div>
              <p className="text-gray-600">
                {points} Choice Hotels points = {formatCurrency(result, currency)}
              </p>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  💡 Tip: Choice Hotels points can be redeemed for hotel stays, flights, and exclusive experiences. Value may vary based on property and booking dates.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <div className="text-6xl mb-4">🏨</div>
              <p>Enter points amount and select currency to calculate value</p>
            </div>
          )}
        </div>
      </div>

      {/* Exchange Rate Information */}
      <div className="mt-12 card">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Current Exchange Rates
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.entries(exchangeRates).map(([curr, rate]) => (
            <div key={curr} className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900">{curr}</div>
              <div className="text-sm text-gray-600">
                1000 points = {formatCurrency(1000 * rate, curr)}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                10000 points = {formatCurrency(10000 * rate, curr)}
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          * Exchange rates are for reference only. Actual redemption values may vary by property, dates, and availability.
        </p>
      </div>
    </div>
  )
}

export default ChoiceCalculator
