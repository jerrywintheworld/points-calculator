import React, { useState } from 'react'
import { CreateTestimonialData } from '../types/testimonial'

interface TestimonialFormProps {
  onSuccess?: (testimonial: any) => void
  onCancel?: () => void
}

const TestimonialForm: React.FC<TestimonialFormProps> = ({ onSuccess, onCancel }) => {
  const [formData, setFormData] = useState<CreateTestimonialData>({
    name: '',
    avatar: '💎',
    rating: 5,
    content: '',
    category: 'general',
    points_amount: '',
    calculated_value: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      setError('Please enter your name')
      return
    }

    if (formData.content.length < 10) {
      setError('Please write at least 10 characters')
      return
    }

    if (formData.content.length > 500) {
      setError('Please keep your review under 500 characters')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      // Create a new testimonial object
      const newTestimonial = {
        id: Date.now().toString(),
        name: formData.name,
        avatar: formData.avatar,
        rating: formData.rating,
        content: formData.content,
        category: formData.category,
        points_amount: formData.points_amount || undefined,
        calculated_value: formData.calculated_value || undefined,
        date: new Date().toISOString().split('T')[0],
        likes_count: 0
      }

      // Call success callback with the new testimonial
      onSuccess?.(newTestimonial)
    } catch (err: any) {
      setError(err.message || 'Failed to submit testimonial')
    } finally {
      setIsSubmitting(false)
    }
  }



  return (
    <div className="w-full">
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="input-field"
            required
          />
        </div>

        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
            Rating
          </label>
          <select
            id="rating"
            value={formData.rating}
            onChange={(e) => setFormData(prev => ({ ...prev, rating: parseInt(e.target.value) }))}
            className="input-field"
          >
            <option value={5}>5 Stars - Excellent</option>
            <option value={4}>4 Stars - Very Good</option>
            <option value={3}>3 Stars - Good</option>
            <option value={2}>2 Stars - Fair</option>
            <option value={1}>1 Star - Poor</option>
          </select>
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as any }))}
            className="input-field"
          >
            <option value="general">General</option>
            <option value="gaming">Gaming Points</option>
            <option value="airline">Airline Miles</option>
            <option value="hotel">Hotel Points</option>
          </select>
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
            Your Review *
          </label>
          <textarea
            id="content"
            value={formData.content}
            onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
            placeholder="Share your experience with our points calculator..."
            className="input-field min-h-[120px] resize-none"
            required
            maxLength={500}
          />
        </div>

        <div className="flex space-x-3">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              disabled={isSubmitting}
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default TestimonialForm
