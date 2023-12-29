import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';

import { Segmented } from 'antd';

Segmented.defaultProps = {
  size: 'middle',
};

export default {
  title: 'Others/Segmented',
  component: Segmented,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    options: {
      control: 'object',
    },
    disabled: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    block: {
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
  },
  args: {
    options: [
      { label: 'Daily', value: 'Daily' },
      { label: 'Weekly', value: 'Weekly' },
      { label: 'Monthly', value: 'Monthly' },
      { label: 'Quarterly', value: 'Quarterly' },
      { label: 'Yearly', value: 'Yearly' },
    ],
    block: false,
    size: 'middle',
    disabled: false,
  },
};

export const Default = {};

export const Block = {
  render: ({ options }) => (
    <>
      <Segmented block options={options} />
    </>
  ),
};

export const Size = {
  render: ({ options }) => (
    <>
      <Segmented size="small" options={options} />
      <br />
      <br />
      <Segmented options={options} />
      <br />
      <br />
      <Segmented size="large" options={options} />
    </>
  ),
};

export const Status = () => {
  const disabledOptions = [
    { label: 'Daily', value: 'Daily' },
    { label: 'Weekly', value: 'Weekly', disabled: true },
    { label: 'Monthly', value: 'Monthly' },
    { label: 'Quarterly', value: 'Quarterly', disabled: true },
    { label: 'Yearly', value: 'Yearly' },
  ];
  return (
    <>
      <Segmented disabled options={disabledOptions} />
      <br />
      <br />
      <Segmented options={disabledOptions} />
    </>
  );
};

export const Icon = () => {
  const optionsWithIcon = [
    {
      label: 'List',
      value: 'List',
      icon: <BarsOutlined />,
    },
    {
      label: 'Kanban',
      value: 'Kanban',
      icon: <AppstoreOutlined />,
    },
    {
      value: 'List',
      icon: <BarsOutlined />,
    },
    {
      value: 'Kanban',
      icon: <AppstoreOutlined />,
    },
  ];

  return (
    <>
      <Segmented options={optionsWithIcon} />
    </>
  );
};
