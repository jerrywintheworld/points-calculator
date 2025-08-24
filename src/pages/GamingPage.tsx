import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const GamingPage: React.FC = () => {
  const gamingPlatforms = [
    {
      id: 'steam',
      name: 'Steam Points',
      description: 'Steam platform points value calculation',
      icon: 'S',
      color: 'bg-blue-600',
      path: '/gaming/steam',
      isMain: true
    },
    {
      id: 'playstation',
      name: 'PlayStation Stars',
      description: 'PSN points value calculation',
      icon: '🎮',
      color: 'bg-blue-500',
      path: '/gaming/playstation'
    },
    {
      id: 'xbox',
      name: 'Xbox Rewards',
      description: 'Xbox points value calculation',
      icon: '🎮',
      color: 'bg-green-600',
      path: '/gaming/xbox'
    },
    {
      id: 'nintendo',
      name: 'Nintendo Points',
      description: 'Nintendo points value calculation',
      icon: '🎮',
      color: 'bg-red-600',
      path: '/gaming/nintendo'
    },
    {
      id: 'epic',
      name: 'Epic Games',
      description: 'Epic points value calculation',
      icon: '🎮',
      color: 'bg-purple-600',
      path: '/gaming/epic'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <SEO 
        title="Gaming Points Calculator - Steam, PlayStation, Xbox & More | Points Calculator"
        description="Calculate gaming points value for Steam, PlayStation Stars, Xbox Rewards, Nintendo Points, and Epic Games. Free online gaming points calculator."
        keywords="gaming points calculator, Steam points, PlayStation Stars, Xbox Rewards, Nintendo Points, Epic Games, gaming rewards"
        canonical="https://pointscalculator.com/gaming"
      />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Gaming Points Zone
        </h1>
        <p className="text-xl text-gray-600">
          Calculate points value for major gaming platforms (Steam Points Calculator is available as main feature on homepage)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gamingPlatforms.map((platform) => (
          <Link key={platform.id} to={platform.path} className="group">
            <div className={`card group-hover:shadow-lg transition-shadow duration-200 ${
              platform.isMain ? 'ring-2 ring-primary-500 bg-gradient-to-br from-blue-50 to-indigo-50' : ''
            }`}>
              <div className="text-center">
                <div className={`w-20 h-20 ${platform.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-white text-3xl font-bold">{platform.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {platform.name}
                  {platform.isMain && <span className="ml-2 text-sm bg-primary-100 text-primary-700 px-2 py-1 rounded-full">Main</span>}
                </h3>
                <p className="text-gray-600">{platform.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 card">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Gaming Points Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">How to earn gaming points?</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Purchase games and DLC</li>
              <li>• Participate in platform events</li>
              <li>• Complete achievement tasks</li>
              <li>• Refer friends to register</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Points usage tips</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Monitor exchange rate changes</li>
              <li>• Choose the best redemption timing</li>
              <li>• Compare points value across platforms</li>
              <li>• Plan points usage rationally</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamingPage
