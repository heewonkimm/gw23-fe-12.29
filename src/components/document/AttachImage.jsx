import styled from '@emotion/styled';

const AttachImage = styled.img`
  width: auto;
  max-width: 100%;
  height: auto;
  & ~ img {
    margin-top: 10px;
  }

  @media print {
    break-after: page;

    & ~ img {
      break-before: page;
      margin-top: 0;
    }
  }
`;

export default AttachImage;
