import dayjs from 'dayjs';

import { DatePicker } from 'antd';

DatePicker.displayName = 'DatePicker';
DatePicker.RangePicker.displayName = 'DatePicker.RangePicker';

DatePicker.defaultProps = {
  size: 'middle',
  picker: 'date',
  placement: 'bottomLeft',
};

export default {
  title: 'Inputs/DatePicker',
  component: DatePicker,
  argTypes: {
    defaultValue: {
      description: 'day.js 를 통해 입력',
    },
    placeholder: {
      control: 'text',
    },
    size: {
      control: 'select',
      defaultValue: {
        summary: 'middle',
      },
      options: ['small', 'middle', 'large'],
    },
    bordered: {
      description: '사용 안할 시 bordered={false}',
      defaultValue: {
        summary: 'true',
      },
    },
    picker: {
      control: 'select',
      options: ['date', 'week', 'month', 'quarter', 'year'],
      defaultValue: {
        summary: 'date',
      },
    },
    placement: {
      control: 'select',
      defaultValue: {
        summary: 'bottomLeft',
      },
      options: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
    },
    inputReadOnly: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    status: {
      control: 'select',
      options: ['warning', 'error'],
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
    placeholder: 'Select date',
    size: 'middle',
    placement: 'bottomLeft',
    inputReadOnly: false,
    disabled: false,
    picker: 'date',
  },
};

export const Default = {};

export const DefaultValue = () => {
  return (
    <DatePicker defaultValue={dayjs('2015-06-06', 'YYYY-MM-DD')}></DatePicker>
  );
};

export const Bordered = () => (
  <>
    <DatePicker></DatePicker>
    <DatePicker bordered={false}></DatePicker>
  </>
);

export const Size = {
  render: ({}) => (
    <>
      <DatePicker size="small"></DatePicker>
      <DatePicker></DatePicker>
      <DatePicker size="large"></DatePicker>
    </>
  ),
};

export const Placement = {
  render: ({}) => (
    <>
      <DatePicker placement="bottomLeft" />
      <DatePicker placement="bottomRight" />
      <DatePicker placement="topLeft" />
      <DatePicker placement="topRight" />
    </>
  ),
};

export const Status = {
  render: ({}) => (
    <>
      <DatePicker inputReadOnly></DatePicker>
      <DatePicker status="warning"></DatePicker>
      <DatePicker status="error"></DatePicker>
      <DatePicker disabled></DatePicker>
    </>
  ),
};

export const Picker = {
  render: ({}) => (
    <>
      <DatePicker picker="date" />
      <DatePicker picker="week" />
      <DatePicker picker="month" />
      <DatePicker picker="quarter" />
      <DatePicker picker="year" />
    </>
  ),
};

export const RangePicker = {
  render: ({}) => (
    <>
      <DatePicker.RangePicker />
    </>
  ),
};
