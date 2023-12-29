import { Input } from 'antd';

Input.Password.displayName = 'Input.Password';

export default {
  title: 'Inputs/Input/Password',
  parameters: {
    docs: {
      description: {
        component:
          'Input/Text 의 하위 컴포넌트로 size, showCount, allowClear, status 등의 속성을 사용할 수 있다.',
      },
    },
  },
  component: Input.Password,
  argTypes: {
    visibilityToggle: {
      description: 'visibilityToggle={false}을 기본으로 사용',
    },
  },
  args: {},
};

export const Default = () => {
  return (
    <>
      <Input.Password visibilityToggle={false}></Input.Password>
    </>
  );
};

export const VisibilityToggle = () => (
  <>
    <Input.Password />
    <Input.Password visibilityToggle={false} />
  </>
);
