import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import Sidebar from '@/components/layout/Sidebar';
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';

import { Layout as AntdLayout, Spin } from 'antd';

const styles = {
  wrapper: ({ isLoggedIn }) => css`
    .ant-app & {
      min-height: 100vh;
      transition: opacity 0.2s;
      opacity: ${isLoggedIn ? 1 : 0};
    }
  `,
  inner: ({ isSidebarCollapsed }) => css`
    .ant-app & {
      margin-left: ${isSidebarCollapsed ? '8rem' : '25rem'};
      transition: margin 0.2s;
    }
  `,
};

const Layout = ({ children }) => {
  const router = useRouter();
  const { isLoggedIn } = useSelector(state => state.user);

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const showLoading = () => {
      setIsLoading(true);
    };
    const hideLoading = () => {
      setIsLoading(false);
    };

    router.events.on('routeChangeStart', showLoading);
    router.events.on('routeChangeComplete', hideLoading);

    return () => {
      router.events.off('routeChangeStart', showLoading);
      router.events.off('routeChangeComplete', hideLoading);
    };
  });

  return (
    <Spin spinning={isLoading}>
      <AntdLayout
        hasSider
        className={`wrapper ${isSidebarCollapsed && 'is-sidebar-collapsed'}`}
        css={styles.wrapper({ isLoggedIn })}
      >
        <Sidebar
          isSidebarCollapsed={isSidebarCollapsed}
          setIsSidebarCollapsed={setIsSidebarCollapsed}
        />
        <AntdLayout
          isSidebarCollapsed={isSidebarCollapsed}
          css={styles.inner({ isSidebarCollapsed })}
          className="inner"
        >
          <Header />
          <Main>{children}</Main>
        </AntdLayout>
      </AntdLayout>
    </Spin>
  );
};

export default Layout;
