import styled from '@emotion/styled';

const Heading = styled.h1`
  margin: 1em 0 0.4em;
  font-weight: 600;
  line-height: 1.3;
  text-align: ${({ align }) => align};

  &:first-child {
    margin-top: 0;
  }

  h1& {
    font-size: 4.6rem;
  }
  h2& {
    font-size: 3rem;
  }
  h3& {
    font-size: 2.6rem;
  }
  h4& {
    font-size: 2.2rem;
  }
  h5& {
    font-size: 1.8rem;
  }
  h6& {
    font-size: 1.6rem;
  }
`;

export default Heading;
