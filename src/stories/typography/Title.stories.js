import { Typography } from 'antd';

const { Title } = Typography;

Title.displayName = 'Title';

Title.defaultProps = {
  level: 1,
};

export default {
  title: 'Typography/Title',
  component: Title,
  argTypes: {
    children: {
      control: 'text',
    },
    level: {
      control: {
        type: 'number',
        min: 1,
        max: 5,
      },
      defaultValue: {
        summary: 1,
      },
    },
    size: {
      control: { type: 'number', min: 16 },
      defaultValue: {
        summary: 'none',
      },
    },
  },
  args: {
    children: 'Lorem Ipsum',
    level: 1,
  },
};

export const Default = {
  args: {},
  render: ({ size, children, ...props }) => {
    return (
      <Title style={size >= 0 && { fontSize: size }} {...props}>
        {children}
      </Title>
    );
  },
};

export const Level = {
  render: ({ children }) => (
    <>
      <Title>{children}</Title>
      <Title level={2}>{children}</Title>
      <Title level={3}>{children}</Title>
      <Title level={4}>{children}</Title>
      <Title level={5}>{children}</Title>
    </>
  ),
};
