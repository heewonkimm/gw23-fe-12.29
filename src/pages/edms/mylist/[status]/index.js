import { useEffect, useRef, useState } from 'react';

// form 부분 label, name 바꿔야 함-> key value 값?.., useform 사용하기
import Link from 'next/link';
import { useRouter } from 'next/router';

import ButtonGroup from '@/components/button/ButtonGroup';
import Section from '@/components/layout/Section';
import { $http } from '@/lib/api';
import { CloseCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Pagination,
  Select,
  Table,
  Tag,
} from 'antd';
import Title from 'antd/lib/typography/Title';

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
    render: (text, record) => {
      return <Link href={`/edms/mylist/proceeding/${record.uid}`}>{text}</Link>; // status 수정
    },
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

// 코드값 변환
const docType = {
  H06: '휴가',
  C01: '기안',
};
const docStatus = {
  proceeding: '진행',
  completed: '완료',
  rejected: '반려',
  temp: '임시저장',
};

// 옵션
const pageSize = [
  { label: '10개씩보기', value: '10개씩보기' },
  { label: '20개씩보기', value: '20개씩보기' },
  { label: '50개씩보기', value: '50개씩보기' },
  { label: '100개씩보기', value: '100개씩보기' },
];

const createdDate = [
  { label: '최신순으로 보기', value: 'DESC' },
  { label: '오래된순으로 보기', value: 'ASC' },
];

// 기간 선택
const period = [
  { label: '1주일', value: '1주일', duration: 'week' },
  { label: '1개월', value: '1개월', duration: 'month' },
  { label: '3개월', value: '3개월', duration: 'month' },
  { label: '6개월', value: '6개월', duration: 'month' },
  { label: '1년', value: '1년', duration: 'year' },
  { label: '직접선택', value: '직접선택', duration: 'day' },
];

