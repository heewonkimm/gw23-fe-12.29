import { useEffect, useState } from 'react';

import ButtonGroup from '@/components/button/ButtonGroup';
import Section from '@/components/layout/Section';
import VacationDoc from '@/features/documents/VacationDoc';
import usePrint from '@/hooks/usePrint';
import { $http } from '@/lib/api';

import { Button, Typography } from 'antd';

const { Title } = Typography;

const View = ({ query }) => {
  const { uid } = query;
  const [docData, setDocData] = useState({});
  const { onPrint, targetClassName } = usePrint();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await $http.get(`/apis/documents/${uid}`);

        setDocData({
          content: data.body.content,
          memberName: data.body.memberName,
          memberDept: data.body.memberDept,
          memberRank: data.body.memberRank,
          createdDate: data.body.createdDate,
          status: data.body.status,
          approvalList: data.body.approvalList,
          acquirerAgreedList: data.body.acquirerAgreedList,
        });
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Title>기안신청</Title>
      <Section last>
        <VacationDoc {...docData} className={targetClassName} />
        <ButtonGroup block justify="center">
          <Button type="primary" size="large" onClick={onPrint}>
            인쇄하기
          </Button>
        </ButtonGroup>
      </Section>
      <Section last></Section>
      <Section></Section>
      <Section last></Section>
    </>
  );
};

export const getServerSideProps = async context => ({
  props: {
    query: {
      uid: context.query.uid || null,
    },
  },
});

View.title = '전자결재';

export default View;
