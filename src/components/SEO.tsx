



import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  canonical?: string
}

const SEO = ({ title, description, canonical }: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description)

    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]')
      if (!canonicalLink) {
        canonicalLink = document.createElement('link')
        canonicalLink.setAttribute('rel', 'canonical')
        document.head.appendChild(canonicalLink)
      }
      canonicalLink.setAttribute('href', canonical)
    }

    // Cleanup function
    return () => {
      // Reset to default title when component unmounts
      document.title = 'Points Calculator - The Most Comprehensive Points Calculator Platform'
    }
  }, [title, description, canonical])

  return null
}

export default SEO
