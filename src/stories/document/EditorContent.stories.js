import Document from '@/components/document/Document';
import EditorContent from '@/components/document/EditorContent';

export default {
  title: 'Document/EditorContent',
  component: EditorContent,
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
      <EditorContent>
        <h1>제목1</h1>
        <h2>제목2</h2>
        <h3>제목3</h3>
        <h4>제목4</h4>
        <h5>제목5</h5>
        <h6>제목6</h6>
        <p>내용</p>
        <a href="https://adnstyle.com/">링크</a>
        <ul>
          <li>목록</li>
          <li>목록</li>
          <li>목록</li>
        </ul>
        <ol>
          <li>목록</li>
          <li>목록</li>
          <li>목록</li>
        </ol>
        <dl>
          <dt>제목</dt>
          <dd>내용</dd>
          <dt>제목</dt>
          <dd>내용</dd>
          <dt>제목</dt>
          <dd>내용</dd>
        </dl>
        <img
          src="https://scl350600-scl350600.ktcdn.co.kr/adnstyle/main/adnstyle.webp"
          alt="이미지"
        />
        <img
          src="https://scl350600-scl350600.ktcdn.co.kr/adnstyle/main/bg-nxc.webp"
          alt="이미지"
        />
      </EditorContent>
    );
  },
};
