import { useState } from 'react';

import { Select, Typography } from 'antd';

const { Paragraph } = Typography;

export default function MemberChangeModals({ list, addMember }) {
  const [selectMember, setSelectMember] = useState({});

  const onChange = async (_, row) => {
    setSelectMember(row);
    addMember(row.value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <>
      <Select
        options={list}
        showSearch
        placeholder="인원을 선택 해 주세요"
        optionFilterProp="children"
        filterOption={filterOption}
        onChange={onChange}
        style={{ width: 453, marginTop: '2rem' }}
      />
      {selectMember.name && (
        <Paragraph
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '2rem 0 0',
          }}
        >
          {`결재 테스트 용도로`}
          <strong
            style={{ margin: '0 .5rem' }}
          >{`${selectMember.name} ${selectMember.rankName}`}</strong>
          {`정보로 변경 합니다`}
        </Paragraph>
      )}
    </>
  );
}
