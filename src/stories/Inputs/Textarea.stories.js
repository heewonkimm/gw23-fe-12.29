import { Input } from 'antd';

Input.TextArea.displayName = 'Input.TextArea';

export default {
  title: 'Inputs/Input/Textarea',
  parameters: {
    docs: {
      description: {
        component:
          'Input/Text 의 하위 컴포넌트로 size, showCount, allowClear, status 등의 속성을 사용할 수 있다.',
      },
    },
  },
  component: Input.TextArea,
  argTypes: {
    rows: { control: 'number' },
    autoSize: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
  },
  args: {
    autoSize: false,
  },
};

export const Default = {};

export const AutoSize = {
  render: ({}) => (
    <>
      <Input.TextArea
        placeholder="Autosize height based on content lines"
        autoSize
      />
      <br />
      <br />
      <Input.TextArea
        placeholder="Autosize height with minimum and maximum number of lines"
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
    </>
  ),
};
