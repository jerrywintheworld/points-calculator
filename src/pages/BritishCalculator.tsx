import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const BritishCalculator = () => {
  const [miles, setMiles] = useState('')
  const [currency, setCurrency] = useState('USD')
  const [result, setResult] = useState<number | null>(null)

  // Auto-recalculate when currency type changes
  React.useEffect(() => {
    if (miles && parseFloat(miles) > 0) {
      calculateValue()
    }
  }, [currency])

  // British Airways miles exchange rates (based on typical redemption values)
  const exchangeRates = {
    USD: 0.013, // 1 mile = $0.013 (US region)
    EUR: 0.012, // 1 mile = €0.012 (EU region)
    GBP: 0.010, // 1 mile = £0.010 (UK region)
    CAD: 0.018, // 1 mile = C$0.018 (Canada)
    AUD: 0.020, // 1 mile = A$0.020 (Australia)
  }

  const calculateValue = () => {
    const milesNum = parseFloat(miles)
    if (isNaN(milesNum) || milesNum <= 0) {
      setResult(null)
      return
    }
    
    const rate = exchangeRates[currency as keyof typeof exchangeRates]
    const value = milesNum * rate
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
        title="British Airways Miles Calculator - Calculate BA Miles Value | Points Calculator"
        description="Free British Airways miles calculator. Convert BA miles to USD, EUR, GBP, CAD, AUD. Calculate your British Airways miles value instantly."
        keywords="British Airways miles calculator, BA miles calculator, British Airways miles value, BA miles to money, Avios redemption"
        canonical="https://pointscalculator.com/airlines/british"
      />
      <div className="text-center mb-12">
        <div className="mb-4">
          <Link 
            to="/airlines" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            ← Back to Airline Miles
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          British Airways Miles Calculator
        </h1>
        <p className="text-xl text-gray-600">
          Calculate your British Airways miles redemption value
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Area */}
        <div className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Enter Miles Information
          </h2>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="miles" className="block text-sm font-medium text-gray-700 mb-2">
                Miles Amount
              </label>
              <input
                id="miles"
                type="number"
                value={miles}
                onChange={(e) => setMiles(e.target.value)}
                placeholder="Enter British Airways miles amount"
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
              disabled={!miles || parseFloat(miles) <= 0}
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
                {miles} British Airways miles = {formatCurrency(result, currency)}
              </p>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  💡 Tip: British Airways miles (Avios) can be redeemed for flights, upgrades, and partner rewards. Value may vary based on route and booking class.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <div className="text-6xl mb-4">✈️</div>
              <p>Enter miles amount and select currency to calculate value</p>
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
                1000 miles = {formatCurrency(1000 * rate, curr)}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                10000 miles = {formatCurrency(10000 * rate, curr)}
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          * Exchange rates are for reference only. Actual redemption values may vary by route, booking class, and availability.
        </p>
      </div>
    </div>
  )
}

export default BritishCalculator
