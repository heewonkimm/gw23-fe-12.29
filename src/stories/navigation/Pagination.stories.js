import { Pagination } from 'antd';

Pagination.defaultProps = {
  defaultCurrent: 1,
  total: 0,
  size: 'default',
};

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
  argTypes: {
    defaultCurrent: {
      control: 'number',
      defaultValue: {
        summary: 1,
      },
    },
    total: {
      control: 'number',
      defaultValue: {
        summary: 0,
      },
    },
    disabled: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    pageSize: {
      control: 'number',
      description: '값이 있으면 pageSize select 작동 안됨',
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      defaultValue: {
        summary: 'default',
      },
    },
    simple: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
  },
  args: {
    defaultCurrent: 3,
    total: 100,
    size: 'default',
    simple: false,
    disabled: false,
  },
};

export const Default = {};

export const Size = {
  render: ({}) => (
    <>
      <Pagination total={100} size="small"></Pagination>
      <br />
      <Pagination total={100}></Pagination>
    </>
  ),
};

export const Simple = {
  render: ({}) => <Pagination pageSize={1} total={100} simple></Pagination>,
};
