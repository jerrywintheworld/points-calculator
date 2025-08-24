import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const AirlinesPage: React.FC = () => {
  const airlines = [
          {
        id: 'delta',
        name: 'Delta Air Lines',
        description: 'Delta Airlines miles calculator',
        icon: '✈️',
        color: 'bg-blue-600',
        status: 'available',
        path: '/airlines/delta'
      },
          {
        id: 'american',
        name: 'American Airlines',
        description: 'American Airlines miles calculator',
        icon: '✈️',
        color: 'bg-red-600',
        status: 'available',
        path: '/airlines/american'
      },
          {
        id: 'united',
        name: 'United Airlines',
        description: 'United Airlines miles calculator',
        icon: '✈️',
        color: 'bg-blue-800',
        status: 'available',
        path: '/airlines/united'
      },
          {
        id: 'british',
        name: 'British Airways',
        description: 'British Airways miles calculator',
        icon: '✈️',
        color: 'bg-blue-500',
        status: 'available',
        path: '/airlines/british'
      },
          {
        id: 'lufthansa',
        name: 'Lufthansa',
        description: 'Lufthansa miles calculator',
        icon: '✈️',
        color: 'bg-yellow-600',
        status: 'available',
        path: '/airlines/lufthansa'
      }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <SEO 
        title="Airline Miles Calculator - Delta, American & More"
        description="Calculate airline miles value for Delta, American Airlines, United, British Airways, and Lufthansa. Free online calculator."
        canonical="https://www.points-calculator.com/airlines"
      />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Airline Miles Zone
        </h1>
        <p className="text-xl text-gray-600">
          Calculate points value for major airlines
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {airlines.map((airline) => (
          airline.status === 'available' ? (
            <Link key={airline.id} to={airline.path} className="group">
              <div className="card group-hover:shadow-lg transition-shadow duration-200">
                <div className="text-center">
                  <div className={`w-20 h-20 ${airline.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-white text-3xl">{airline.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{airline.name}</h3>
                  <p className="text-gray-600 mb-4">{airline.description}</p>
                  <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Available
                  </span>
                </div>
              </div>
            </Link>
          ) : (
            <div key={airline.id} className="card opacity-60">
              <div className="text-center">
                <div className={`w-20 h-20 ${airline.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-white text-3xl">{airline.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{airline.name}</h3>
                <p className="text-gray-600 mb-4">{airline.description}</p>
                <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                  Coming Soon
                </span>
              </div>
            </div>
          )
        ))}
      </div>

      <div className="mt-12 card">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Airline Miles Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">How to earn airline miles?</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Accumulate miles from flights</li>
              <li>• Use co-branded credit cards</li>
              <li>• Hotel stays and car rental services</li>
              <li>• Shopping and dining expenses</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Miles usage tips</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Monitor mileage redemption table changes</li>
              <li>• Choose off-season for ticket redemption</li>
              <li>• Compare value across different cabin classes</li>
              <li>• Consider upgrades and shopping redemption</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AirlinesPage
