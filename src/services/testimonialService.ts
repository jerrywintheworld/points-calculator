import { supabase } from '../lib/supabase'
import { Testimonial, CreateTestimonialData } from '../types/testimonial'

export const testimonialService = {
  // 获取所有评论
  async getTestimonials(): Promise<Testimonial[]> {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching testimonials:', error)
      return []
    }

    return data || []
  },

  // 创建评论
  async createTestimonial(testimonialData: CreateTestimonialData): Promise<Testimonial | null> {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      throw new Error('User not authenticated')
    }

    const { data, error } = await supabase
      .from('testimonials')
      .insert({
        user_id: user.id,
        ...testimonialData
      })
      .select()
      .single()

    if (error) {
      console.error('Error creating testimonial:', error)
      throw error
    }

    return data
  },

  // 删除评论
  async deleteTestimonial(id: string): Promise<void> {
    const { error } = await supabase
      .from('testimonials')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting testimonial:', error)
      throw error
    }
  },

  // 检查用户今日评论数量
  async getUserDailyTestimonialCount(): Promise<number> {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return 0
    }

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const { count, error } = await supabase
      .from('testimonials')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .gte('created_at', today.toISOString())

    if (error) {
      console.error('Error checking daily testimonial count:', error)
      return 0
    }

    return count || 0
  }
}
