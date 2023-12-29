import { Button, Result } from 'antd';

export default {
  title: 'Feedback/Result',
  component: Result,
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'error', 'info', 'warning', '404', '403', '500'],
      defaultValue: {
        summary: 'info',
      },
    },
    title: {
      control: 'text',
    },
    subTitle: {
      control: 'text',
    },
    extra: {},
    icon: {},
  },
  args: {
    title: 'title',
    subTitle: 'subTitle',
    status: 'info',
  },
};

export const Default = {};

export const Status = () => (
  <>
    <Result
      status="info"
      title="Info!"
      subTitle="subTitle"
      extra={[
        <Button type="primary" key="button1">
          button1
        </Button>,
        <Button key="button2">button2</Button>,
      ]}
    />
    <Result
      status="success"
      title="Success!"
      subTitle="subTitle"
      extra={[
        <Button type="primary" key="button1">
          button1
        </Button>,
        <Button key="button2">button2</Button>,
      ]}
    />
    <Result
      status="warning"
      title="Warning!"
      subTitle="subTitle"
      extra={[
        <Button type="primary" key="button1">
          button1
        </Button>,
        <Button key="button2">button2</Button>,
      ]}
    />
    <Result
      status="error"
      title="Error!"
      subTitle="subTitle"
      extra={[
        <Button type="primary" key="button1">
          button1
        </Button>,
        <Button key="button2">button2</Button>,
      ]}
    />
    <Result
      status="404"
      title="404"
      subTitle="Sorry, you are not authorized to access this page"
      extra={<Button type="primary">Back</Button>}
    />
  </>
);
