import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">Points Calculator</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/gaming" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/gaming') || isActive('/gaming/steam')
                    ? 'bg-primary-100 text-primary-700' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Gaming Points
              </Link>
              <Link 
                to="/airlines" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/airlines') 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Airline Miles
              </Link>
              <Link 
                to="/hotels" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/hotels') 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Hotel Points
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>&copy; 2024 Points Calculator. The Most Comprehensive Points Calculator Platform</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
