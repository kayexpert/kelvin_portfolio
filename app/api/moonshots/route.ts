import { NextRequest, NextResponse } from 'next/server'
import { getLocale } from 'next-intl/server'

export async function GET(request: NextRequest) {
    try {
        const locale = await getLocale()
        let moonshots = []

        try {
            const db = await import(`@/messages/${locale}.json`)
            
            if (db && db.projects) {
              moonshots = Object.entries(db.projects)
                .filter(([_, project]: any) => project.type === 'moonshots')
                .map(([id, project]: any) => ({ id, ...project }))
            }
          } catch (importError) {
            console.error('Error importing locale file:', importError)
            // Fallback to default English data if locale file not found
            const defaultDb = await import('@/messages/en.json')
            if (defaultDb && defaultDb.projects) {
              moonshots = Object.entries(defaultDb.projects)
                .filter(([_, project]: any) => project.type === 'moonshots')
                .map(([id, project]: any) => ({ id, ...project }))
            }
          }

        return NextResponse.json(moonshots, { status: 200 })
    } catch (error) {
        console.error('Error fetching moonshots projects:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
