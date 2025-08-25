import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Get current directory in ES module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Website configuration
const BASE_URL = 'https://www.points-calculator.com'
const CURRENT_DATE = new Date().toISOString().split('T')[0]

// Site structure
const siteStructure = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly',
    description: 'Homepage'
  },
  {
    path: '/gaming',
    priority: '0.9',
    changefreq: 'weekly',
    description: 'Gaming Points Section'
  },
  {
    path: '/gaming/steam',
    priority: '0.9',
    changefreq: 'weekly',
    description: 'Steam Calculator'
  },
  {
    path: '/gaming/playstation',
    priority: '0.8',
    changefreq: 'weekly',
    description: 'PlayStation Calculator'
  },
  {
    path: '/gaming/xbox',
    priority: '0.8',
    changefreq: 'weekly',
    description: 'Xbox Calculator'
  },
  {
    path: '/gaming/nintendo',
    priority: '0.8',
    changefreq: 'weekly',
    description: 'Nintendo Calculator'
  },
  {
    path: '/gaming/epic',
    priority: '0.8',
    changefreq: 'weekly',
    description: 'Epic Calculator'
  },
  {
    path: '/airlines',
    priority: '0.8',
    changefreq: 'weekly',
    description: 'Airlines Section'
  },
  {
    path: '/airlines/delta',
    priority: '0.7',
    changefreq: 'weekly',
    description: 'Delta Airlines Calculator'
  },
  {
    path: '/airlines/american',
    priority: '0.7',
    changefreq: 'weekly',
    description: 'American Airlines Calculator'
  },
  {
    path: '/airlines/united',
    priority: '0.7',
    changefreq: 'weekly',
    description: 'United Airlines Calculator'
  },
  {
    path: '/airlines/british',
    priority: '0.7',
    changefreq: 'weekly',
    description: 'British Airways Calculator'
  },
  {
    path: '/airlines/lufthansa',
    priority: '0.7',
    changefreq: 'weekly',
    description: 'Lufthansa Calculator'
  },
  {
    path: '/hotels',
    priority: '0.8',
    changefreq: 'weekly',
    description: 'Hotels Section'
  },
  {
    path: '/hotels/marriott',
    priority: '0.7',
    changefreq: 'weekly',
    description: 'Marriott Calculator'
  },
  {
    path: '/hotels/hilton',
    priority: '0.7',
    changefreq: 'weekly',
    description: 'Hilton Calculator'
  },
  {
    path: '/hotels/ihg',
    priority: '0.7',
    changefreq: 'weekly',
    description: 'IHG Calculator'
  },
  {
    path: '/hotels/hyatt',
    priority: '0.7',
    changefreq: 'weekly',
    description: 'Hyatt Calculator'
  },
  {
    path: '/hotels/choice',
    priority: '0.7',
    changefreq: 'weekly',
    description: 'Choice Hotels Calculator'
  },
  {
    path: '/about',
    priority: '0.6',
    changefreq: 'monthly',
    description: 'About Us Page'
  },
  {
    path: '/philosophy',
    priority: '0.6',
    changefreq: 'monthly',
    description: 'Service Philosophy Page'
  },

  {
    path: '/privacy',
    priority: '0.4',
    changefreq: 'monthly',
    description: 'Privacy Policy Page'
  },
  {
    path: '/terms',
    priority: '0.4',
    changefreq: 'monthly',
    description: 'Terms of Service Page'
  }
]

// Generate sitemap XML
function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  
  siteStructure.forEach(page => {
    xml += `  <!-- ${page.description} -->\n`
    xml += `  <url>\n`
    xml += `    <loc>${BASE_URL}${page.path}</loc>\n`
    xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`
    xml += `    <priority>${page.priority}</priority>\n`
    xml += `  </url>\n`
  })
  
  xml += '</urlset>'
  
  return xml
}

// Write sitemap to public directory
function writeSitemap() {
  const sitemapContent = generateSitemap()
  const publicDir = path.join(__dirname, '..', 'public')
  const sitemapPath = path.join(publicDir, 'sitemap.xml')
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8')
  console.log('✅ Sitemap generated successfully!')
  console.log(`📁 Location: ${sitemapPath}`)
  console.log(`🔗 URL: ${BASE_URL}/sitemap.xml`)
}

// Run the script
writeSitemap()
