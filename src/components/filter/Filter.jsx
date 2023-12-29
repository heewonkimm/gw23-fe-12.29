import React from 'react';

import ButtonGroup from '@/components/button/ButtonGroup';

import { Button } from 'antd';

const Filter = ({ filterList, selectedFilter, onFilterChange }) => {
  const onClickFilter = value => {
    onFilterChange(value);
  };

  return (
    <>
      <ButtonGroup style={{ margin: '2rem 0' }}>
        {filterList.map(filter => (
          <Button
            key={filter.value}
            onClick={() => onClickFilter(filter.value)}
            value={filter.value}
            type={filter.value === selectedFilter ? 'primary' : 'default'}
            size="small"
          >
            {filter.label}
          </Button>
        ))}
      </ButtonGroup>
      {/* 필요한 곳에 따라서 filteredData를 렌더링하세요. */}
    </>
  );
};

export default Filter;

/* filter 컴포넌트 사용 예시


  #컴포넌트 외부작성 -------------------------------------------------------
    const filterList = [ //필터 버튼 렌더링 값 & 필터 조건 값
      { label: '전체', value: 'All' },
      { label: 'BXD', value: 'BXD' },
      { label: 'DCD', value: 'DCD' },
      { label: 'NXC', value: 'NXC' },
      { label: '세컨즈팩토리', value: '세컨즈팩토리' },
      { label: '경영지원', value: '경영전략' },
    ];

  #컴포넌트 내부 작성 -------------------------------------------------------
    const [selectedFilter, setSelectedFilter] = useState('All'); //선택된 필터 버튼

    //필터링 조건 클릭 이벤트
    const onClickFilterChange = value => setSelectedFilter(value);

    const filteredVacations =
      selectedFilter !== 'All'
        ? [필터링해줄(api에서 받아온) 데이터].filter(row => row.deptName === selectedFilter) // row.[filter조건]
        : [필터링해줄(api에서 받아온) 데이터];

    <Filter
      dataList={filteredVacations} //필터링해줄(api에서 받아온) 데이터
      filterList={filterList} 
      selectedFilter={selectedFilter} 
      onFilterChange={onClickFilterChange} 
    />

*/
