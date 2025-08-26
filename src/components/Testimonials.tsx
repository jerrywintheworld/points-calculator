import React, { useState, useEffect } from 'react'
import TestimonialForm from './TestimonialForm'
import Modal from './Modal'

interface Testimonial {
  id: string | number
  name: string
  avatar: string
  rating: number
  content: string
  date: string
  category: 'gaming' | 'airline' | 'hotel' | 'general'
  pointsAmount?: string
  calculatedValue?: string
  points_amount?: string
  calculated_value?: string
}

const staticTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Chen",
    avatar: "🎮",
    rating: 5,
    content: "This calculator saved me so much time! I had 50,000 Steam points and was wondering if I should redeem them for games or keep saving. The calculation showed me exactly what they're worth. Ended up getting a great deal on a new game!",
    date: "2025-08-24",
    category: "gaming",
    pointsAmount: "50,000 Steam points",
    calculatedValue: "$500 USD"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    avatar: "✈️",
    rating: 5,
    content: "As a frequent flyer, I've been using this tool to track my airline miles value. The United Airlines calculator is spot-on and helped me decide between using miles for a business class upgrade or saving them for a future trip.",
    date: "2025-08-24",
    category: "airline",
    pointsAmount: "75,000 United miles",
    calculatedValue: "$1,125 USD"
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    avatar: "🏨",
    rating: 5,
    content: "The Marriott points calculator is incredibly accurate. I was able to compare the value of using points vs paying cash for my hotel stay. The tool made it clear that using points was the better choice this time.",
    date: "2025-08-25",
    category: "hotel",
    pointsAmount: "25,000 Marriott points",
    calculatedValue: "$200 USD"
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "🎯",
    rating: 5,
    content: "Love how comprehensive this platform is! I can calculate everything from PlayStation points to hotel rewards in one place. The multi-currency support is fantastic for international travelers like me.",
    date: "2025-08-25",
    category: "general"
  },
  {
    id: 5,
    name: "David Kim",
    avatar: "🎮",
    rating: 5,
    content: "Finally found a reliable Steam points calculator! The exchange rates are up-to-date and the interface is so clean. Helped me realize my Steam points were worth more than I thought.",
    date: "2025-08-25",
    category: "gaming",
    pointsAmount: "12,000 Steam points",
    calculatedValue: "$120 USD"
  },
  {
    id: 6,
    name: "Lisa Thompson",
    avatar: "✈️",
    rating: 5,
    content: "The Delta calculator helped me maximize my miles value. I was about to book a domestic flight with cash, but the calculator showed me I could get much better value using miles for an international trip instead.",
    date: "2025-08-26",
    category: "airline",
    pointsAmount: "60,000 Delta miles",
    calculatedValue: "$900 USD"
  },
  {
    id: 7,
    name: "James Wilson",
    avatar: "🏨",
    rating: 5,
    content: "The Hilton points calculator is spot-on! I was planning a vacation and the tool helped me decide whether to use points or pay cash. Ended up saving over $300 by using points strategically.",
    date: "2025-08-26",
    category: "hotel",
    pointsAmount: "40,000 Hilton points",
    calculatedValue: "$320 USD"
  },
  {
    id: 8,
    name: "Maria Garcia",
    avatar: "🎮",
    rating: 5,
    content: "As a PlayStation user, I love that this platform includes gaming points. The PlayStation calculator helped me understand the real value of my points and make better purchasing decisions.",
    date: "2025-08-26",
    category: "gaming",
    pointsAmount: "8,000 PlayStation points",
    calculatedValue: "$80 USD"
  }
]

