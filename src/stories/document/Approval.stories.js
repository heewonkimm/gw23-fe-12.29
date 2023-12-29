import Approval from '@/components/document/Approval';
import Document from '@/components/document/Document';

export default {
  title: 'Document/Approval',
  component: Approval,
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
      <Approval>
        <Approval.Item style={{ marginRight: 'auto' }}>
          <Approval.Title>부서</Approval.Title>
          <Approval.Content>
            <Approval.Tit>직책</Approval.Tit>
            <Approval.Con>
              <Approval.Name>이름</Approval.Name>
            </Approval.Con>
            <Approval.Date>날짜</Approval.Date>
          </Approval.Content>
        </Approval.Item>
        <Approval.Item>
          <Approval.Title>부서</Approval.Title>
          <Approval.Content>
            <Approval.Tit>직책</Approval.Tit>
            <Approval.Con>
              <Approval.Name>이름</Approval.Name>
            </Approval.Con>
            <Approval.Date>날짜</Approval.Date>
          </Approval.Content>
        </Approval.Item>
      </Approval>
    );
  },
};
