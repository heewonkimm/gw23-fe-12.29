import { Input } from 'antd';

Input.Search.displayName = 'Input.Search';

export default {
  title: 'Inputs/Input/Search',
  parameters: {
    docs: {
      description: {
        component:
          'Input/Text 의 하위 컴포넌트로 size, showCount, allowClear, status 등의 속성을 사용할 수 있다.',
      },
    },
  },
  component: Input.Search,
  argTypes: {
    enterButton: {
      defaultValue: {
        summary: false,
      },
      control: 'boolean',
    },
  },
  args: {
    enterButton: false,
  },
};

export const Default = {
  args: {},
};

export const EnterButton = {
  render: () => (
    <>
      <Input.Search />
      <Input.Search enterButton />
    </>
  ),
};

export const EnterButtonText = {
  render: ({}) => (
    <>
      <Input.Search enterButton="Search" />
    </>
  ),
};
