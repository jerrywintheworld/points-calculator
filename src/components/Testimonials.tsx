import React from 'react'

interface Testimonial {
  id: number
  name: string
  avatar: string
  rating: number
  content: string
  date: string
  category: 'gaming' | 'airline' | 'hotel' | 'general'
  pointsAmount?: string
  calculatedValue?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Chen",
    avatar: "🎮",
    rating: 5,
    content: "This calculator saved me so much time! I had 50,000 Steam points and was wondering if I should redeem them for games or keep saving. The calculation showed me exactly what they're worth. Ended up getting a great deal on a new game!",
    date: "2024-01-15",
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
    date: "2024-01-12",
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
    date: "2024-01-10",
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
    date: "2024-01-08",
    category: "general"
  },
  {
    id: 5,
    name: "David Kim",
    avatar: "🎮",
    rating: 5,
    content: "Finally found a reliable Steam points calculator! The exchange rates are up-to-date and the interface is so clean. Helped me realize my Steam points were worth more than I thought.",
    date: "2024-01-05",
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
    date: "2024-01-03",
    category: "airline",
    pointsAmount: "60,000 Delta miles",
    calculatedValue: "$900 USD"
  }
]

const Testimonials: React.FC = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
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
          <button className="btn-primary">
            Start Calculating Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
