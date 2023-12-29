import { useEffect, useState } from 'react';

import Link from 'next/link';

import Filter from '@/components/filter/Filter';
import Section from '@/components/layout/Section';
import { $http } from '@/lib/api';
// import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { orderBy } from 'lodash-core';

import { Empty, Table, Typography } from 'antd';

const { Title } = Typography;

const careerLevelText = {
  100: '등록전',
  10: '초급',
  20: '중급',
  30: '고급',
  40: '특급',
};

const carrerCount = value => {
  const today = dayjs().format('YYYYMM');
  const gap = dayjs(today).unix() - dayjs(dayjs(value).format('YYYYMM')).unix();
  const calMonth = gap / 60 / 60 / 24 / 30;
  const year = Math.floor(calMonth / 12);
  const month = Math.floor(calMonth % 12);

  return year > 0
    ? `${year}년 ${month}개월`
    : month > 0
      ? `${month}개월`
      : '등록전';
};

const columns = [
  {
    title: '이름',
    dataIndex: 'memName',
    width: 'auto',
    align: 'center',
    render: (text, record) => (
      <Link
        href={`/hrms/profile/${record.memberUid}`}
        style={{ textDecoration: 'underline' }}
      >
        {text}
      </Link>
    ),
  },
  {
    title: '소속',
    dataIndex: 'dept',
    width: '14%',
    align: 'center',
  },
  {
    title: '직급',
    dataIndex: 'rank',
    width: '14%',
    align: 'center',
  },
  {
    title: '직무',
    dataIndex: 'jobFamily',
    width: '14%',
    align: 'center',
  },
  {
    title: '경력',
    dataIndex: 'careerStartDate',
    width: '14%',
    align: 'center',
    render: (_, record) => <span>{carrerCount(record.careerStartDate)}</span>,
  },
  {
    title: '등급',
    dataIndex: 'careerLevel',
    width: '14%',
    align: 'center',
    render: (_, record) => <span>{careerLevelText[record.careerLevel]}</span>,
  },
  {
    title: '등록일',
    dataIndex: 'createdDate',
    width: '14%',
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

// const Button = styled.button`
//   background-color: ${({ isActive }) => (isActive ? '#1D4ED8' : '#fff')};
// `;

export default function List() {
  const [profileData, setProfileData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noAuthorize, setNoAuthorize] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterList = [
    { label: '전체', value: 'All' },
    { label: 'BXD', value: 'BXD' },
    { label: 'DCD', value: 'DCD' },
    { label: '세컨즈팩토리', value: '세컨즈팩토리' },
    { label: '경영전략', value: '경영전략' },
  ];

  const onClickFilterChange = value => {
    console.log(value);
    setSelectedFilter(value);
  };

  const filteredData =
    selectedFilter !== 'All'
      ? profileData.filter(row => row.dept === selectedFilter)
      : profileData;
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await $http.get('/apis/profiles/manager');

        const list =
          data &&
          data.body.map(row => {
            return {
              memberUid: row.memberUid,
              memName: row.memName,
              dept: row.dept,
              rank: row.rank,
              jobFamily: row.jobFamily,
              careerLevel: row.careerLevel ? row.careerLevel : 100,
              careerStartDate: row.careerStartDate
                ? row.careerStartDate
                : '등록전',
              createdDate: row.createdDate
                ? dayjs(row.createdDate).format('YYYY-MM-DD')
                : '등록전',
            };
          });

        setProfileData(orderBy(list), ['createdDate'], ['desc']);

        setIsLoading(false);
      } catch (error) {
        if (error.code === 403) {
          console.log('접근 권한이 없습니다.');
          setNoAuthorize(true);
        }

        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Title level={2}>프로필 목록</Title>
      <Section>
        <Filter
          filterList={filterList}
          selectedFilter={selectedFilter}
          onFilterChange={onClickFilterChange}
        />

        <Table
          dataSource={filteredData}
          columns={columns}
          isLoading={isLoading}
          rowKey={profileData => profileData.memberUid}
          pagination={false}
          size="middle"
          locale={{ emptyText: noAuthorize && <ErrorText /> }}
          style={{ marginBottom: '2rem' }}
        />
      </Section>
    </>
  );
}

List.title = '임직원 프로필 목록 | 프로필 관리';
