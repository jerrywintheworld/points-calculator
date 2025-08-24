import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// 声明全局gtag函数
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}

const GoogleAnalytics = () => {
  const location = useLocation()

  useEffect(() => {
    // 页面浏览追踪
    if (window.gtag) {
      window.gtag('config', 'G-31STL5TG7D', {
        page_path: location.pathname + location.search,
        page_title: document.title
      })
    }
  }, [location])

  // 自定义事件追踪函数
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      })
    }
  }

  // 计算器使用事件追踪
  const trackCalculatorUsage = (calculatorType: string, pointsAmount: number, currency: string) => {
    trackEvent('calculator_used', 'engagement', `${calculatorType}_${currency}`, pointsAmount)
  }

  // 页面浏览事件追踪
  const trackPageView = (pageName: string) => {
    trackEvent('page_view', 'navigation', pageName)
  }

  // 将追踪函数暴露到全局，供其他组件使用
  useEffect(() => {
    if (typeof window !== 'undefined') {
      ;(window as any).trackCalculatorUsage = trackCalculatorUsage
      ;(window as any).trackPageView = trackPageView
      ;(window as any).trackEvent = trackEvent
    }
  }, [])

  return null
}

export default GoogleAnalytics
