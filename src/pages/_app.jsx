import { useEffect } from 'react';

import { useRouter } from 'next/router';

import EmptyLayout from '@/components/EmptyLayout';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import Theme from '@/components/Theme';
import wrapper from '@/store';
import * as userActions from '@/store/modules/user';
import { getCookie } from 'cookies-next';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';

const emptyLayoutPages = ['/signIn'];

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isEmptyLayoutPage = emptyLayoutPages.includes(router.pathname);
  const isErrorPage = pageProps.statusCode;
  const isEmptyPage = isEmptyLayoutPage || isErrorPage;

  useEffect(() => {
    const initUser = () => {
      const token = getCookie('Authorization');

      if (!token && router.pathname !== '/signIn') {
        router.push('/signIn');
      } else {
        const userInfo = token && jwt_decode(token);

        dispatch(
          userActions.login({
            ...userInfo,
            isLoggedIn: true,
          }),
        );
      }
    };

    initUser();
  }, []);

  return (
    <>
      <Seo title={Component.title} />
      <Theme>
        {isEmptyPage ? (
          <EmptyLayout>
            <Component {...pageProps} />
          </EmptyLayout>
        ) : (
          <Layout props={[pageProps, router.pathname]}>
            <Component {...pageProps} />
          </Layout>
        )}
      </Theme>
    </>
  );
};

// withRedux HOC 로 컴포넌트 감싸기 -> 이제 각 페이지에서 getStaticProps, getServerSideProps 등 함수 내에서 스토어의 접근이 가능해짐
export default wrapper.withRedux(MyApp);
