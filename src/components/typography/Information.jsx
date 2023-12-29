import styled from '@emotion/styled';

import { Typography } from 'antd';

const { Text } = Typography;

const Box = styled.div`
  margin-top: 1rem;
  border-radius: 1.2rem;
`;

const Title = styled(Text)`
  display: block;
  font-weight: 600;
  font-size: 1.4rem;
`;

const Description = styled(Text)`
  display: block;
  color: var(--greyscale-500-color);
  font-size: 1.4rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 2rem;
  font-size: 1.4rem;

  .ant-typography {
    font-size: 1.4rem;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0.7em;
    left: 0.8rem;
    transform: translateY(-50%);
    display: block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #000;
  }
`;

const GetTitle = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>;
};

const GetDescription = ({ children }) => {
  return <Description>{children}</Description>;
};

const GetList = ({ children }) => <List>{children}</List>;

const GetItem = ({ children }) => <ListItem>{children}</ListItem>;

const GetBox = ({ children }) => <Box>{children}</Box>;

export const Information = Object.assign(GetBox, {
  Title: GetTitle,
  Description: GetDescription,
  List: GetList,
  Item: GetItem,
});
