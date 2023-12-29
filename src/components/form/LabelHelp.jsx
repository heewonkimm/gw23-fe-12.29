import styled from '@emotion/styled';

const Text = styled.span`
  margin-left: 0.5rem;
  font-size: 1.4rem;
  font-weight: 500;
`;
const Strong = styled.span`
  font-weight: 600;
  vertical-align: baseline;
`;
Strong.displayName = 'LabelHelp.Strong';

const Help = ({ children }) => {
  return <Text>{children}</Text>;
};
Help.displayName = 'LabelHelp';

const LabelHelp = Object.assign(Help, {
  Strong,
});

export default LabelHelp;
