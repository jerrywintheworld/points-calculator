-- 评论表
CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  name TEXT NOT NULL,
  avatar TEXT DEFAULT '💎',
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  content TEXT NOT NULL,
  category TEXT CHECK (category IN ('gaming', 'airline', 'hotel', 'general')),
  points_amount TEXT,
  calculated_value TEXT,
  likes_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 评论点赞表
CREATE TABLE testimonial_likes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  testimonial_id UUID REFERENCES testimonials(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(testimonial_id, user_id)
);

-- 创建索引
CREATE INDEX idx_testimonials_user_id ON testimonials(user_id);
CREATE INDEX idx_testimonials_category ON testimonials(category);
CREATE INDEX idx_testimonials_created_at ON testimonials(created_at DESC);
CREATE INDEX idx_testimonial_likes_testimonial_id ON testimonial_likes(testimonial_id);
CREATE INDEX idx_testimonial_likes_user_id ON testimonial_likes(user_id);

-- 启用RLS (Row Level Security)
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonial_likes ENABLE ROW LEVEL SECURITY;

-- 创建策略
-- 任何人都可以查看评论
CREATE POLICY "Anyone can view testimonials" ON testimonials
  FOR SELECT USING (true);

-- 登录用户可以创建评论
CREATE POLICY "Authenticated users can create testimonials" ON testimonials
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 用户只能更新自己的评论
CREATE POLICY "Users can update own testimonials" ON testimonials
  FOR UPDATE USING (auth.uid() = user_id);

-- 用户只能删除自己的评论
CREATE POLICY "Users can delete own testimonials" ON testimonials
  FOR DELETE USING (auth.uid() = user_id);

-- 点赞表策略
CREATE POLICY "Anyone can view likes" ON testimonial_likes
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create likes" ON testimonial_likes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own likes" ON testimonial_likes
  FOR DELETE USING (auth.uid() = user_id);
