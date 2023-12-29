import React, { forwardRef } from 'react';

import ImageResize from 'quill-image-resize-module-react';
import ReactQuill, { Quill } from 'react-quill';

import 'react-quill/dist/quill.snow.css';

// Quill에 이미지 리사이즈 모듈을 등록
Quill.register('modules/imageResize', ImageResize);

// 툴바 옵션 정의
const toolbarOptions = [
  [{ header: '1' }, { header: '2' }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ size: ['small', false, 'large', 'huge'] }],
  [{ font: [] }],
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ script: 'sub' }, { script: 'super' }],
  [{ indent: '-1' }, { indent: '+1' }],
  [{ direction: 'rtl' }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
  ['link', 'image', 'video'],
  ['clean'],
];

// Quill 모듈 정의
const modules = {
  toolbar: toolbarOptions,
  clipboard: {
    matchVisual: false,
  },
  imageResize: {
    parchment: Quill.import('parchment'),
    modules: ['Resize', 'DisplaySize', 'Toolbar'],
  },
};

// Quill 에디터를 감싸는 ForwardRef 컴포넌트
// ReactQuill의 onChange 함수는 content, delta, source, editor를 인자로 전달합니다.
// content: 현재 에디터의 내용
// delta: 변경된 내용에 대한 Delta 객체
// source: 변경의 원인 (사용자 입력 또는 API 호출 등)
// editor: Quill 에디터의 인스턴스

const QuillEditor = forwardRef(({ onChange, ...props }, ref) => {
  console.log(props.className);
  return (
    <>
      <ReactQuill ref={ref} modules={modules} onChange={onChange} {...props} />
    </>
  );
});

QuillEditor.displayName = 'QuillEditor';

export default QuillEditor;
