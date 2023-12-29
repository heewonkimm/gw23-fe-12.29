import { Typography } from 'antd';

const { Paragraph } = Typography;

Paragraph.displayName = 'Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    children: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger'],
    },
    copyable: {
      control: 'boolean',
    },
    delete: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    editable: {
      control: 'boolean',
    },
    ellipsis: {
      control: 'boolean',
    },
    mark: {
      control: 'boolean',
    },
    strong: {
      control: 'boolean',
    },
    italic: {
      control: 'boolean',
    },
    underline: {
      control: 'boolean',
    },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, ut nam aut modi inventore necessitatibus consequuntur esse ratione quaerat architecto officia in mollitia sequi commodi ducimus, repudiandae, veniam libero odio.',
  },
};

export const Default = {
  args: {},
  render: ({ children, ...props }) => (
    <>
      <Paragraph {...props}>{children}</Paragraph>
    </>
  ),
};

export const Type = {
  render: ({ children, ...props }) => (
    <>
      <Paragraph {...props}>{children}</Paragraph>
    </>
  ),
};
