import { Switch } from 'antd';

Switch.defaultProps = {
  size: 'default',
};

export default {
  title: 'Inputs/Switch',
  component: Switch,
  argTypes: {
    checkedChildren: {
      control: 'text',
    },
    unCheckedChildren: {
      control: 'text',
    },
    size: {
      control: 'select',
      defaultValue: {
        summary: 'default',
      },
      options: ['small', 'default'],
    },
    loading: {
      control: 'boolean',
      defaultValue: {
        summary: false,
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
    checkedChildren: '',
    unCheckedChildren: '',
    size: 'default',
    loading: false,
    disabled: false,
  },
};

export const Default = {
  args: {},
};

export const Size = {
  render: () => (
    <>
      <Switch size="small" key="small" />
      <Switch key="default" />
    </>
  ),
};

export const Status = {
  render: () => (
    <>
      <Switch checked></Switch>
      <Switch loading></Switch>
      <Switch disabled></Switch>
    </>
  ),
};
