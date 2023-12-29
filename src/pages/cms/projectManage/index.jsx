import { useEffect, useState } from 'react';

import Link from 'next/link';

import ButtonGroup from '@/components/button/ButtonGroup';
import Section from '@/components/layout/Section';
import { $http } from '@/lib/api';
import dayjs from 'dayjs';
import { orderBy } from 'lodash-core';

import { Button, Empty, Table, Typography } from 'antd';

const { Title } = Typography;

const columns = [
  {
    title: '프로젝트명',
    dataIndex: 'title',
    width: 'auto',
    render: (text, record) => (
      <Link href={`/cms/projectManage/write/${record.uid}`}>{text}</Link>
    ),
  },
  {
    title: '제작년월',
    dataIndex: 'year',
    width: '150px',
    align: 'center',
  },
  {
    title: '전시여부',
    dataIndex: 'viewYn',
    width: '150px',
    align: 'center',
  },
  {
    title: '상세페이지여부',
    dataIndex: 'detailYn',
    width: '150px',
    align: 'center',
  },
  {
    title: '작성일자',
    dataIndex: 'createdDate',
    width: '150px',
    align: 'center',
  },
];

const ErrorText = () => {
  return (
    <Empty
      description={
        <div className="contactus">
          <span>
            접근 권한이 없습니다.
            <br />
            관리자에게 문의 해주세요.
          </span>
          <div className="info">
            세컨즈팩토리 박승완 차장
            <br />
            02-2015-3331 / hammer0130@adnstyle.com
          </div>
        </div>
      }
    />
  );
};

const List = () => {
  const [projectData, setProjectData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noAuthorize, setNoAuthorize] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await $http.get('/apis/projects-view');

        const list = data.body.map(row => {
          return {
            uid: row.uid,
            title: row.title,
            year: row.year,
            viewYn: row.viewYn,
            detailYn: row.detailYn,
            createdDate: row.modifyDate
              ? dayjs(row.modifyDate).format('YYYY.MM.DD')
              : dayjs(row.createdDate).format('YYYY.MM.DD'),
          };
        });

        setProjectData(
          orderBy(list, ['createdDate', 'year'], ['desc', 'desc']),
        );

        setIsLoading(false);
      } catch (error) {
        if (error.code === 403) {
          console.log('접근 권한이 없습니다.');
          setNoAuthorize(true);
        }

        console.error(error);
      }
    };

    setIsLoading(true);
    getData();
  }, []);

  return (
    <>
      <Title level={2}>프로젝트 전시 관리</Title>
      <Section>
        <Table
          dataSource={projectData}
          columns={columns}
          isLoading={isLoading}
          rowKey={projectData => projectData.uid}
          pagination={{
            pageSize: 10,
            position: ['bottomCenter'],
            showSizeChanger: false,
          }}
          size="large"
          locale={{ emptyText: noAuthorize && <ErrorText /> }}
        />
        <ButtonGroup block justify="flex-end">
          <Link href="/cms/projectManage/write">
            <Button type="primary" size="large">
              프로젝트 등록
            </Button>
          </Link>
        </ButtonGroup>
      </Section>
    </>
  );
};

List.title = '홈페이지 관리';

export default List;
