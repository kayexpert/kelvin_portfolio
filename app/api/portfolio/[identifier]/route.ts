import { NextRequest, NextResponse } from 'next/server'
import { getLocale } from 'next-intl/server'

// const db = require('@/database.json')

export async function GET(request: NextRequest, { params }: any) {
    const locale = await getLocale()

    // Use dynamic import instead of require for async
    const db = await import(`@/messages/${locale}.json`)
    const { identifier } = await params

    // Convert object to entries, find by key
    const matchedProjectEntry = Object.entries(db.projects).find(
      ([key, _value]) => key === identifier
    )

    if (!matchedProjectEntry) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    const [id, project]:any = matchedProjectEntry
    return NextResponse.json({ id, ...project }, { status: 200 })
}
