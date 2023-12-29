import { Button } from 'antd';

Button.defaultProps = {
  type: 'default',
  size: 'middle',
};

export default {
  title: 'Button/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
    },
    type: {
      control: 'select',
      defaultValue: {
        summary: 'default',
      },
      options: ['default', 'primary', 'dashed', 'text', 'link'],
    },
    size: {
      control: 'select',
      defaultValue: {
        summary: 'middle',
      },
      options: ['small', 'middle', 'large'],
    },
    disabled: {
      defaultValue: {
        summary: false,
      },
      control: 'boolean',
    },
    danger: {
      defaultValue: {
        summary: false,
      },
      control: 'boolean',
    },
    loading: {
      defaultValue: {
        summary: false,
      },
      control: 'boolean',
    },
  },
  args: {
    children: '버튼',
    type: 'default',
    size: 'middle',
    disabled: false,
    danger: false,
    loading: false,
  },
};

export const Default = {
  args: {},
  render: ({ children, ...props }) => <Button {...props}>{children}</Button>,
};

export const Type = {
  render: ({ children }) => (
    <>
      <Button>{children}</Button>
      <Button type="primary">{children}</Button>
      <Button type="secondary">{children}</Button>
      <Button type="dashed">{children}</Button>
      <Button type="text">{children}</Button>
      <Button type="link">{children}</Button>
    </>
  ),
};

export const Size = {
  render: ({ children }) => (
    <>
      <Button size="small">{children}</Button>
      <Button>{children}</Button>
      <Button size="large">{children}</Button>
    </>
  ),
};

export const Status = {
  render: ({ children }) => (
    <>
      <Button disabled>{children}</Button>
      <Button danger>{children}</Button>
      <Button loading>{children}</Button>
    </>
  ),
};
