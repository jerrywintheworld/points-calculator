export interface Testimonial {
  id: string
  user_id: string
  name: string
  avatar: string
  rating: number
  content: string
  category: 'gaming' | 'airline' | 'hotel' | 'general'
  points_amount?: string
  calculated_value?: string
  likes_count: number
  created_at: string
  updated_at: string
  user_liked?: boolean
}

export interface CreateTestimonialData {
  name: string
  avatar: string
  rating: number
  content: string
  category: 'gaming' | 'airline' | 'hotel' | 'general'
  points_amount?: string
  calculated_value?: string
}

export interface TestimonialFormData {
  name: string
  avatar: string
  rating: number
  content: string
  category: 'gaming' | 'airline' | 'hotel' | 'general'
  points_amount: string
  calculated_value: string
}
