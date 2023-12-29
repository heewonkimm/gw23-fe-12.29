import React, { createContext, useState } from 'react';

import { ExclamationCircleOutlined } from '@ant-design/icons';

import { Button, Modal } from 'antd';

export default {
  title: 'Feedback/Modal',
  component: Modal,
  argTypes: {
    width: {
      control: 'number',
    },
  },
  args: {
    width: 520,
  },
};

export const Default = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={520}
        okText="닫기"
      >
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export const Confirm = () => {
  const confirm = () => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Confirm',
      okText: '확인',
      cancelText: '취소',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <>
      <Button onClick={confirm}>Confirm</Button>
    </>
  );
};

export const StatusUseStaticMethod = () => {
  const info = () => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      okText: '닫기',
    });
  };

  const success = () => {
    Modal.success({
      title: 'This is a success message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      okText: '닫기',
    });
  };

  const warning = () => {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
      okText: '닫기',
    });
  };

  const error = () => {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
      okText: '닫기',
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

export const StatusUseContext = () => {
  const ReachableContext = createContext(null);
  const UnreachableContext = createContext(null);
  const config = {
    title: 'Use Hook!',
    content: (
      <>
        <ReachableContext.Consumer>
          {name => `Reachable: ${name}!`}
        </ReachableContext.Consumer>
        <br />
        <UnreachableContext.Consumer>
          {name => `Unreachable: ${name}!`}
        </UnreachableContext.Consumer>
      </>
    ),
  };

  const [modal, contextHolder] = Modal.useModal();

  return (
    <ReachableContext.Provider value="Light">
      <Button
        onClick={async () => {
          const confirmed = await modal.confirm(config);
          console.log('Confirmed: ', confirmed);
        }}
      >
        Confirm
      </Button>
      <Button
        onClick={() => {
          modal.warning(config);
        }}
      >
        Warning
      </Button>
      <Button
        onClick={async () => {
          modal.info(config);
        }}
      >
        Info
      </Button>
      <Button
        onClick={async () => {
          modal.error(config);
        }}
      >
        Error
      </Button>
      {/* `contextHolder` should always be placed under the context you want to access */}
      {contextHolder}

      {/* Can not access this context since `contextHolder` is not in it */}
      <UnreachableContext.Provider value="Bamboo" />
    </ReachableContext.Provider>
  );
};
