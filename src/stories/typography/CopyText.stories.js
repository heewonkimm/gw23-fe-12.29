import CopyText from '@/components/typography/CopyText';

export default {
  title: 'Typography/CopyText',
  component: CopyText,
  argTypes: {
    children: {
      control: 'text',
    },
    text: {
      control: 'text',
      description: '복사할 실제 내용',
    },
  },
  args: {
    children: '내용',
  },
};

export const Default = {
  render: ({ text, children }) => {
    return <CopyText text={text}>{children}</CopyText>;
  },
};
