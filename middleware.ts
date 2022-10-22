import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    let locale = 'us'
    if (request?.geo?.country !== undefined) {
        locale = request.geo.country.toLowerCase()
        if(locale == 'uk') { locale = 'gb' }
    }
    return NextResponse.redirect(new URL('/locale/' + locale, request.url))
}

export const config = {
  matcher: '/',
}
