import Document from '@/components/document/Document';
import Paragraph from '@/components/document/Paragraph';

Paragraph.defaultProps = {
  align: 'left',
};

export default {
  title: 'Document/Paragraph',
  component: Paragraph,
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
    align: {
      control: 'select',
      defaultValue: {
        summary: 'left',
      },
      options: ['left', 'center', 'right'],
    },
  },
  args: {
    children: '내용',
    align: 'left',
  },
};

export const Default = {
  render: ({ children, ...props }) => {
    return <Paragraph {...props}>{children}</Paragraph>;
  },
};

export const Align = {
  render: ({ children, ...props }) => {
    return (
      <>
        <Paragraph {...props}>{children}</Paragraph>
        <Paragraph align="center" {...props}>
          {children}
        </Paragraph>
        <Paragraph align="right" {...props}>
          {children}
        </Paragraph>
      </>
    );
  },
};
