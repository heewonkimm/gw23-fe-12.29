import Stamp from '@/components/document/Stamp';
import styled from '@emotion/styled';

const Approval = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const Item = styled.dl`
  display: flex;
  height: 16rem;
  border: 1px solid var(--black-color);
`;

const Title = styled.dt`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  background-color: var(--gray-color);
  border-right: 1px solid var(--black-color);
  writing-mode: vertical-rl;
  text-orientation: upright;
  text-align: center;
`;

const Content = styled.dd`
  display: flex;
  flex-direction: column;
  width: 9rem;

  & + & {
    border-left: 1px solid var(--black-color);
  }
`;

const Tit = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  text-align: center;
  border-bottom: 1px solid var(--black-color);
`;

const Con = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Name = styled.span`
  flex-shrink: 0;
  font-weight: 600;
  text-align: center;

  ${Stamp} + & {
    margin-top: 0.4rem;
  }
`;

const Date = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  text-align: center;
  font-size: 1.5rem;
  border-top: 1px solid var(--black-color);
`;

Approval.Item = Item;
Approval.Title = Title;
Approval.Content = Content;
Approval.Tit = Tit;
Approval.Con = Con;
Approval.Name = Name;
Approval.Date = Date;

export default Approval;