const Testimonials: React.FC = () => {
  const [showForm, setShowForm] = useState(false)
  const [userTestimonials, setUserTestimonials] = useState<Testimonial[]>([])

  // 从localStorage加载用户评论
  useEffect(() => {
    const savedTestimonials = localStorage.getItem('userTestimonials')
    if (savedTestimonials) {
      try {
        const parsed = JSON.parse(savedTestimonials)
        setUserTestimonials(parsed)
      } catch (error) {
        console.error('Error loading testimonials from localStorage:', error)
        // 如果解析失败，清除损坏的数据
        localStorage.removeItem('userTestimonials')
      }
    }
  }, [])

  // 保存评论到localStorage
  const saveTestimonialsToStorage = (testimonials: Testimonial[]) => {
    try {
      localStorage.setItem('userTestimonials', JSON.stringify(testimonials))
    } catch (error) {
      console.error('Error saving testimonials to localStorage:', error)
    }
  }

  const handleSubmitSuccess = (newTestimonial: Testimonial) => {
    const updatedTestimonials = [newTestimonial, ...userTestimonials]
    setUserTestimonials(updatedTestimonials)
    saveTestimonialsToStorage(updatedTestimonials)
    setShowForm(false)
  }

  // 删除用户评论
  const handleDeleteTestimonial = (testimonialId: string | number) => {
    const updatedTestimonials = userTestimonials.filter(t => t.id !== testimonialId)
    setUserTestimonials(updatedTestimonials)
    saveTestimonialsToStorage(updatedTestimonials)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'gaming': return '🎮'
      case 'airline': return '✈️'
      case 'hotel': return '🏨'
      default: return '💎'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'gaming': return 'bg-green-100 text-green-800'
      case 'airline': return 'bg-blue-100 text-blue-800'
      case 'hotel': return 'bg-orange-100 text-orange-800'
      default: return 'bg-purple-100 text-purple-800'
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ))
  }

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of users who trust our calculators to make informed decisions about their points and rewards
          </p>
        </div>

        {/* Comment Form Modal */}
        <Modal 
          isOpen={showForm}
          onClose={() => setShowForm(false)}
          title="Share Your Experience"
        >
          <TestimonialForm 
            onSuccess={handleSubmitSuccess}
            onCancel={() => setShowForm(false)}
          />
        </Modal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* User Testimonials */}
          {userTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative group">
              {/* Delete Button */}
              <button
                onClick={() => handleDeleteTestimonial(testimonial.id)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                title="Delete this review"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(testimonial.category)}`}>
                  {getCategoryIcon(testimonial.category)} {testimonial.category}
                </span>
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Points Info */}
              {(testimonial.points_amount || testimonial.pointsAmount) && (testimonial.calculated_value || testimonial.calculatedValue) && (
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Calculated:</span> {testimonial.points_amount || testimonial.pointsAmount} = {testimonial.calculated_value || testimonial.calculatedValue}
                  </div>
                </div>
              )}

              {/* Date */}
              <div className="text-xs text-gray-500">
                {new Date(testimonial.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          ))}

          {/* Static Testimonials */}
          {staticTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(testimonial.category)}`}>
                  {getCategoryIcon(testimonial.category)} {testimonial.category}
                </span>
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Points Info */}
              {testimonial.pointsAmount && testimonial.calculatedValue && (
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Calculated:</span> {testimonial.pointsAmount} = {testimonial.calculatedValue}
                  </div>
                </div>
              )}

              {/* Date */}
              <div className="text-xs text-gray-500">
                {new Date(testimonial.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          ))}

          {/* Write Review Card - Last Position */}
          <div 
            onClick={() => setShowForm(true)}
            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-dashed border-gray-300 hover:border-primary-400 hover:shadow-xl transition-all duration-300 cursor-pointer group"
          >
            <div className="text-center h-full flex flex-col justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                💬
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Share Your Experience
              </h3>
              <p className="text-gray-600 mb-4">
                Help others by sharing your experience with our points calculator
              </p>
              <button className="btn-primary w-full">
                Write a Review
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">10,000+</div>
            <div className="text-gray-600">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">Points Types Supported</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Ready to calculate your points value?
          </p>
          <button 
            onClick={() => {
              // 首先尝试在当前页面找到计算器
              const calculatorElement = document.getElementById('calculator')
              if (calculatorElement) {
                calculatorElement.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                })
              } else {
                // 如果当前页面没有计算器，跳转到首页
                window.location.href = '/#calculator'
              }
            }}
            className="btn-primary"
          >
            Start Calculating Now
          </button>
          
          {/* Clear All Reviews Button */}
          {userTestimonials.length > 0 && (
            <div className="mt-6">
              <button
                onClick={() => {
                  if (window.confirm('Are you sure you want to delete all your reviews? This action cannot be undone.')) {
                    setUserTestimonials([])
                    localStorage.removeItem('userTestimonials')
                  }
                }}
                className="text-sm text-gray-500 hover:text-red-500 transition-colors"
              >
                Clear all my reviews
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
