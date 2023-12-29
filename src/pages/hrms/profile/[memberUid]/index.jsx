import { useEffect, useState } from 'react';

import Link from 'next/link';

import ButtonGroup from '@/components/button/ButtonGroup';
import Section from '@/components/layout/Section';
import { LabelLevel, LabelUsed } from '@/features/labels/ProfileLabels';
import { $http } from '@/lib/api';
import dayjs from 'dayjs';

import { Button, Descriptions, Flex, Table, Typography } from 'antd';

const { Title } = Typography;

const Excel = require('exceljs');

const careerLevelText = {
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

  return year > 0 ? `${year}년 ${month}개월` : month > 0 ? `${month}개월` : '';
};

const yearsOfService = value => {
  const today = dayjs().format('YYYYMM');
  const gap = dayjs(today).unix() - dayjs(dayjs(value).format('YYYYMM')).unix();
  const calMonth = gap / 60 / 60 / 24 / 30;
  const year = Math.floor(calMonth / 12);
  const month = Math.floor(calMonth % 12);

  return year > 0 ? `${year}년 ${month}개월` : month > 0 ? `${month}개월` : '';
};

export default function View({ query }) {
  const { memberUid } = query;
  const [isLoading, setIsLoading] = useState(false);
  const [personalData, setPersonalData] = useState({});
  const {
    memName,
    age,
    careerLevel,
    careerStartDate,
    certifications,
    dept,
    rank,
    entranceDate,
    jobCareers,
    jobFamily,
    schoolCareers,
  } = personalData;

  const items = [
    {
      key: '1',
      label: '이름',
      children: memName,
    },
    {
      key: '2',
      label: '나이',
      children: `${age}세`,
    },
    {
      key: '3',
      label: '소속',
      children: dept,
    },
    {
      key: '4',
      label: '직급',
      children: rank,
    },
    {
      key: '5',
      label: '직무',
      children: jobFamily,
    },
    {
      key: '6',
      label: '근속년수',
      children: yearsOfService(entranceDate),
    },
    {
      key: '7',
      label: '경력',
      children: carrerCount(careerStartDate),
    },
    {
      key: '8',
      label: <LabelLevel />,
      children: careerLevelText[careerLevel],
    },
  ];

  const EmptyText = () => {
    return <div style={{ height: 24 }}></div>;
  };

  const schoolColumns = [
    {
      title: '학교',
      dataIndex: 'school_name',
      width: '30%',
      align: 'center',
      render: school_name => (school_name ? school_name : <EmptyText />),
    },
    {
      title: '전공',
      dataIndex: 'major',
      width: '25%',
      align: 'center',
      render: major => (major ? major : <EmptyText />),
    },
    {
      title: '학위',
      dataIndex: 'degree',
      width: '25%',
      align: 'center',
      render: degree => (degree ? degree : <EmptyText />),
    },
    {
      title: '졸업년월',
      dataIndex: 'gradulate_yymm',
      width: '20%',
      align: 'center',
      render: gradulate_yymm =>
        gradulate_yymm ? (
          dayjs(gradulate_yymm).format('YYYY.MM')
        ) : (
          <EmptyText />
        ),
    },
  ];

  const certificationlColumns = [
    {
      title: '자격증명',
      dataIndex: 'certification_name',
      width: '50%',
      align: 'center',
      render: certification_name =>
        certification_name ? certification_name : <EmptyText />,
    },
    {
      title: '발급처',
      dataIndex: 'certification_institution',
      width: '50%',
      align: 'center',
      render: certification_institution =>
        certification_institution ? certification_institution : <EmptyText />,
    },
  ];

  const jobCarrerColumns = [
    {
      title: '프로젝트명',
      dataIndex: 'project_name',
      width: 'auto',
      align: 'left',
    },
    {
      title: '시작년월',
      dataIndex: 'project_start_date',
      width: '10%',
      align: 'center',
      render: project_start_date =>
        project_start_date ? dayjs(project_start_date).format('YYYY.MM') : '',
    },
    {
      title: '종료년월',
      dataIndex: 'project_end_date',
      width: '10%',
      align: 'center',
      render: project_end_date =>
        project_end_date ? dayjs(project_end_date).format('YYYY.MM') : '진행중',
    },
    {
      title: '담당업무',
      dataIndex: 'job_title',
      width: '12%',
      align: 'center',
    },
    {
      title: '발주처',
      dataIndex: 'ordering_institution',
      width: '15%',
      align: 'center',
    },
    {
      title: <LabelUsed />,
      dataIndex: 'note',
      width: '25%',
      align: 'left',
    },
  ];

  // 엑셀 파일 생성 및 다운로드
  const excelDownload = () => {
    try {
      // 엑셀 생성
      const workbook = new Excel.Workbook();
      // 생성자
      workbook.creator = `${personalData.memName}_${personalData.rank}`;
      // 최종 수정자
      workbook.lastModifiedBy = `${personalData.memName}_${personalData.rank}`;

      // 생성일(현재 일자로 처리)
      workbook.created = new Date();

      // 수정일(현재 일자로 처리)
      workbook.modified = new Date();

      // addWorksheet() 함수를 사용하여 엑셀 시트를 추가한다.
      // 엑셀 시트는 순차적으로 생성된다.
      workbook.addWorksheet(`${personalData.memName}_${personalData.rank}`);

      // 엑셀 시트 접근
      const sheetOne = workbook.getWorksheet(
        `${personalData.memName}_${personalData.rank}`,
      );

      // 기본정보, 학력정보, 자격증정보, 경력정보 테이블 column 세팅
      const memInfoColumns = [
        { name: '이름' },
        { name: '나이' },
        { name: '소속' },
        { name: '직급' },
        { name: '직무' },
        { name: '근속년수' },
        { name: '경력' },
        { name: '기술등급' },
      ];

      const schoolCareerColumns = [
        { name: '번호' },
        { name: '학교명' },
        { name: '전공' },
        { name: '학위' },
        { name: '졸업연도' },
      ];

      const jobCareerColumns = [
        { name: '번호' },
        { name: '프로젝트명' },
        { name: '시작년월' },
        { name: '종료년월' },
        { name: '담당업무' },
        { name: '발주처' },
        { name: '비고' },
      ];

      const certificationColumns = [
        { name: '번호' },
        { name: '자격증명' },
        { name: '발급처' },
      ];

      // 기본정보, 학력정보, 자격증정보, 경력정보 테이블 row data 세팅
      // row data 형태는 value 값만 있는 배열 형태임 - ['value1','value2','value3']
      // 학력정보, 자격증정보, 경력정보 정보는 key,value로 이루어진 object의 배열로 되어있어서 value만 따로 뽑아서 각 테이블 column 배열에 담아준다
      let schoolCareerRows = [];
      let certificationRows = [];
      let jobCareerRows = [];
      const memInfoRows = [
        personalData.memName,
        `${personalData.age}세`,
        personalData.dept,
        personalData.rank,
        personalData.jobFamily,
        yearsOfService(personalData.entranceDate),
        carrerCount(personalData.careerStartDate),
        careerLevelText[personalData.careerLevel],
      ];

      personalData.schoolCareers.forEach(row =>
        schoolCareerRows.push(Object.values(row)),
      );
      personalData.certifications.forEach(row =>
        certificationRows.push(Object.values(row)),
      );
      // 경력정보는 데이터의 컬럼 순서가 맞지 않아 다시 매핑하여 가공하여 value만 추출
      personalData.jobCareers
        .map(row => {
          return {
            job_history_seq: row.job_history_seq,
            project_name: row.project_name,
            project_start_date: row.project_start_date,
            project_end_date: row.project_end_date || '진행중',
            job_title: row.job_title,
            ordering_institution: row.ordering_institution,
            note: row.note,
          };
        })
        .forEach(row => jobCareerRows.push(Object.values(row)));

      // 시트에 추가될 테이블 세팅
      const memberInfoTable = {
        name: 'memberInfoTable',
        ref: 'A3',
        headerRow: true,
        totalsRow: false,
        style: {
          theme: 'TableStyleMedium1',
          showRowStripes: false,
        },
        columns: memInfoColumns,
        rows: [memInfoRows],
      };

      const schoolCareerTable = {
        name: 'schoolCareerTable',
        ref: 'A7',
        headerRow: true,
        totalsRow: false,
        style: {
          theme: 'TableStyleMedium3',
          showRowStripes: false,
        },
        columns: schoolCareerColumns,
        rows: schoolCareerRows,
      };

      const certificationTable = {
        name: 'certificationTable',
        ref: `A13`,
        headerRow: true,
        totalsRow: false,
        style: {
          theme: 'TableStyleMedium4',
          showRowStripes: false,
        },
        columns: certificationColumns,
        rows: certificationRows,
      };

      const jobCareerTable = {
        name: 'jobCareerTable',
        ref: `A19`,
        headerRow: true,
        totalsRow: false,
        style: {
          theme: 'TableStyleMedium5',
          showRowStripes: false,
        },
        columns: jobCareerColumns,
        rows: jobCareerRows,
      };

      // 타이틀
      sheetOne.getCell('A2').value = '기본정보';
      sheetOne.getCell('A6').value = '학력정보';
      sheetOne.getCell('A12').value = '자격증정보';
      sheetOne.getCell('A18').value = '경력정보';

      // 컬럼 넓이 설정
      sheetOne.getColumn('B').width = 40;
      sheetOne.getColumn('C').width = 15;
      sheetOne.getColumn('D').width = 15;
      sheetOne.getColumn('E').width = 15;
      sheetOne.getColumn('F').width = 20;
      sheetOne.getColumn('I').width = 50;

      // 시트에 프로필 정보 테이블 추가
      sheetOne.addTable(memberInfoTable);
      sheetOne.addTable(schoolCareerTable);
      sheetOne.addTable(certificationTable);
      sheetOne.addTable(jobCareerTable);

      // 셀 병합
      sheetOne.mergeCells('A2 : H2');
      sheetOne.mergeCells('A6 : H6');
      sheetOne.mergeCells('A12 : H12');
      sheetOne.mergeCells('A18 : H18');
      sheetOne.mergeCells('G19 : I19');

      // 엑셀 파일 생성 후 다운로드
      workbook.xlsx.writeBuffer().then(data => {
        const blob = new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = `인력 프로필_${personalData.memName}_${
          personalData.rank
        }_${new Date().toISOString().split('T')[0]}.xlsx`;
        anchor.click();
        window.URL.revokeObjectURL(url);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await $http.get(`/apis/profiles/manager/${memberUid}`);
        setPersonalData(data.body);
        setIsLoading(false);
      } catch (error) {
        if (error.code === 403) {
          console.log('접근 권한이 없습니다.');
        }
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Title level={2}>프로필 상세</Title>
      <Flex
        vertical
        gap={'2rem'}
        style={{ width: '100%' }}
        isLoading={isLoading}
      >
        <Section>
          <Descriptions
            title="기본정보"
            items={items}
            column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
          />
        </Section>
        <Flex justify={'space-between'}>
          <Section width={'49.5%'}>
            <Flex vertical>
              <Title level={5}>학력정보</Title>
              <Table
                dataSource={schoolCareers}
                columns={schoolColumns}
                isLoading={isLoading}
                size="middle"
                rowKey={schoolCareers => schoolCareers.school_clsf}
                pagination={false}
              />
            </Flex>
          </Section>
          <Section width={'49.5%'}>
            <Flex vertical>
              <Title level={5}>보유자격증</Title>
              <Table
                dataSource={certifications}
                columns={certificationlColumns}
                isLoading={isLoading}
                size="middle"
                rowKey={certifications => certifications.certification_seq}
                pagination={false}
              />
            </Flex>
          </Section>
        </Flex>
        <Section>
          <Title level={5}>경력정보</Title>
          <Table
            dataSource={jobCareers}
            columns={jobCarrerColumns}
            isLoading={isLoading}
            size="large"
            rowKey={jobCareers => jobCareers.job_history_seq}
            // pagination={{ hideOnSinglePage: true }}
            pagination={false}
          />
          <ButtonGroup justify="center" style={{ margin: '3rem 0 0' }}>
            <Link href="/hrms/profile">
              <Button>목록</Button>
            </Link>
            <Link href={`/hrms/profile/write/${memberUid}`}>
              <Button>수정</Button>
            </Link>
            <Button onClick={excelDownload}>엑셀 다운로드</Button>
          </ButtonGroup>
        </Section>
      </Flex>
    </>
  );
}

export const getServerSideProps = async context => ({
  props: {
    query: {
      memberUid: context.query.memberUid || null,
    },
  },
});

View.title = '프로필 상세 | 프로필 관리';
