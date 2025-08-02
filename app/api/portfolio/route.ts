import { NextRequest, NextResponse } from 'next/server'
import { getLocale } from 'next-intl/server'

export async function GET(request: NextRequest) {
  try {
    const locale = await getLocale()
    let portfolioProjects = []

    try {
      // Use dynamic import instead of require for async
      const db = await import(`@/messages/${locale}.json`)
      
      if (db && db.projects) {
        portfolioProjects = Object.entries(db.projects)
          .filter(([_, project]: any) => project.type === 'portfolio')
          .map(([id, project]: any) => ({ id, ...project }))
      }
    } catch (importError) {
      console.error('Error importing locale file:', importError)
      // Fallback to default English data if locale file not found
      const defaultDb = await import('@/messages/en.json')
      if (defaultDb && defaultDb.projects) {
        portfolioProjects = Object.entries(defaultDb.projects)
          .filter(([_, project]: any) => project.type === 'portfolio')
          .map(([id, project]: any) => ({ id, ...project }))
      }
    }

    return NextResponse.json(portfolioProjects, { status: 200 })
  } catch (error) {
    console.error('Error fetching portfolio projects:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

