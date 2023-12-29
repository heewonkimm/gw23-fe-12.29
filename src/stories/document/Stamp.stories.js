import Document from '@/components/document/Document';
import Stamp from '@/components/document/Stamp';

Stamp.defaultProps = {
  size: 'medium',
  color: 'gray',
};

export default {
  title: 'Document/Stamp',
  component: Stamp,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <Document>
        <Story />
      </Document>
    ),
  ],
  argTypes: {
    size: {
      control: 'select',
      defaultValue: {
        summary: 'medium',
      },
      options: ['small', 'medium'],
    },
    color: {
      control: 'select',
      defaultValue: {
        summary: 'gray',
      },
      options: ['gray', 'black', 'red', 'green', 'blue'],
    },
  },
  args: {
    text: '내용',
    size: 'medium',
    color: 'gray',
  },
};

export const Default = {
  render: ({ text, ...props }) => {
    return <Stamp {...props}>{text}</Stamp>;
  },
};

export const Size = {
  render: ({ text }) => {
    return (
      <>
        <Stamp>{text}</Stamp>
        <Stamp size="small">{text}</Stamp>
      </>
    );
  },
};

export const Color = {
  render: ({ text }) => {
    return (
      <>
        <Stamp>{text}</Stamp>
        <Stamp color="black">{text}</Stamp>
        <Stamp color="red">{text}</Stamp>
        <Stamp color="green">{text}</Stamp>
        <Stamp color="blue">{text}</Stamp>
      </>
    );
  },
};
