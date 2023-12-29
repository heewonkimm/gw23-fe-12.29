import styled from '@emotion/styled';

const Paragraph = styled.p`
  margin: 0.4em 0;
  font-weight: 400;
  line-height: 1.5;
  text-align: ${({ align }) => align};
`;

export default Paragraph;
