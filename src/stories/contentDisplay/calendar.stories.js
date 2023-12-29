import { useState } from 'react';

import dayjs from 'dayjs';

import { Alert, Calendar } from 'antd';

Calendar.defaultProps = {
  mode: 'month',
};

export default {
  title: 'ContentDisplay/Calendar',
  component: Calendar,
  argTypes: {
    mode: {
      control: 'select',
      options: ['month', 'year'],
      defaultValue: {
        summary: 'month',
      },
    },
  },
  args: {
    mode: 'month',
  },
};

export const Default = {};

export const OnSelect = () => {
  const [value, setValue] = useState(() => dayjs());
  const [selectedValue, setSelectedValue] = useState(() => dayjs());

  const onSelect = newValue => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = newValue => {
    setValue(newValue);
  };

  return (
    <>
      <Alert
        message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`}
      />
      <Calendar
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
      />
    </>
  );
};

export const DisableDate = () => {
  const [value, setValue] = useState(() => dayjs());

  const onSelect = newValue => {
    setValue(newValue);
  };

  const onPanelChange = newValue => {
    setValue(newValue);
  };

  const disabledDate = current => {
    const currentDate = dayjs();
    const customDates = [
      currentDate.add(1, 'day').format('YYYY-MM-DD'),
      currentDate.add(2, 'day').format('YYYY-MM-DD'),
      '2023-12-25',
    ];

    return customDates.some(date => dayjs(current).isSame(date, 'day'));
  };

  return (
    <>
      <Calendar
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        disabledDate={disabledDate}
      />
    </>
  );
};
