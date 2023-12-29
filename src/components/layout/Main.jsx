import styled from '@emotion/styled';

import { Layout as antLayout } from 'antd';

const Container = styled(antLayout.Content)`
  .ant-app & {
    // background-color: var(--greyscale-50-color);
  }
`;

const Wrap = styled.div`
  .ant-app & {
    display: flex;
    flex-wrap: wrap;
    column-gap: 3.2rem;
    box-sizing: border-box;
    width: 100%;
    max-width: 1920px;
    padding: 5rem 4rem 10rem;
    margin: 0 auto;

    &
      > :is(
        h1.ant-typography,
        h2.ant-typography,
        h3.ant-typography,
        h4.ant-typography,
        h5.ant-typography,
        h6.ant-typography,
        div.ant-typography
      ) {
      width: 100%;
    }
  }
`;

const Main = ({ children }) => {
  return (
    <Container className="common-main">
      <Wrap className="wrap">{children}</Wrap>
    </Container>
  );
};

export default Main;
