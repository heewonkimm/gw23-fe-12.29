import { useState } from 'react';

import QuillEditor from '@/components/inputs/Editor';
import DOMPurify from 'dompurify';

import { Button } from 'antd';

export default {
  title: 'Inputs/Editor',
  component: QuillEditor,
  parameters: {
    docs: {
      description: {
        component:
          'react-quill을 기반으로 하는 에디터 컴포넌트. 컴포넌트 사용 시, window 객체에 접근해야 하므로 next.js 환경에서는 dynamic import가 필수적이다.',
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: '문자열 HTML 콘텐츠, 다른 XSS 대응해야 함',
    },
    placeholder: {
      control: 'text',
      description: '자동연동 안됨',
    },
  },
  args: {
    value:
      '<p><strong>서식</strong> <em style="color: rgba(15, 23, 42, 0.88);">서식</em><span style="color: rgba(15, 23, 42, 0.88);"> </span><s style="color: rgba(15, 23, 42, 0.88);">서식</s><span style="color: rgba(15, 23, 42, 0.88);"> </span><s style="color: rgba(15, 23, 42, 0.88);">서식 </s><span style="color: rgb(230, 0, 0);">색상 </span><span style="background-color: rgb(230, 0, 0);">바탕색</span></p><p><span style="background-color: rgb(230, 0, 0);"></span></p><h1>heading1</h1><h2>heading2</h2><h3>heading3</h3><h4>heading4</h4><h5>heading5</h5><h6>heading6</h6><p><br></p><ol><li>리스트</li><li>리스트</li></ol><ul><li>리스트</li><li>리스트</li></ul><p><br></p>',
    placeholder: '내용을 입력해 주세요.',
  },
};

export const Default = ({ content, placeholder, ...props }) => {
  return <QuillEditor value={content} placeholder={placeholder} {...props} />;
};

export const Submit = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [puryfiedContent, setPuryfiedContent] = useState('');

  const onChangeEditor = (content, delta, source, editor) => {
    setHtmlContent(editor.getHTML());
  };

  const handleSubmit = () => {
    setPuryfiedContent(DOMPurify.sanitize(htmlContent));
  };

  return (
    <>
      <QuillEditor onChange={onChangeEditor}></QuillEditor>
      <Button style={{ marginTop: 10 }} onClick={handleSubmit}>
        제출 OR 결과보기
      </Button>
      <div
        style={{ marginTop: 10 }}
        dangerouslySetInnerHTML={{ __html: puryfiedContent }}
      />
    </>
  );
};
