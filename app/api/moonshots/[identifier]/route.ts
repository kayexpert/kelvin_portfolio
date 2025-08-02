import { NextRequest, NextResponse } from 'next/server'
import { getLocale } from 'next-intl/server'

export async function GET(request: NextRequest, { params }: any) {
    const locale = await getLocale();

    const db = await import(`@/messages/${locale}.json`)
    const { identifier } = await params

    const moonshot = Object.entries(db.projects).find(([key, _value]) => key === identifier)

    if (!moonshot) {
        return NextResponse.json({ error: 'Moonshot not found' }, { status: 404 });
    }
    const [id, project]:any = moonshot;
    return NextResponse.json({ id, ...project }, { status: 200 })
}

