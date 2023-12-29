import dayjs from 'dayjs';

import { TimePicker } from 'antd';

TimePicker.defaultProps = {
  size: 'middle',
};

export default {
  title: 'Inputs/TimePicker',
  component: TimePicker,
  argTypes: {
    defaultValue: {
      description: 'day.js 를 통해 입력',
    },
    placeholder: {
      control: 'text',
    },
    hourStep: {
      control: 'number',
      defaultValue: {
        summary: 1,
      },
    },
    minuteStep: {
      control: 'number',
      defaultValue: {
        summary: 1,
      },
    },
    secondStep: {
      control: 'number',
      defaultValue: {
        summary: 1,
      },
    },
    showNow: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      defaultValue: {
        summary: 'middle',
      },
    },
    bordered: {
      description: '사용 안할 시 bordered={false}',
      defaultValue: {
        summary: 'true',
      },
    },
    status: {
      control: 'select',
      options: ['warning', 'error', 'success', 'validating'],
      defaultValue: {
        summary: 'none',
      },
    },
    disabled: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
  },
  args: {
    placeholder: 'Select time',
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
    showNow: false,
    size: 'middle',
    disabled: false,
  },
};

export const Default = {};

export const DefaultValue = () => (
  <TimePicker defaultValue={dayjs('11:45:00', 'HH:mm:ss')}></TimePicker>
);

export const Bordred = () => (
  <>
    <TimePicker />
    <TimePicker bordered={false} />
  </>
);

export const Size = {
  render: ({}) => (
    <>
      <TimePicker size="small" />
      <TimePicker />
      <TimePicker size="large" />
    </>
  ),
};

export const Steps = {
  render: ({}) => <TimePicker minuteStep={15} secondStep={10} hourStep={2} />,
};

export const Status = {
  render: ({}) => (
    <>
      <TimePicker status="warning" />
      <TimePicker status="error" />
      <TimePicker disabled />
    </>
  ),
};
