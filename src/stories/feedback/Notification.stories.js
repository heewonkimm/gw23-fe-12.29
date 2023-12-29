import React from 'react';

import { App, Button } from 'antd';

export default {
  title: 'Feedback/Notification',
  component: Button,
  argTypes: {},
  args: {},
};

export const Default = () => {
  const { notification } = App.useApp();

  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
      duration: 0, //기본값 4.5
    });
  };

  return (
    <>
      <Button onClick={openNotification}>Open the notification box</Button>
    </>
  );
};

export const Status = () => {
  const { notification } = App.useApp();

  const info = () => {
    notification.open({
      type: 'info',
      message: 'Information',
      description: 'Information description',
      duration: 0,
    });
  };

  const success = () => {
    notification.open({
      type: 'success',
      message: 'Success',
      description: 'Success description',
      duration: 0,
    });
  };

  const warning = () => {
    notification.open({
      type: 'warning',
      message: 'Warning',
      description: 'Warning description',
      duration: 0,
    });
  };

  const error = () => {
    notification.open({
      type: 'error',
      message: 'Error',
      description: 'Error description',
      duration: 0,
    });
  };

  return (
    <>
      <Button onClick={info}>Info notification</Button>
      <Button onClick={success}>Success notification</Button>
      <Button onClick={warning}>Warning notification</Button>
      <Button onClick={error}>Error notification</Button>
    </>
  );
};
