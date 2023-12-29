import styled from '@emotion/styled';

const Box = styled.section`
  .ant-app & {
    box-sizing: border-box;
    ${props =>
      typeof props.width === 'number'
        ? `width: ${props.width}px; flex-shrink: 0;`
        : typeof props.width === 'string'
          ? `width: ${props.width}; flex-shrink: 0;`
          : 'width: auto; flex-grow: 1;'};
    max-width: 100%;
    padding: 4rem;
    background-color: var(--white-color);
    border-radius: 1.8rem;
    box-shadow: 2px 0px 40px 0px rgba(0, 0, 0, 0.02);
  }
`;

const Breaker = styled.div`
  width: 100%;

  &:not(:last-of-type) {
    margin: 1.6rem 0;
  }
`;

const Section = ({ width, last, children }) => {
  return (
    <>
      <Box className="section" width={width}>
        {children}
      </Box>
      {last && <Breaker className="breaker" />}
    </>
  );
};

export default Section;
