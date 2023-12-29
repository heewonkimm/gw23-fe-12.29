import styled from '@emotion/styled';

const Box = styled.div`
  display: ${({ block }) => (block ? 'inline-flex' : 'flex')};
  width: ${({ block }) => (block ? '100%' : 'auto')};
  flex-wrap: wrap;
  flex-direction: ${({ direction, reverse }) =>
    reverse ? `${direction}-reverse` : direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};

  ${({ noMargin }) =>
    !noMargin &&
    `&:has(.ant-btn) {
        margin-top: 2rem;

        &:has(.ant-btn-sm) {
          margin-top: 10rem;
        }
        &:has(.ant-btn-lg) {
          margin-top: 4rem;
        }
    }`};

  ${({ noGap }) =>
    !noGap &&
    `&:has(.ant-btn) {
    gap: 1.2rem;

      &:has(.ant-btn-sm) {
        gap: .6rem;
      }
      &:has(.ant-btn-lg) {
        gap: 2.4rem;
      }
    }`};

  ${({ block }) =>
    block &&
    `.ant-btn-block {
      flex: 1;
    }}`}
`;

/*
  Options
  - direction: 'row' | 'column'
  - reverse: boolean
  - justify: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'
  - align: 'flex-start' | 'center' | 'flex-end'
  - noGap: boolean
  - noMargin: boolean / 위 간격
  - block: boolean / 전체 너비 늘림
*/
const ButtonGroup = ({
  direction = 'row',
  reverse = false,
  justify = 'flex-start',
  align = 'flex-start',
  noGap = false,
  noMargin = false,
  block = false,
  children,
  ...props
}) => {
  return (
    <Box
      className="button-group"
      direction={direction}
      reverse={reverse}
      justify={justify}
      align={align}
      noGap={noGap}
      noMargin={noMargin}
      block={block}
      {...props}
    >
      {children}
    </Box>
  );
};

export default ButtonGroup;
