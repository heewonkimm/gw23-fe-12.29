import { Table } from 'antd';

Table.defaultProp = {
  size: 'large',
  showHeader: true,
};

export default {
  title: 'Table/Table',
  component: Table,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      defaultValue: {
        summary: 'large',
      },
    },
    bordered: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    showHeader: {
      description: '사용 안할 시 bordered={false}',
      defaultValue: {
        summary: true,
      },
    },
    loading: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    pagination: {
      description: '사용 안할 시 pagination={false}',
    },
    columns: {
      control: 'object',
    },
    dataSource: {
      control: 'object',
    },
    header: {
      description: 'stories 참고',
    },
    footer: {
      description: 'stories 참고',
    },
    expandable: {
      description: 'stories 참고',
    },
  },
  args: {
    loading: false,
    size: 'large',
    bordered: false,
    showHeader: true,
    columns: [
      {
        title: '기안일',
        dataIndex: 'date',
        key: 'date',
        align: 'center',
      },
      {
        title: '문서종류',
        dataIndex: 'docType',
        key: 'docType',
        align: 'center',
      },
      {
        title: '문서제목',
        dataIndex: 'title',
        key: 'title',
        align: 'left',
        render: text => (
          <a href="#" target="_blank">
            {text}
          </a>
        ),
      },
      { title: '신청자', dataIndex: 'name', key: 'name', align: 'center' },
      {
        title: '진행상태',
        dataIndex: 'status',
        key: 'status',
        align: 'center',
        render: status => {
          return <span style={{ border: '1px solid #ddd' }}>{status}</span>;
        },
      },
    ],
    dataSource: [
      {
        key: 1,
        date: '2023-10-10',
        docType: '휴가신청서',
        title: '휴가신청서',
        name: '홍길동',
        status: '진행중',
      },
      {
        key: 2,
        date: '2023-10-10',
        docType: '휴가신청서',
        title: '휴가신청서',
        name: '홍길동',
        status: '진행중',
      },
      {
        key: 3,
        date: '2023-10-10',
        docType: '휴가신청서',
        title: '휴가신청서',
        name: '홍길동',
        status: '진행중',
      },
    ],
  },
};

export const Default = {
  render: ({ ...props }) => (
    <>
      <Table {...props} />
    </>
  ),
};

