import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import Section from '@/components/layout/Section';
import { $http } from '@/lib/api';
import dayjs from 'dayjs';
import { orderBy } from 'lodash';

import { Table } from 'antd';

const columns = [
  {
    title: '문서양식',
    dataIndex: 'type',
    width: '150px',
  },
  {
    title: '제목',
    dataIndex: 'title',
    width: 'auto',
    align: 'left',
    // render: (text, record) => (
    //   <Link href={`/cms/projectManage/write/${record.uid}`}>{text}</Link>
    // ),
  },
  {
    title: '신청자',
    dataIndex: 'memberName',
    width: '150px',
    align: 'center',
  },
  {
    title: '소속',
    dataIndex: 'memberDept',
    width: '150px',
    align: 'center',
  },
  {
    title: '기안일',
    dataIndex: 'createdDate',
    width: '150px',
    align: 'center',
  },
  {
    title: '진행상태',
    dataIndex: 'status',
    width: '150px',
    align: 'center',
  },
];

// 수정
const docType = {
  H06: '휴가출장계다다닫',
  C01: '기안서',
};

const docStatus = {
  proceeding: '진행',
  completed: '완료',
  rejected: '반려',
  temp: '임시저장',
};

export default function List() {
  const router = useRouter();
  const status = router.query.status;

  const [docsData, setDocsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await $http.get(
          `/apis/documents/${status}/approval-list`,
        );
        console.log(data);

        const list = data.body.map(row => {
          return {
            uid: row.uid,
            type: docType[row.type],
            title: row.title,
            memberName: row.memberName,
            memberDept: row.memberDept,
            createdDate: row.modifyDate
              ? dayjs(row.modifyDate).format('YYYY.MM.DD')
              : dayjs(row.createdDate).format('YYYY.MM.DD'),
            status: docStatus[row.status],
          };
        });
        setDocsData(orderBy(list, ['createdDate', 'year'], ['desc', 'desc']));
        console.log(status);
      } catch (error) {
        if (error.code === 403) {
          console.log('접근 권한이 없습니다.');
        }
      }
    };
    getData();
  }, [status]);

  return (
    <>
      <div
        style={{ width: '100%', marginBottom: '100px' }}
      >{`${status} 문서함`}</div>
      <Section>
        <div>검색결과 : 800건</div>
        <Table
          dataSource={docsData}
          columns={columns}
          // isLoading={isLoading}
          rowKey={docsData => docsData.uid}
          pagination={{
            pageSize: 10,
            position: ['bottomCenter'],
            showSizeChanger: false,
          }}
          // locale={{ emptyText: noAuthorize && <ErrorText /> }}
        />
      </Section>
    </>
  );
}

List.title = '요청 문서함 | 전자결재';
