import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const response = NextResponse.next()
    let locale = 'us'
    if (request?.geo?.country !== undefined) {
        locale = request.geo.country
    }
    console.log(locale)
    console.log(request)
    response.cookies.set('locale', locale)
    return response
}
