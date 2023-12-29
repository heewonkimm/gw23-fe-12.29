import React, { useState } from 'react';

import Filter from '@/components/filter/Filter';

import { Table } from 'antd';

export default {
  title: 'Others/Filter',
  component: Filter,
  argTypes: {
    filterList: {
      description: `필터(조건) 버튼에 렌더링 될 값.`,
      type: 'Array',
    },
    selectedFilter: {
      description: '선택된 필터링 조건 값',
      type: 'String',
      defaultValue: {
        summary: 'All',
      },
    },
    onFilterChange: {
      action: 'onClickFilterChange',
      type: 'Function',
      description: `필터링 조건 변경 <br>filter button 클릭 이벤트`,
      onClick: { action: 'clicked' },
    },
    '-': {},
    dataSource: {
      type: 'Array',
      description: `Api에서 받아온 데이터. <br>각 페이지에 맞는 이름으로 설정`,
    },
    filteredData: {
      type: 'Array',
      description: 'dataSource를 필터링한 결과 데이터 저장',
    },
  },
};

const tableColumns = [
  {
    title: '',
    dataIndex: 'id',
  },
  {
    title: '조건',
    dataIndex: '조건',
  },
  {
    title: '내용',
    dataIndex: 'desc',
  },
];
export const Default = () => {
  const filterList = [
    { label: '전체', value: 'All' },
    { label: 'BXD', value: '조건1' },
    { label: '세컨즈팩토리', value: '조건2' },
  ];

  const [selectedFilter, setSelectedFilter] = useState('All');

  const onClickFilterChange = value => setSelectedFilter(value);

  return (
    <>
      <Filter
        filterList={filterList}
        selectedFilter={selectedFilter}
        onFilterChange={onClickFilterChange}
      />
    </>
  );
};

export const FilterTable = () => {
  const dataSource = [
    { id: 1, 조건: '조건2', desc: '내용내용1111' },
    { id: 2, 조건: '조건2', desc: '내용내용22' },
  ];
  const filterList = [
    { label: '전체', value: 'All' },
    { label: '조건1', value: '조건1' },
    { label: '조건2', value: '조건2' },
  ];

  const [selectedFilter, setSelectedFilter] = useState('All');

  const onClickFilterChange = value => setSelectedFilter(value);

  const filteredData =
    selectedFilter !== 'All'
      ? dataSource.filter(row => row.조건 === selectedFilter)
      : dataSource;

  return (
    <>
      <Filter
        filterList={filterList}
        selectedFilter={selectedFilter}
        onFilterChange={onClickFilterChange}
      />
      <Table
        bordered
        dataSource={filteredData}
        columns={tableColumns}
        pagination={false}
        rowKey={dataSource => dataSource.key}
        size="middle"
      />
    </>
  );
};
