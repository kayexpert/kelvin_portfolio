import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
   const result_data = {}
    return NextResponse.json(result_data, { status: 200 })
}