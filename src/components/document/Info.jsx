import styled from '@emotion/styled';

const Info = styled.dl`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  margin: 4rem 0;
  font-size: 2.2rem;
`;

const Item = styled.div`
  flex-basis: 33.33%;
  display: flex;
`;

const Title = styled.dt`
  flex-shrink: 1;
  text-align: justify;
  font-weight: 600;
`;

const Content = styled.dd`
  flex-grow: 1;
`;

Info.Item = Item;
Info.Title = Title;
Info.Content = Content;

export default Info;
