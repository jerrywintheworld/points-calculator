import React from 'react'

interface BackToTopProps {
  targetId: string
}

const BackToTop: React.FC<BackToTopProps> = ({ targetId }) => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href={`#${targetId}`}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 hover:scale-110 transform"
        title="Back to Top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </div>
  )
}

export default BackToTop
