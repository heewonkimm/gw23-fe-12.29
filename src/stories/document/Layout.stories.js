import Document from '@/components/document/Document';
import Heading from '@/components/document/Heading';

export default {
  title: 'Document/Layout',
  component: Document,
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
      <Document>
        <Document.Inner>
          <Document.Header>
            <Heading align="center">문서명</Heading>
          </Document.Header>
          <Document.Main>내용</Document.Main>
        </Document.Inner>
      </Document>
    );
  },
};
