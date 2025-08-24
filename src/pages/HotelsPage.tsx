import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const HotelsPage: React.FC = () => {
  const hotels = [
    {
      id: 'marriott',
      name: 'Marriott Bonvoy',
      description: 'Marriott points calculator',
      icon: '🏨',
      color: 'bg-blue-600',
      status: 'available',
      path: '/hotels/marriott'
    },
    {
      id: 'hilton',
      name: 'Hilton Honors',
      description: 'Hilton points calculator',
      icon: '🏨',
      color: 'bg-blue-500',
      status: 'available',
      path: '/hotels/hilton'
    },
    {
      id: 'ihg',
      name: 'IHG Rewards',
      description: 'IHG points calculator',
      icon: '🏨',
      color: 'bg-green-600',
      status: 'available',
      path: '/hotels/ihg'
    },
    {
      id: 'hyatt',
      name: 'World of Hyatt',
      description: 'Hyatt points calculator',
      icon: '🏨',
      color: 'bg-purple-600',
      status: 'available',
      path: '/hotels/hyatt'
    },
    {
      id: 'choice',
      name: 'Choice Hotels',
      description: 'Choice Hotels points calculator',
      icon: '🏨',
      color: 'bg-orange-600',
      status: 'available',
      path: '/hotels/choice'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <SEO
        title="Hotel Points Calculator - Marriott, Hilton & More | Points Calculator"
        description="Calculate hotel points value for Marriott Bonvoy, Hilton Honors, IHG Rewards, World of Hyatt, and Choice Hotels. Free online hotel points calculator."
        keywords="hotel points calculator, Marriott points, Hilton points, IHG points, Hyatt points, Choice Hotels points"
        canonical="https://pointscalculator.com/hotels"
      />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hotel Points Zone
        </h1>
        <p className="text-xl text-gray-600">
          Calculate points value for major hotel groups
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <Link
            key={hotel.id}
            to={hotel.path}
            className="card hover:shadow-lg transition-shadow duration-200"
          >
            <div className="text-center">
              <div className={`w-20 h-20 ${hotel.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-white text-3xl">{hotel.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{hotel.name}</h3>
              <p className="text-gray-600 mb-4">{hotel.description}</p>
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Available
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 card">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Hotel Points Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">How to earn hotel points?</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Hotel accommodation expenses</li>
              <li>• Use co-branded credit cards</li>
              <li>• Dining and SPA services</li>
              <li>• Participate in promotional activities</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Points usage tips</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Monitor points redemption table</li>
              <li>• Choose off-season for accommodation redemption</li>
              <li>• Compare value across different room types</li>
              <li>• Consider upgrades and extended stays</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelsPage
