import { App, Button } from 'antd';

export default {
  title: 'Feedback/Message',
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  component: Button,
  argTypes: {},
  args: {},
};

export const Default = () => {
  const { message } = App.useApp();

  const openMessage = () => {
    message.open({
      content: `This is message`,
      duration: 1.5, // 기본값
    });
  };

  return (
    <>
      <Button onClick={openMessage}>Display normal message</Button>
    </>
  );
};

export const Status = () => {
  const { message } = App.useApp();

  const info = () => {
    message.open({
      type: 'info',
      content: 'This is a information message',
    });
  };

  const success = () => {
    message.open({
      type: 'success',
      content: 'This is a success message',
    });
  };

  const error = () => {
    message.open({
      type: 'error',
      content: 'This is an error message',
    });
  };

  const warning = () => {
    message.open({
      type: 'warning',
      content: 'This is a warning message',
    });
  };

  return (
    <>
      <Button onClick={info}>Info</Button>
      <Button onClick={success}>Success</Button>
      <Button onClick={error}>Error</Button>
      <Button onClick={warning}>Warning</Button>
    </>
  );
};

export const Loading = () => {
  const { message } = App.useApp();

  const success = () => {
    message
      .open({
        type: 'loading',
        content: 'Action in progress..',
        duration: 2.5,
      })
      .then(() => message.success('Loading finished', 2.5));
  };

  return (
    <>
      <Button onClick={success}>Display sequential messages</Button>
    </>
  );
};