export default function List() {
  const [docsData, setDocsData] = useState([]);
  const [docsCount, setDocsCount] = useState(0);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [sortAsc, setSortAsc] = useState('DESC');
  const [sortOption, setSortOption] = useState();
  const [title, setTitle] = useState('');
  const [dateRange, setDateRange] = useState([]);
  const [dateRangeString, setDateRangeString] = useState([]);
  const [selectedDocType, setSelectedDocType] = useState();
  const [selectedPeriod, setSelectedPeriod] = useState('직접선택');
  const [conditions, setConditions] = useState();
  const [search, setSearch] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tag, setTag] = useState([]);
  const [isTagVisible, setIsTagVisible] = useState(false);

  const router = useRouter();
  const status = router.query.status;

  useEffect(() => {
    const getData = async () => {
      try {
        const { data, headers } = await $http.get(
          `/apis/documents/${status}/list`,
          {
            params: {
              size: size,
              page: page,
              paging: true,
              sort: true,
              sortAsc: sortAsc,
              sortKey: 'created_date',
              conditions: conditions,
            },
          },
        );

        const list = data.body.map(row => {
          return {
            uid: row.uid,
            type: docType[row.type],
            title: row.title,
            memberName: row.memberName,
            memberDept: row.memberDept,
            createdDate: dayjs(row.createdDate).format('YYYY.MM.DD'),
            status: docStatus[row.status],
          };
        });

        setDocsData(list);
        setDocsCount(headers['x-paging-total']);
      } catch (error) {
        if (error.code === 403) {
          console.log('접근 권한이 없습니다.');
        }
      }
    };

    getData();
  }, [status, size, page, search]);

  //모달
  const showModal = () => {
    setIsModalOpen(true);
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleOk = () => {
    //검색 조건
    const variables = {};
    const tagUpdates = [];

    if (selectedDocType) {
      variables.type = selectedDocType;
      tagUpdates.push({ key: 'type', value: docType[selectedDocType] });
    }
    if (sortOption) {
      tagUpdates.push({ key: 'order', value: sortOption });
    }
    if (title) {
      variables.title = title;
      tagUpdates.push({ key: 'title', value: title });
    }
    if (dateRangeString !== undefined && dateRangeString.length > 0) {
      variables.period = dateRangeString;
      tagUpdates.push({
        key: 'period',
        value: `${dateRangeString[0]} ~ ${dateRangeString[1]}`,
      });
    }

    tagUpdates.forEach(({ key, value }) => {
      updateTag(key, value);
    });
    //태그 생성 -----여기서부터! , key value 부분 업데이트 함수랑 비교해서 더 효율적이게, handleok함수 좀더 리액트 활용해보기, 나머지 공책에 적어놈

    setSearch([sortAsc, conditions]);
    setConditions(JSON.stringify(variables));
    setIsModalVisible(false);
    setIsTagVisible(true);
  };

  // 조건 리셋----useRef
  const onClickReset = () => {
    setConditions(undefined); // 필요없으면 삭제
    setDateRange([]);
    setSortAsc('DESC'); // 필요없으면 삭제
    setSearch();
    setIsModalOpen(false);
    setIsTagVisible(false);
  };

  console.log(conditions);
  console.log(search);
  console.log(tag);

  //태그 닫기
  const onCloseTag = key => {
    const updatedConditions = { ...JSON.parse(conditions) };

    if (key === 'order') {
      setSortAsc('DESC'); // 필요없으면 삭제
    } else if (key === 'type') {
      delete updatedConditions.type;
    } else if (key === 'title') {
      delete updatedConditions.title; // 버튼 누르기 전에 태그 업데이트 됨,  태그 삭제하면 검색 모달 열렸을때도 지워져있기
    } else if (key === 'period') {
      delete updatedConditions.period;
    }

    setConditions(JSON.stringify(updatedConditions));
    setSearch([sortAsc, conditions]);

    setTag(prev => prev.filter(item => item.key !== key)); // 태그 배열 수정
  };

  //태그 업데이트
  const updateTag = (key, value) => {
    const isKeyExist = tag.find(item => item.key === key);

    if (isKeyExist) {
      setTag(prev => {
        const updatedTag = prev.map(item =>
          item.key === key ? { ...item, value } : item,
        );
        return updatedTag;
      });
    } else {
      setTag(prev => [...prev, { key, value }]);
    }
  };

  // 객체를 배열로 변환-----수정
  const docTypeMapping = Object.entries(docType).map(([value, label]) => ({
    value,
    label,
  }));

  // 페이지 사이즈, 텍스트 자르고 숫자로 변환
  const onChangeSize = size => {
    const pageSize = size.substring(0, size.length - 4);
    setSize(Number(pageSize));
  };

  //페이지네이션 페이지 변환
  const onChangePage = page => {
    setPage(page);
  };

  //문서양식
  const onChangeDocType = type => {
    // updateTag('type', docType[type]);
    setSelectedDocType(type);
  };

  //문서제목
  const onBlurTitle = title => {
    // updateTag('title', title.target.value);
    setTitle(title.target.value);
  };

  //기간선택
  const onChangePeriod = (period, option) => {
    if (period !== '직접선택') {
      const currentDate = dayjs();
      const dateDiff = parseInt(period);
      const startDate = currentDate.subtract(
        dateDiff,
        option.duration || 'day',
      );

      const dateRangeFormat = [
        startDate.format('YYYY-MM-DD'),
        currentDate.format('YYYY-MM-DD'),
      ];

      setDateRange([startDate, currentDate]); //화면에 보이기 위한 date
      setDateRangeString(dateRangeFormat); //api 데이터 필터 위한 date format
      // updateTag('period', `${dateRangeFormat[0]} ~ ${dateRangeFormat[1]}`);
    }
    setSelectedPeriod(period);
  };

  //datePicker
  const onChangeDatePicker = (dates, datesString) => {
    setSelectedPeriod('직접선택');
    setDateRange(dates); //화면에 보이기 위한 date
    setDateRangeString(datesString); //api 데이터 필터 위한 date format
    // updateTag('period', `${datesString[0]} ~ ${datesString[1]}`);
  };

  // 최신순, 오래된순
  const onChangeSortASC = (order, option) => {
    setSortAsc(order);
    setSortOption(option.label);
    // updateTag('order', option.label);
    // return;
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '27px',
      }}
    >
      <Section>
        {isModalOpen && (
          <Modal
            title="검색"
            open={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={520}
            okText="검색"
            cancelText="취소"
          >
            <Form layout="vertical">
              <Form.Item label="문서양식" name="문서양식">
                <Select
                  placeholder="문서양식 선택"
                  options={docTypeMapping}
                  value={selectedDocType} // 초기화 하려고 넣은거
                  onChange={onChangeDocType}
                />
              </Form.Item>
              <Form.Item label="기안일" name="기안일">
                <Select
                  placeholder="최신순으로 보기"
                  options={createdDate}
                  onChange={onChangeSortASC}
                />
              </Form.Item>
              <Form.Item label="제목" name="제목">
                <Input
                  value={title}
                  placeholder="문서 제목을 입력해 주세요."
                  onBlur={onBlurTitle}
                />
              </Form.Item>
              <Form.Item label="기간검색" name="기간검색">
                <Select
                  placeholder="기간선택"
                  options={period}
                  onChange={onChangePeriod}
                  style={{ width: '16rem', marginRight: '1rem' }}
                />
                <DatePicker.RangePicker
                  value={dateRange}
                  onChange={onChangeDatePicker}
                  disabled={selectedPeriod !== '직접선택'}
                />
              </Form.Item>
            </Form>
          </Modal>
        )}
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Title level={5} style={{ flex: 1 }}>
              검색 조건
            </Title>
            <ButtonGroup justify="space-between" style={{ margin: 0 }}>
              <Button onClick={showModal}>검색</Button>
              <Button onClick={onClickReset}>초기화</Button>
            </ButtonGroup>
          </div>
          <div>
            {isTagVisible &&
              tag.map(el => (
                <Tag
                  key={el.key}
                  closable
                  closeIcon={<CloseCircleOutlined />}
                  onClose={() => onCloseTag(el.key)}
                >
                  {el.value}
                </Tag>
              ))}
          </div>
          <Select
            defaultValue="10개씩보기"
            options={pageSize}
            onChange={onChangeSize}
            style={{ width: '20.2rem', marginTop: '5.5rem' }}
          />
        </div>
      </Section>
      <Section>
        <Title level={5}>검색결과 : {docsCount}건</Title>
        <Table
          dataSource={docsData}
          columns={columns}
          rowKey={docsData => docsData.uid}
          pagination={false}
        />
        <Pagination
          total={docsCount}
          pageSize={size}
          current={page}
          hideOnSinglePage={true}
          showSizeChanger={false}
          onChange={onChangePage}
          style={{ textAlign: 'center', margin: '1.6rem 0' }}
        />
      </Section>
    </div>
  );
}

