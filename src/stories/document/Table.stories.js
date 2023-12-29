import Document from '@/components/document/Document';
import Table from '@/components/document/Table';

export default {
  title: 'Document/Table',
  component: Table,
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
      <Table align="center">
        <table>
          <caption>지출내역 테이블</caption>
          <colgroup>
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>항목</th>
              <th>항목</th>
              <th>항목</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>내용</td>
              <td>내용</td>
              <td>내용</td>
            </tr>
          </tbody>
        </table>
      </Table>
    );
  },
};
