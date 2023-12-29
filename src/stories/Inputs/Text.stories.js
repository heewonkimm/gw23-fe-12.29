import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

import { Input } from 'antd';

Input.defaultProps = {
  size: 'middle',
};

export default {
  title: 'Inputs/Input/Text',
  parameters: {
    docs: {
      description: {
        component:
          'Input 상위 컴포넌트로 아래 속성은 하위 컴포넌트인 password, search, textarea에도 적용된다.',
      },
    },
  },
  component: Input,
  argTypes: {
    placeholder: {
      control: 'text',
    },
    maxLength: {
      control: 'number',
    },
    size: {
      control: 'select',
      defaultValue: {
        summary: 'middle',
      },
      options: ['small', 'middle', 'large'],
    },
    status: {
      control: 'select',
      defaultValue: {
        summary: 'none',
      },
      options: ['error', 'warning'],
    },
    showCount: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    allowClear: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    readOnly: {
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
    placeholder: 'Placeholder',
    size: 'middle',
    showCount: false,
    allowClear: false,
    readOnly: false,
    disabled: false,
    status: 'default',
  },
};

export const Default = {
  render: ({ placeholder, ...props }) => (
    <Input placeholder={placeholder} {...props}></Input>
  ),
};

export const Size = {
  render: ({}) => (
    <>
      <Input size="small" placeholder="small" />
      <Input placeholder="middle" />
      <Input size="large" placeholder="large" />
    </>
  ),
};

export const Status = {
  render: ({}) => (
    <>
      <Input placeholder="readonly" defaultValue="readonly" readOnly />
      <Input placeholder="disabled" disabled />
      <Input placeholder="Warning" status="warning" />
      <Input placeholder="Error" status="error" />
    </>
  ),
};

export const Count = {
  render: ({}) => (
    <>
      <Input showCount maxLength={10} placeholder="showCount" />
    </>
  ),
};

export const Clear = {
  render: ({}) => (
    <>
      <Input placeholder="allowClear" defaultValue="allowClear" allowClear />
    </>
  ),
};

export const Affix = {
  render: ({}) => (
    <>
      <Input
        placeholder="prefix & suffix"
        prefix={<UserOutlined />}
        suffix={<InfoCircleOutlined />}
      />
    </>
  ),
};
