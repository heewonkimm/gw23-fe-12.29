import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request) {
  console.log('middleware!!');
  // 요청 헤더에서 로그인 여부를 확인할 수 있도록 쿠키에 접근
  const token = request.cookies.get('Authorization');

  // 로그인 상태가 아니면 Redirection
  if (!token) {
    return NextResponse.redirect(new URL(`/sign-in`, request.url));
  }

  // 로그인 상태면 원래 요청한 경로로 이동한다.
  // return NextRequest.next();
}

// 매칭 url 정의
export const config = {
  matcher: ['/', '/cms', '/cms/:path*'],
};
