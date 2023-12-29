import AttachImage from '@/components/document/AttachImage';
import Document from '@/components/document/Document';

export default {
  title: 'Document/AttachImage',
  component: AttachImage,
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
      <AttachImage
        src="https://cdn.dkilbo.com/news/photo/201802/136648_99445_3621.jpg"
        alt="영수증"
      />
    );
  },
};
