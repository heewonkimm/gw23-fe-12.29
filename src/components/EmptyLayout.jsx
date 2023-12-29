import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { Space, Spin } from 'antd';

const EmptyLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setIsLoading(true);
    });
    router.events.on('routeChangeComplete', () => {
      setIsLoading(false);
    });
  });

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {isLoading && (
        <Space direction="vertical" className="loading-wrap">
          <Space>
            <Spin tip="Loading" size="large">
              <div className="content" />
            </Spin>
          </Space>
        </Space>
      )}
      {children}
    </Space>
  );
};

export default EmptyLayout;
