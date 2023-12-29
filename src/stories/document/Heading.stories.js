import Document from '@/components/document/Document';
import Heading from '@/components/document/Heading';

Heading.defaultProps = {
  as: 'h1',
  align: 'left',
};

export default {
  title: 'Document/Heading',
  component: Heading,
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
    as: {
      control: 'select',
      defaultValue: {
        summary: 'h1',
      },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'heading level',
    },
    align: {
      control: 'select',
      defaultValue: {
        summary: 'left',
      },
      options: ['left', 'center', 'right'],
    },
  },
  args: {
    children: '제목',
    as: 'h1',
    align: 'left',
  },
};

export const Default = {
  render: ({ children, ...props }) => {
    return <Heading {...props}>{children}</Heading>;
  },
};

export const Level = {
  render: ({ children, ...props }) => {
    return (
      <>
        <Heading>{children}</Heading>
        <Heading as="h2">{children}</Heading>
        <Heading as="h3">{children}</Heading>
        <Heading as="h4">{children}</Heading>
        <Heading as="h5">{children}</Heading>
        <Heading as="h6">{children}</Heading>
      </>
    );
  },
};

export const Align = {
  render: ({ children, ...props }) => {
    return (
      <>
        <Heading>{children}</Heading>
        <Heading align="center">{children}</Heading>
        <Heading align="right">{children}</Heading>
      </>
    );
  },
};
