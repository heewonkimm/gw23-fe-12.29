import { useCallback, useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import ButtonGroup from '@/components/button/ButtonGroup';
import Section from '@/components/layout/Section';
import { LabelLevel, LabelUsed } from '@/features/labels/ProfileLabels';
import { $http } from '@/lib/api';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

import {
  App,
  Button,
  Col,
  ConfigProvider,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Typography,
} from 'antd';

const { Title } = Typography;

const formTheme = {
  components: {
    Form: {
      itemMarginBottom: 12,
    },
  },
};

const periodRuls = [
  { pattern: /[0-9]/g, message: '숫자만 입력해주세요' },
  { min: 6, message: '기간을 6자리로 입력해주세요(202312)' },
];

const projectnameRuls = [
  { required: true, message: '프로젝트명을 입력해주세요.' },
];

export default function Write({ query }) {
  const { memberUid } = query;
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  const { message } = App.useApp();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({ memName: '', rank: '' });
  const [careerList, setCareerList] = useState([]);
  const [certificationList, setCertificationList] = useState([]);
  const [jobCareerList, setJobCareerList] = useState([]);

  const careerLevelOptions = [
    { value: 10, label: '초급' },
    { value: 20, label: '중급' },
    { value: 30, label: '고급' },
    { value: 40, label: '특급' },
  ];

  const careerLevelText = {
    10: '초급',
    20: '중급',
    30: '고급',
    40: '특급',
  };

  const careerLevelNumber = {
    초급: 10,
    중급: 20,
    고급: 30,
    특급: 40,
  };

  const degreeOptions = [
    { value: '', label: '졸업여부 선택' },
    { value: '졸업', label: '고등학교 졸업' },
    { value: '검정고시', label: '검정고시' },
    { value: '전문학사', label: '전문학사' },
    { value: '석사', label: '석사' },
    { value: '박사', label: '박사' },
    { value: '휴학', label: '휴학' },
    { value: '중퇴', label: '중퇴' },
  ];

  /**
   * 경력정보 행 추가
   */
  const addRow = () => {
    const newData = {
      job_history_seq: String(1),
      job_title: '',
      note: '',
      project_name: '',
      project_start_date: '',
      project_end_date: '',
      ordering_institution: '',
    };

    form.setFieldsValue({
      jobCareers: [newData, ...jobCareerList].map((row, idx) => {
        return {
          ...row,
          job_history_seq: String(idx + 1),
        };
      }),
    });

    setJobCareerList(jobCareerList =>
      [newData, ...jobCareerList].map((row, idx) => {
        return {
          ...row,
          job_history_seq: String(idx + 1),
        };
      }),
    );
  };
  /**
   * 경력정보 행 삭제
   */
  const removeRow = idx => {
    const filterList = jobCareerList.filter(row => row.job_history_seq !== idx);
    form.setFieldsValue({
      jobCareers: [...filterList],
    });
    setJobCareerList(filterList);
  };
  /**
   * 데이터 저장
   * 값이 없을때 빈값으로 지정 안해주면 undefined로 날아감
   */
  const submitData = useCallback(async data => {
    try {
      const schoolCareers = data.schoolCareers.map((row, idx) => {
        return {
          school_clsf: String(idx + 1),
          school_name: row.school_name || '',
          major: row.major || '',
          degree: row.degree || '',
          gradulate_yymm: row.gradulate_yymm
            ? dayjs(row.gradulate_yymm).format('YYYYMM')
            : '',
        };
      });

      const certifications = data.certifications.map((row, idx) => {
        return {
          certification_seq: String(idx + 1),
          certification_name: row.certification_name || '',
          certification_institution: row.certification_name
            ? dayjs(row.certification_name)
            : '',
        };
      });

      const jobCareers = data.jobCareers.map((row, idx) => {
        return {
          job_history_seq: String(idx + 1),
          job_title: row.job_title || '',
          note: row.note || '',
          project_name: row.project_name || '',
          project_start_date: row.project_start_date
            ? dayjs(row.project_start_date).format('YYYYMM')
            : '',
          project_end_date: row.project_end_date
            ? dayjs(row.project_end_date).format('YYYYMM')
            : '',
          ordering_institution: row.ordering_institution || '',
        };
      });

      const formData = {
        ...data,
        memberUid,
        careerLevel:
          data.careerLevel === '초급' ||
          data.careerLevel === '중급' ||
          data.careerLevel === '고급' ||
          data.careerLevel === '특급'
            ? String(careerLevelNumber[data.careerLevel])
            : String(data.careerLevel),
        careerStartDate: data.careerStartDate
          ? dayjs(data.careerStartDate).format('YYYYMM')
          : '',
        certifications,
        jobCareers,
        schoolCareers,
      };

      // console.log(formData);
      await $http.post(`/apis/profiles`, formData);
      message.success('수정 완료하였습니다.');
      router.push(`/hrms/profile/${memberUid}`);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await $http.get(`/apis/profiles/manager/${memberUid}`);

        setUserInfo({
          memName: data.body.memName || '',
          rank: data.body.rank || '',
        });

        // 학력정보, 보유자격증, 경력정보 데이터가 없는 것들은 객체로 세팅
        // 학력정보 기본 3개
        const newSchoorCarrers = [{}, {}, {}].map((row, idx) => {
          return {
            ...row,
            school_clsf: String(idx + 1),
            school_name: '',
            major: '',
            degree: '',
            gradulate_yymm: '',
          };
        });
        // 자격증정보 기본 3개
        const newCertifications = [{}, {}, {}].map((row, idx) => {
          return {
            ...row,
            certification_seq: String(idx + 1),
            certification_name: '',
            certification_institution: '',
          };
        });
        // 경력정보 기본 1개
        const newJobCarrers = {
          job_title: '',
          note: '',
          project_name: '',
          project_start_date: '',
          project_end_date: '',
          ordering_institution: '',
        };

        data.body.schoolCareers.length > 0
          ? setCareerList(data.body.schoolCareers)
          : setCareerList(newSchoorCarrers);

        data.body.certifications.length > 0
          ? setCertificationList(data.body.certifications)
          : setCertificationList(newCertifications);

        data.body.jobCareers.length > 0
          ? setJobCareerList(
              data.body.jobCareers.map((row, idx) => {
                return {
                  job_history_seq: String(idx + 1),
                  ...row,
                };
              }),
            )
          : setJobCareerList([newJobCarrers]);

        // antd form 필드 세팅
        form.setFieldsValue({
          careerLevel:
            careerLevelText[data.body.careerLevel] || careerLevelText[10],
          careerStartDate: data.body.careerStartDate
            ? data.body.careerStartDate
            : '',
          entranceDate: data.body.entranceDate ? data.body.entranceDate : '',
          jobFamily: data.body.jobFamily,
          schoolCareers: data.body.schoolCareers,
          certifications: data.body.certifications,
          jobCareers: data.body.jobCareers.map((row, idx) => {
            return {
              job_history_seq: String(idx + 1),
              ...row,
            };
          }),
        });

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
    <ConfigProvider theme={formTheme}>
      <Title
        level={2}
      >{`${userInfo.memName} ${userInfo.rank} 프로필 수정`}</Title>
      <Form
        id="writeForm"
        layout="vertical"
        labelAlign="left"
        labelWrap
        form={form}
        onFinish={submitData}
        style={{ width: '100%' }}
        // initialValues={careerLevelText[10]}
      >
        <Flex
          vertical
          gap={'2rem'}
          style={{ width: '100%' }}
          isLoading={isLoading}
        >
          <Section style={{ width: '100%' }}>
            <Title level={5}>기본 정보</Title>
            <Row gutter={24}>
              <Col span={6}>
                <Form.Item
                  name="careerStartDate"
                  label="경력시작연월"
                  rules={periodRuls}
                >
                  <Input placeholder="경력시작연월 입력" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="careerLevel" label={<LabelLevel />}>
                  <Select options={careerLevelOptions} />
                </Form.Item>
              </Col>
            </Row>
          </Section>
          <Row gutter={24}>
            <Col span={12}>
              <Section style={{ width: '100%' }}>
                <Title level={5}>학력정보</Title>
                {careerList.map((row, idx) => (
                  <Flex key={row.school_clsf} gap={15}>
                    <Form.Item
                      name={['schoolCareers', idx, 'school_name']}
                      style={{ width: '20%' }}
                    >
                      <Input placeholder="학교명 입력" />
                    </Form.Item>
                    <Form.Item
                      name={['schoolCareers', idx, 'major']}
                      style={{ width: '40%' }}
                    >
                      <Input placeholder="전공명 입력" />
                    </Form.Item>
                    <Form.Item
                      name={['schoolCareers', idx, 'degree']}
                      style={{ width: '25%' }}
                    >
                      <Select
                        options={degreeOptions}
                        placeholder="졸업여부 선택"
                      ></Select>
                    </Form.Item>
                    <Form.Item
                      name={['schoolCareers', idx, 'gradulate_yymm']}
                      style={{ width: '15%' }}
                      rules={periodRuls}
                    >
                      <Input placeholder="졸업년월 입력" maxLength="6" />
                    </Form.Item>
                  </Flex>
                ))}
              </Section>
            </Col>
            <Col span={12}>
              <Section style={{ width: '100%' }}>
                <Title level={5}>보유자격증</Title>
                {certificationList.map((row, idx) => (
                  <Flex key={row.certification_seq} gap={15}>
                    <Form.Item
                      name={['certifications', idx, 'certification_name']}
                      style={{ width: '60%' }}
                    >
                      <Input placeholder="자격증명 입력" />
                    </Form.Item>
                    <Form.Item
                      name={[
                        'certifications',
                        idx,
                        'certification_institution',
                      ]}
                      style={{ width: '40%' }}
                    >
                      <Input placeholder="발급처 입력" />
                    </Form.Item>
                  </Flex>
                ))}
              </Section>
            </Col>
          </Row>
          <Section style={{ width: '100%' }}>
            <Flex align="center" justify="space-between">
              <Title level={5}>경력정보</Title>
              <Button onClick={addRow} icon={<PlusOutlined />} />
            </Flex>
            {jobCareerList.map((row, idx) => (
              <Flex key={idx} gap={15} style={{ marginTop: '1rem' }}>
                <Form.Item
                  label={idx === 0 && '프로젝트명'}
                  name={['jobCareers', idx, 'project_name']}
                  style={{ width: '25%' }}
                  rules={projectnameRuls}
                >
                  <Input placeholder="프로젝트명 입력" />
                </Form.Item>
                <Form.Item
                  label={idx === 0 && '시작년월'}
                  name={['jobCareers', idx, 'project_start_date']}
                  style={{ width: '8%' }}
                  rules={periodRuls}
                >
                  <Input placeholder="시작년월 입력" maxLength="6" />
                </Form.Item>
                <Form.Item
                  label={idx === 0 && '종료년월'}
                  name={['jobCareers', idx, 'project_end_date']}
                  style={{ width: '8%' }}
                  rules={periodRuls}
                >
                  <Input placeholder="종료년월 입력" maxLength="6" />
                </Form.Item>
                <Form.Item
                  label={idx === 0 && '담당업무'}
                  name={['jobCareers', idx, 'job_title']}
                  style={{ width: '10%' }}
                >
                  <Input placeholder="담당업무 입력" />
                </Form.Item>
                <Form.Item
                  label={idx === 0 && '발주처'}
                  name={['jobCareers', idx, 'ordering_institution']}
                  style={{ width: '15%' }}
                >
                  <Input placeholder="발주처 입력" />
                </Form.Item>
                <Form.Item
                  label={idx === 0 && <LabelUsed />}
                  name={['jobCareers', idx, 'note']}
                  style={{ width: '30%' }}
                >
                  <Input placeholder="수행업무/주요사용 기술 입력" />
                </Form.Item>
                <Button
                  onClick={() => removeRow(row.job_history_seq)}
                  icon={<MinusOutlined />}
                  style={{ marginTop: idx === 0 ? 32 : 0 }}
                />
              </Flex>
            ))}

            <ButtonGroup justify="center" style={{ margin: '3rem 0 0' }}>
              <Link href="/hrms/profile">
                <Button>목록</Button>
              </Link>
              <Button form="writeForm" htmlType="submit" type="primary">
                저장
              </Button>
              <Button onClick={() => router.back()}>취소</Button>
            </ButtonGroup>
          </Section>
        </Flex>
      </Form>
    </ConfigProvider>
  );
}

export const getServerSideProps = async context => ({
  props: {
    query: {
      memberUid: context.query.memberUid || null,
    },
  },
});

Write.title = '프로필 수정 | 프로필 관리';
