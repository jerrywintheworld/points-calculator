import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()
  const { user, signOut } = useAuth()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">💎</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900">PC</span>
                  <span className="text-sm text-gray-600 -mt-1">Points Calculator</span>
                </div>
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

            {/* Authentication Section */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-700">
                    Welcome, {user.email}
                  </span>
                  <Link
                    to="/profile"
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Sign In
                </Link>
              )}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">💎</span>
                </div>
                <span className="text-xl font-bold text-gray-900">PC</span>
              </div>
              <p className="text-sm text-gray-600">Points Calculator</p>
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About Us
              </Link>
              <Link to="/philosophy" className="text-gray-600 hover:text-blue-600 transition-colors">
                Service Philosophy
              </Link>

              <Link to="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-6 pt-4 text-center text-gray-500 text-sm">
            <p>&copy; 2025 Points Calculator</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