export const Row = () => {
  const columns = [
    {
      dataIndex: 'rowTitle',
      key: 'rowTitle',
      rowScope: 'row',
    },
    {
      dataIndex: 'docType',
      key: 'docType',
    },
    {
      dataIndex: 'title',
      key: 'title',
    },
    {
      dataIndex: 'name',
      key: 'name',
    },
    {
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const data = [
    {
      key: 1,
      rowTitle: '2023-10-10',
      docType: '휴가신청서',
      title: '휴가신청서',
      name: '홍길동',
      status: '진행중',
    },
    {
      key: 2,
      rowTitle: '2023-10-10',
      docType: '휴가신청서',
      title: '휴가신청서',
      name: '홍길동',
      status: '진행중',
    },
    {
      key: 3,
      rowTitle: '2023-10-10',
      docType: '휴가신청서',
      title: '휴가신청서',
      name: '홍길동',
      status: '진행중',
    },
  ];

  return <Table showHeader={false} columns={columns} dataSource={data} />;
};

export const HeaderFooter = () => {
  const columns = [
    {
      title: '기안일',
      dataIndex: 'date',
      key: 'date',
      align: 'center',
    },
    {
      title: '문서종류',
      dataIndex: 'docType',
      key: 'docType',
      align: 'center',
    },
    {
      title: '문서제목',
      dataIndex: 'title',
      key: 'title',
      align: 'left',
      render: text => (
        <a href="#" target="_blank">
          {text}
        </a>
      ),
    },
    { title: '신청자', dataIndex: 'name', key: 'name', align: 'center' },
    {
      title: '진행상태',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: status => {
        return <span style={{ border: '1px solid #ddd' }}>{status}</span>;
      },
    },
  ];

  const dataSource = [
    {
      key: 1,
      date: '2023-10-10',
      docType: '휴가신청서',
      title: '휴가신청서',
      name: '홍길동',
      status: '진행중',
    },
    {
      key: 2,
      date: '2023-10-10',
      docType: '휴가신청서',
      title: '휴가신청서',
      name: '홍길동',
      status: '진행중',
    },
    {
      key: 3,
      date: '2023-10-10',
      docType: '휴가신청서',
      title: '휴가신청서',
      name: '홍길동',
      status: '진행중',
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        title={() => 'Header'}
        footer={() => 'Footer'}
      />
    </>
  );
};

export const Size = {
  render: ({ columns, dataSource }) => (
    <>
      <Table columns={columns} dataSource={dataSource} size="small" />
      <Table columns={columns} dataSource={dataSource} size="middle" />
      <Table columns={columns} dataSource={dataSource} />
    </>
  ),
};

export const Bordered = {
  render: ({ columns, dataSource }) => (
    <Table columns={columns} dataSource={dataSource} bordered />
  ),
};

export const Loading = {
  render: ({ columns, dataSource }) => (
    <Table columns={columns} dataSource={dataSource} loading />
  ),
};

export const ShowHeader = {
  render: ({ columns, dataSource }) => (
    <>
      <Table columns={columns} dataSource={dataSource} />
      <Table columns={columns} dataSource={dataSource} showHeader={false} />
    </>
  ),
};

export const Expandable = () => {
  const columns = [
    {
      title: '기안일',
      dataIndex: 'date',
      key: 'date',
      align: 'center',
    },
    {
      title: '문서종류',
      dataIndex: 'docType',
      key: 'docType',
      align: 'center',
    },
    {
      title: '문서제목',
      dataIndex: 'title',
      key: 'title',
      align: 'left',
      render: text => (
        <a href="#" target="_blank">
          {text}
        </a>
      ),
    },
    { title: '신청자', dataIndex: 'name', key: 'name', align: 'center' },
    {
      title: '진행상태',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: status => {
        return <span style={{ border: '1px solid #ddd' }}>{status}</span>;
      },
    },
  ];

  const dataSource = [
    {
      key: 1,
      date: '2023-10-10',
      docType: '휴가신청서',
      title: '휴가신청서',
      name: '홍길동',
      status: '진행중',
    },
    {
      key: 2,
      date: '2023-10-10',
      docType: '휴가신청서',
      title: '휴가신청서',
      name: '홍길동',
      status: '진행중',
    },
    {
      key: 3,
      date: '2023-10-10',
      docType: '휴가신청서',
      title: '휴가신청서',
      name: '홍길동',
      status: '진행중',
    },
  ];

  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: record => (
          <>
            <p>데이터를 가져와서 부가설명 입력 가능</p>
            <p>{record.date}</p>
            <p>{record.name}</p>
          </>
        ),
        rowExpandable: record => record.name !== 'Not Expandable',
      }}
      dataSource={dataSource}
    />
  );
};

export const FixedHeader = ({ dataSource, columns }) => {
  return (
    <Table columns={columns} dataSource={dataSource} scroll={{ y: 100 }} />
  );
};

export const FixedColumns = ({ dataSource }) => {
  const fixedColumns = [
    {
      title: '기안일',
      dataIndex: 'date',
      key: '1',
      fixed: 'left',
    },
    {
      title: '문서종류',
      dataIndex: 'docType',
      key: '2',
    },
    {
      title: '문서제목',
      dataIndex: 'title',
      key: '3',
    },
    {
      title: '신청자',
      dataIndex: 'name',
      key: '4',
    },
    {
      title: '진행상태',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      fixed: 'right',
    },
  ];
  return (
    <Table
      style={{ maxWidth: 800 }}
      columns={fixedColumns}
      dataSource={dataSource}
      scroll={{ x: 1000 }}
    />
  );
};
