import { NextResponse } from 'next/server';

import jwt_decode from 'jwt-decode';

const authPages = [
  { path: '/edms/admin', role: ['10', '99'] },
  { path: '/hrms/admin', role: ['10', '99'] },
  { path: '/hrms/profile', role: ['10', '99'] },
  { path: '/hrms/holiday', role: ['10', '99'] },
  { path: '/cms', role: ['50', '99'] },
];

export const middleware = request => {
  const currentPath = request.nextUrl.pathname;
  const currentPageAuthRole = authPages
    .filter(({ path }) => currentPath.includes(path))
    .at(0);

  if (currentPageAuthRole) {
    const userInfo = jwt_decode(request.cookies.get('Authorization').value);
    const userAuthRole = userInfo.authRole.split(',');
    const hasAuthRole = currentPageAuthRole.role.some(pageCode =>
      userAuthRole.some(userCode => pageCode === userCode),
    );

    if (!hasAuthRole) {
      const errorUrl = new URL('/_error', request.url);

      errorUrl.searchParams.set('statusCode', '403');

      return NextResponse.redirect(errorUrl);
    }
  }

  return NextResponse.next();
};
