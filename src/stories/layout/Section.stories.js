import Main from '@/components/layout/Main';
import Section from '@/components/layout/Section';

import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

Section.defaultProps = {
  last: false,
};

export default {
  title: 'Layout/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <Main>
        <Story />
      </Main>
    ),
  ],
  argTypes: {
    width: {
      control: { type: 'number' },
      description: 'number | string',
      defaultValue: {
        summary: 'none',
      },
    },
    last: {
      control: 'boolean',
      description: '행의 마지막 Section에 last속성 설정.',
      defaultValue: {
        summary: false,
      },
    },
  },
  args: {
    last: false,
  },
};

export const Default = {
  render: props => {
    return <Section {...props}></Section>;
  },
};

export const Types = {
  render: ({}) => {
    return (
      <>
        <Section last></Section>
        <Section></Section>
        <Section last></Section>
        <Section></Section>
        <Section></Section>
        <Section last></Section>
        <Section width={200}></Section>
        <Section last></Section>
        <Section width="60%"></Section>
        <Section last></Section>
      </>
    );
  },
};

export const UseCase = {
  render: ({}) => {
    return (
      <>
        <Title level={2}>Page Title</Title>
        <Paragraph>내용</Paragraph>
        <Section last>
          <Title level={3}>Title</Title>
          <Paragraph>내용</Paragraph>
          <Title level={4}>Sub Title</Title>
          <Paragraph>내용</Paragraph>
        </Section>
        <Section>
          <Title level={3}>Title</Title>
          <Paragraph>내용</Paragraph>
          <Title level={4}>Sub Title</Title>
          <Paragraph>내용</Paragraph>
        </Section>
        <Section last>
          <Title level={3}>Title</Title>
          <Paragraph>내용</Paragraph>
          <Title level={4}>Sub Title</Title>
          <Paragraph>내용</Paragraph>
        </Section>
      </>
    );
  },
};
