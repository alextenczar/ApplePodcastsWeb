import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

interface Info {
    country: String; 
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  console.log(request.geo)
  let country = 'test'
  if (request?.geo?.country !== undefined && request?.geo?.country !== null) {
      country = request?.geo?.country
  }
  response.headers.set('X-Country', country);
  return response
}
