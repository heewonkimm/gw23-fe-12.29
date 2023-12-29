import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import ButtonGroup from '@/components/button/ButtonGroup';
import CopyText from '@/components/typography/CopyText';
import styled from '@emotion/styled';

import { Button } from 'antd';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  padding: 6rem 2rem;
  background-color: var(--greyscale-50-color);
`;
const Inner = styled.div``;
const Title = styled.h1`
  line-height: 1.2;
  font-size: 20rem;
  font-weight: 800;
  text-align: center;
`;
const SubTitle = styled.p`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;
const Description = styled.p`
  margin-top: 1rem;
  color: var(--greyscale-500-color);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;
const Contact = styled.p`
  margin-top: 3rem;
  color: var(--greyscale-400-color);
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
`;

const getErrorMessage = statusCode => {
  switch (statusCode) {
    case 403:
      return '접근 권한이 없습니다.';
    case 404:
      return '웹페이지를 찾을 수 없습니다.';
    case 500:
      return '서버에 오류가 발생 했습니다.';
    default:
      return '알 수 없는 오류가 발생 했습니다.';
  }
};

const Error = appProps => {
  const searchParams = useSearchParams();
  const statusCodeQuery = Number(searchParams.get('statusCode'));
  const statusCode = statusCodeQuery || appProps.statusCode;

  return (
    <Container>
      <Inner>
        <Title>{statusCode}</Title>
        <SubTitle>{getErrorMessage(statusCode)}</SubTitle>
        {statusCode !== 404 && (
          <>
            <Description>담당자에게 문의 부탁드립니다.</Description>
            <Contact>
              세컨즈팩토리 박승완 차장
              <br />(<CopyText>02-2015-3331</CopyText> /{' '}
              <CopyText>hammer0130@adnstyle.com</CopyText>)
            </Contact>
          </>
        )}
        <ButtonGroup justify="center">
          <Link href="/">
            <Button type="primary" size="large">
              홈으로
            </Button>
          </Link>
        </ButtonGroup>
      </Inner>
    </Container>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default Error;
