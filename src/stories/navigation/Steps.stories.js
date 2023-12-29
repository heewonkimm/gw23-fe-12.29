import { Steps } from 'antd';

Steps.defaultProps = {
  current: 0,
  size: 'default',
  direction: 'horizontal',
  type: 'default',
  status: 'process',
};

export default {
  title: 'Navigation/Steps',
  component: Steps,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    current: {
      control: 'number',
      defaultValue: {
        summary: 0,
      },
    },
    size: {
      control: 'select',
      options: ['small', 'default'],
      defaultValue: {
        summary: 'default',
      },
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      defaultValue: {
        summary: 'horizontal',
      },
    },
    type: {
      control: 'select',
      options: ['default', 'navigation', 'inline'],
      defaultValue: {
        summary: 'default',
      },
    },
    progressDot: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    status: {
      control: 'select',
      options: ['wait', 'process', 'finish', 'error'],
      defaultValue: {
        summary: 'process',
      },
    },
    items: {
      control: 'object',
    },
  },
  args: {
    current: 0,
    items: [
      { title: 'Finished', description: 'description' },
      {
        title: 'In Progress',
        description: 'description',
        subTitle: 'Left 00:00:08',
      },
      { title: 'Waiting', description: 'description' },
    ],
    direction: 'horizontal',
    size: 'default',
    type: 'default',
    progressDot: false,
    status: 'process',
  },
};

export const Default = {};

export const Size = {
  render: ({ items }) => (
    <>
      <Steps items={items}></Steps>
      <br />
      <br />
      <Steps size="small" items={items}></Steps>
    </>
  ),
};

export const Direction = {
  render: ({ items }) => (
    <>
      <Steps items={items}></Steps>
      <br />
      <br />
      <Steps direction="vertical" items={items}></Steps>
    </>
  ),
};

export const Type = {
  render: ({ items }) => (
    <>
      <Steps items={items}></Steps>
      <br />
      <br />
      <Steps type="navigation" items={items}></Steps>
      <br />
      <br />
      <Steps type="inline" items={items}></Steps>
    </>
  ),
};

export const ProgressDot = {
  render: ({ items }) => (
    <>
      <Steps items={items}></Steps>
      <br />
      <br />
      <Steps progressDot items={items}></Steps>
    </>
  ),
};

export const Status = {
  render: ({ items }) => (
    <>
      <Steps items={items}></Steps>
      <br />
      <br />
      <Steps status="wait" items={items}></Steps>
      <br />
      <br />
      <Steps status="finish" items={items}></Steps>
      <br />
      <br />
      <Steps status="error" items={items}></Steps>
    </>
  ),
};
