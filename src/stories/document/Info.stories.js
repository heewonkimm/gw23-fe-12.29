import Document from '@/components/document/Document';
import Info from '@/components/document/Info';

export default {
  title: 'Document/Info',
  component: Info,
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
};

export const Default = {
  render: ({}) => {
    return (
      <Info>
        <Info.Item style={{ flexBasis: '33.33%' }}>
          <Info.Title>항목&nbsp;:&nbsp;</Info.Title>
          <Info.Content>내용</Info.Content>
        </Info.Item>
        <Info.Item style={{ flexBasis: '33.33%' }}>
          <Info.Title>항목&nbsp;:&nbsp;</Info.Title>
          <Info.Content>내용</Info.Content>
        </Info.Item>
        <Info.Item style={{ flexBasis: '33.33%' }}>
          <Info.Title>항목&nbsp;:&nbsp;</Info.Title>
          <Info.Content>내용</Info.Content>
        </Info.Item>
      </Info>
    );
  },
};
