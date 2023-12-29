import { useState } from 'react';

import { Alert, Button, Spin, Switch } from 'antd';

Spin.defaultProps = {
  size: 'default',
};

export default {
  title: 'Feedback/Spin',
  component: Spin,
  argTypes: {
    tip: {
      control: 'text',
      description: 'Spin 컴포넌트가 자식 노드를 가지고 있을 때 사용',
    },
    delay: {
      control: 'number',
    },
    fullscreen: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      defaultValue: {
        summary: 'default',
      },
    },
  },
  args: {
    tip: 'Loading',
    fullscreen: false,
    size: 'default',
  },
};

export const Default = ({ ...props }) => (
  <Spin {...props}>
    <div style={{ padding: 50 }} className="content" />
  </Spin>
);

export const Size = {
  render: ({}) => (
    <>
      <Spin size="small"></Spin>
      <br />
      <br />
      <Spin></Spin>
      <br />
      <br />
      <Spin size="large"></Spin>
    </>
  ),
};

export const Fullscreen = () => {
  const [spinning, setSpinning] = useState(false);

  const showLoader = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
    }, 3000);
  };

  return (
    <>
      <Button onClick={showLoader}>Show fullscreen for 3s</Button>
      <Spin spinning={spinning} fullscreen />
    </>
  );
};

export const Delay = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Spin spinning={loading} delay={500}>
        <Alert
          type="info"
          message="Alert message title"
          description="Further details about the context of this alert."
        />
      </Spin>
      <div>
        Loading state：
        <Switch checked={loading} onChange={setLoading} />
      </div>
    </>
  );
};
