import Link from 'next/link';

import styled from '@emotion/styled';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Typography } from 'antd';

const { Title } = Typography;

const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: $vh;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const SignItem = styled.div`
  &.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
  &.bg {
    display: none;
  }
  .caution {
    margin-top: 2rem;
    font-size: 1.4rem;
  }
  @media (min-width: 1024px) {
    &.content {
      width: 30%;
      min-width: 40rem;
      flex-shrink: 1;
      background: none;
    }
    &.bg {
      display: block;
      flex-grow: 1;
      background: url('/img/bg-signin.webp') 50% 0 no-repeat;
      background-size: cover;
    }
    .caution {
      font-size: 1.6rem;
    }
    .brand .logo {
      transform: scale(1);
    }
  }
`;

const LoginButton = styled.div`
  margin-top: 2rem;
  display: inline-flex;
  gap: 5px;
  align-items: center;
  height: 4rem;
  font-size: 1.4rem;
  padding: 0 3rem;
  border-radius: 0.8rem;
  color: #fff;
  background: #061178;
  box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  .logo-img {
    overflow: hidden;
    width: 159px;
    height: 0;
    max-height: 0;
    padding-top: 41px;
    margin: 0;
    mix-blend-mode: difference;
    background: url('/img/logo.png') 0 0 no-repeat;
    background-size: cover;
    transform: scale(0.9);
  }
`;

const SignIn = () => {
  return (
    <SignContainer>
      <SignItem className="content">
        <Logo className="brand">
          <div className="logo-img">adnstyle</div>
          <Title level={5} style={{ marginTop: 0 }}>
            groupware
          </Title>
        </Logo>
        <LoginButton className="ant-btn">
          <Link href={process.env.NEXT_PUBLIC_AUTH_URL} className="btn-login">
            <FontAwesomeIcon icon={faGoogle} />
            <span style={{ color: '#fff' }}>그룹웨어 로그인</span>
          </Link>
        </LoginButton>
      </SignItem>
      <SignItem className="bg"></SignItem>
    </SignContainer>
  );
};

SignIn.title = 'Sign in';

export default SignIn;
