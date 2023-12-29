import styled from '@emotion/styled';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { App } from 'antd';

const Text = styled.span`
  vertical-align: baseline;
  cursor: pointer;
  text-decoration-line: underline;
  text-decoration-style: dashed;
  text-decoration-thickness: from-font;
  text-underline-offset: 2px;
`;

/*
  Options
  - children: string | number
  - text: string | number / 복사할 실제 텍스트
*/
const CopyText = ({ text, children }) => {
  const { message } = App.useApp();

  return (
    <CopyToClipboard
      onCopy={() => message.success('복사 되었습니다.')}
      text={text || children}
    >
      <Text>{children}</Text>
    </CopyToClipboard>
  );
};

export default CopyText;
