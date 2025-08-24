# Points Calculator - 技术架构设计文档

## 技术架构概述
基于产品需求，设计一个现代化的Web应用架构，支持积分计算、SEO优化和后续功能扩展。

## 前端技术栈
### 核心框架
- **框架**: React 18
- **路由**: React Router v6
- **状态管理**: React Context + useReducer
- **UI组件库**: Tailwind CSS
- **构建工具**: Vite
- **响应式设计**: 移动端优先，桌面端适配

### UI设计风格
- **设计理念**: 苹果官网风格 - 极简主义、大量留白、清晰层次
- **视觉特点**: 优雅的动画效果、高质量的图标、注重用户体验
- **色彩方案**: 简洁的配色、适当的对比度、品牌一致性

### 技术选择理由
- **React**: 组件化开发，生态丰富，学习资源充足
- **Tailwind CSS**: 快速开发，响应式设计友好，支持苹果风格设计
- **Vite**: 开发体验好，构建速度快

## 后端架构
### BaaS服务
- **平台**: Supabase
- **数据库**: PostgreSQL
- **认证**: Supabase Auth
- **API**: Supabase REST API

### 选择理由
- **Supabase**: 开箱即用的后端服务，对React支持好
- **PostgreSQL**: 强大的关系型数据库，支持复杂查询

## 数据管理
### 数据输入方式
- 用户手动输入（初期）
- 兑换率管理：**存储到数据库**，便于管理和更新
- 数据源：公开数据源（初期）

### 数据库设计
#### 最小化表结构
1. **积分类型表** (point_types)
   ```sql
   - id (主键)
   - name (积分类型名称)
   - category (分类：游戏/航空/酒店)
   ```

2. **兑换率表** (exchange_rates)
   ```sql
   - id (主键)
   - point_type_id (关联积分类型)
   - currency (货币代码：USD/EUR/GBP等)
   - rate (兑换率：1积分=多少货币)
   ```

3. **用户积分表** (user_points) - 第四优先级
   ```sql
   - id (主键)
   - user_id (用户ID)
   - point_type_id (积分类型)
   - amount (积分数量)
   - currency (货币)
   - created_at (创建时间)
   ```

#### Steam积分兑换率调研
**注意**: Steam积分系统复杂，需要进一步调研具体兑换率
- Steam积分主要用于兑换Steam钱包余额
- 兑换率可能因地区、货币等因素变化
- 建议初期使用估算兑换率，后续根据实际数据调整

## 前端页面结构
### 树状结构设计
```
首页 (/)
├── Steam积分计算器 (/steam-calculator)
├── 游戏积分专区 (/gaming)
│   ├── PlayStation积分计算器 (/gaming/playstation)
│   ├── Xbox积分计算器 (/gaming/xbox)
│   └── Nintendo积分计算器 (/gaming/nintendo)
├── 航空积分专区 (/airlines)
│   ├── Delta积分计算器 (/airlines/delta)
│   ├── American积分计算器 (/airlines/american)
│   └── United积分计算器 (/airlines/united)
└── 酒店积分专区 (/hotels)
    ├── Marriott积分计算器 (/hotels/marriott)
    ├── Hilton积分计算器 (/hotels/hilton)
    └── IHG积分计算器 (/hotels/ihg)
```

### 页面功能设计
- **首页**: 落地页 + 所有积分类型快速入口
- **计算器页面**: 独立URL，专注单一积分类型计算
- **专区页面**: 导航页面，展示该类型下的所有计算器

## 代码管理
### 版本控制
- **平台**: GitHub
- **工作流**: Git Flow（主分支 + 开发分支 + 功能分支）
- **提交规范**: Conventional Commits（feat/fix/docs等）

### 协作管理
- **Issue管理**: GitHub Issues
- **代码审查**: Pull Request + Code Review
- **CI/CD**: GitHub Actions（自动测试和部署）

## 开发环境配置
### 开发工具
- **包管理器**: pnpm（推荐，速度快，稳定性好）
- **Node.js版本**: 18+ LTS
- **开发服务器**: Vite dev server + 热重载

### 代码质量
- **代码检查**: ESLint + Prettier
- **Git钩子**: Husky + lint-staged
- **代码规范**: 遵循React最佳实践

### 环境配置
- **API代理**: 配置Supabase API代理
- **环境变量**: 支持开发/生产环境配置
- **热重载**: 支持组件热更新

## 部署架构
### 开发环境
- 本地开发：Vite dev server
- 数据库：Supabase本地开发环境

### 生产环境
- 前端：Vercel/Netlify
- 后端：Supabase生产环境
- 域名：暂不考虑，使用平台提供的免费域名

## 性能优化
### 前端优化
- 代码分割（Code Splitting）
- 懒加载（Lazy Loading）
- 图片优化

### SEO优化
- 静态页面生成
- Meta标签管理
- 结构化数据

## 安全考虑
### 数据安全
- 用户输入验证
- XSS防护
- CSRF防护

### 认证安全
- JWT token管理
- 密码加密存储

---
*本文档将根据技术讨论结果持续更新*