List.title = '내 문서함 | 전자결재';

// state가 너무 많음
// const condtions = {
//   docType: '',
//   docTit: '',
//   date: '',
// }

// form.setFieldsValue({
//   docType: '', //select 태그에서 이름 같게
//   docTit: '',
//   date: '',
// });

// <Form
//         id="writeForm"
//         layout="vertical"
//         labelAlign="left"
//         labelWrap
//         form={form}
//         onFinish={submitData}
//         style={{ width: '100%' }}

//       >
//       <Form.Item label="기안일" name="docType">
//         <Select
//           placeholder="최신순으로 보기"
//           options={createdDate}
//           onChange={onChangeSortASC}
//         />
//       </Form.Item>

// </Form>

// //모달 ok버튼 따로 빼서 함수 연결(모달에 있는 ok 사용XX)
// 태그 onClose를 onClick 안에 넣어서 사용하기??
// write에 index 파일 참고

//conditions = {~~~}
// const dddd = () => {
//   ddd.setFieldsValue({
//     뭐 이런식으로!
//   })
// }

//이런식으로
//conditions = {~~~}
//const dddd = () => {
//   ddd.setFieldsValue({
//     conditions
//   })
// }
/// form 구조로 바꿔야 하고, label: 문서양식, name: type(받아오는 데이터 그 이름 똑같게..??)

//차장님 파일
// <Form
//         id="writeForm" ///필수값
//         layout="vertical"
//         labelAlign="left"
//         labelWrap
//         form={form}
//         onFinish={submitData}
//         style={{ width: '100%' }}
//         // initialValues={careerLevelText[10]}
//       ></Form>
