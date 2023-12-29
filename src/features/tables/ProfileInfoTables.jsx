import styled from '@emotion/styled';

import { Table } from 'antd';

const SmallText = styled.span`
  font-size: 12px;
`;

const rankInfoColumn = [
  {
    title: '',
    dataIndex: 'key',
    width: '10%',
    align: 'center',
    render: text => <SmallText>{text}</SmallText>,
  },
  {
    title: <span style={{ fontSize: 12 }}>{'박사'}</span>,
    dataIndex: 'year1',
    width: '10%',
    align: 'center',
    render: text => <SmallText>{text}</SmallText>,
  },
  {
    title: <span style={{ fontSize: 12 }}>{'석사'}</span>,
    dataIndex: 'year2',
    width: '10%',
    align: 'center',
    render: text => <SmallText>{text}</SmallText>,
  },
  {
    title: <span style={{ fontSize: 12 }}>{'학사'}</span>,
    dataIndex: 'year3',
    width: '10%',
    align: 'center',
    render: text => <SmallText>{text}</SmallText>,
  },
  {
    title: <span style={{ fontSize: 12 }}>{'전문대졸'}</span>,
    dataIndex: 'year4',
    width: '10%',
    align: 'center',
    render: text => <SmallText>{text}</SmallText>,
  },
  {
    title: <span style={{ fontSize: 12 }}>{'고졸'}</span>,
    dataIndex: 'year5',
    width: '10%',
    align: 'center',
    render: text => <SmallText>{text}</SmallText>,
  },
  {
    title: <span style={{ fontSize: 12 }}>{'기사'}</span>,
    dataIndex: 'year6',
    width: '10%',
    align: 'center',
    render: text => <SmallText>{text}</SmallText>,
  },
  {
    title: <span style={{ fontSize: 12 }}>{'산업기사'}</span>,
    dataIndex: 'year7',
    width: '10%',
    align: 'center',
    render: text => <SmallText>{text}</SmallText>,
  },
];

const rankInfoData = [
  {
    key: '특급',
    year1: '3년이상',
    year2: '9년이상',
    year3: '12년이상',
    year4: '15년이상',
    year5: '',
    year6: '',
    year7: '',
  },
  {
    key: '고급',
    year1: '3년미만',
    year2: '6년이상',
    year3: '9년이상',
    year4: '12년이상',
    year5: '15년이상',
    year6: '',
    year7: '',
  },
  {
    key: '중급',
    year1: '',
    year2: '3년이상',
    year3: '6년이상',
    year4: '9년이상',
    year5: '12년이상',
    year6: '3년이상',
    year7: '7년이상',
  },
  {
    key: '초급',
    year1: '',
    year2: '3년미만',
    year3: '6년미만',
    year4: '9년미만',
    year5: '3년이상',
    year6: '3년이만',
    year7: '7년미만',
  },
];

const usedInfoColumn = [
  {
    title: <span style={{ fontSize: 12 }}>{'역할 / 수행업무'}</span>,
    dataIndex: 'use1',
    width: '15%',
    align: 'center',
    render: text => <SmallText>{text}</SmallText>,
    colSpan: 4,
  },
  {
    dataIndex: 'use2',
    width: '20%',
    align: 'center',
    render: text => <SmallText>{text}</SmallText>,
    colSpan: 0,
  },
  {
    dataIndex: 'use3',
    width: '15%',
    align: 'center',
    render: text => <SmallText>{text}</SmallText>,
    colSpan: 0,
  },
  {
    dataIndex: 'use4',
    width: '15%',
    align: 'center',
    render: text => <SmallText>{text}</SmallText>,
    colSpan: 0,
  },

  {
    title: <span style={{ fontSize: 12 }}>{'주요사용기술'}</span>,
    dataIndex: 'use5',
    width: 'auto',
    align: 'center',
    render: text => <SmallText>{text}</SmallText>,
  },
];

const usedInfoData = [
  {
    key: 1,
    use1: '컨설팅',
    use2: 'Creative Director',
    use3: '퍼블리싱PL',
    use4: '개발PL',
    use5: 'Java, .net …',
  },
  {
    key: 2,
    use1: '총괄PM',
    use2: '디자인PL',
    use3: '퍼블리싱',
    use4: '개발',
    use5: 'MS-SQL, Oracle …',
  },
  {
    key: 3,
    use1: '기획PL',
    use2: '디자인',
    use3: '',
    use4: '',
    use5: '반응형, 웹표준화, 웹접근성 …',
  },
  {
    key: 4,
    use1: '기획',
    use2: '',
    use3: '',
    use4: '',
    use5: '',
  },
  {
    key: 5,
    use1: 'AE',
    use2: '',
    use3: '',
    use4: '',
    use5: '',
  },
];

const RankInfoTable = () => {
  return (
    <Table
      dataSource={rankInfoData}
      columns={rankInfoColumn}
      rowKey={rankInfoData => rankInfoData.key}
      pagination={false}
      size="small"
    />
  );
};

const UsedInfoTable = () => {
  return (
    <Table
      dataSource={usedInfoData}
      columns={usedInfoColumn}
      rowKey={usedInfoData => usedInfoData.key}
      pagination={false}
      size="small"
    />
  );
};

export { RankInfoTable, UsedInfoTable };
