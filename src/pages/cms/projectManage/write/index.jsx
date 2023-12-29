import { useCallback, useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import ButtonGroup from '@/components/button/ButtonGroup';
import Section from '@/components/layout/Section';
import CopyText from '@/components/typography/CopyText';
import { Information } from '@/components/typography/Information';
import { $http } from '@/lib/api';
import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import * as yup from 'yup';

import {
  App,
  Button,
  DatePicker,
  Form,
  Image,
  Input,
  Radio,
  Typography,
} from 'antd';
import locale from 'antd/lib/date-picker/locale/ko_KR';

const { Title } = Typography;

const initialData = {
  title: '',
  year: '',
  viewYn: 'N',
  detailYn: 'N',
};

const detailYnOptions = [
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
];

const viewYnOptions = [
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
];

const formSchema = yup.object().shape({
  title: yup.string().required('프로젝트명을 입력해주세요.'),
  year: yup.string().required('제작년월을 입력해주세요.'),
  viewYn: yup.string(),
  detailYn: yup.string(),
});

const formValidation = {
  async validator({ field }, value) {
    await formSchema.validateSyncAt(field, { [field]: value });
  },
};

const Write = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const [uid, setUid] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasUploadedImg, setHasUploadedImg] = useState(false);
  const [isImgView, setIsImgView] = useState(false);

  const checkUploadedImg = useCallback(async () => {
    try {
      await axios.head(
        `https://scl350600-scl350600.ktcdn.co.kr/adnstyle/project/${uid}.webp`,
      );

      message.success('이미지가 업로드 되어 있습니다.');
      setHasUploadedImg(true);
    } catch (error) {
      console.error(error);

      message.error('이미지가 없습니다. 업로드가 필요합니다.');
      setHasUploadedImg(false);
    }
  }, [uid]);

  const submitData = useCallback(
    async data => {
      try {
        const formData = {
          ...data,
          year: data.year ? dayjs(data.year).format('YYYYMM') : '',
          uid: uid,
          url: hasUploadedImg
            ? `https://scl350600-scl350600.ktcdn.co.kr/adnstyle/project/${uid}.webp`
            : '',
        };

        await $http.post(`/apis/projects-view`, formData);
        message.success('등록 완료하였습니다.');
        router.push('/cms/projectManage');
      } catch (error) {
        console.error(error);
      }
    },
    [uid],
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await $http.get(`/apis/projects-view/uuid`);
        const { data } = response;

        setUid(data);
        form.setFieldsValue(initialData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Title level={2}>프로젝트 전시 관리</Title>
      <Section>
        <Form
          id="writeForm"
          layout="vertical"
          labelAlign="left"
          labelWrap
          colon={false}
          form={form}
          onFinish={submitData}
        >
          <Form.Item name="title" label="프로젝트명" rules={[formValidation]}>
            <Input placeholder="프로젝트명" />
          </Form.Item>
          <Form.Item name="year" label="제작년월" rules={[formValidation]}>
            <DatePicker
              picker="month"
              placeholder="제작년월"
              locale={locale}
              format="YYYYMM"
            />
          </Form.Item>
          <Form.Item
            name="viewYn"
            label="프로젝트 노출 여부"
            rules={[formValidation]}
          >
            <Radio.Group
              options={viewYnOptions}
              optionType="button"
              buttonStyle="solid"
            />
          </Form.Item>
          <Form.Item label="상세 이미지">
            {hasUploadedImg ? (
              <>
                {isImgView ? (
                  <>
                    <Image
                      alt="컨텐츠 이미지"
                      height={150}
                      src={`https://scl350600-scl350600.ktcdn.co.kr/adnstyle/project/${uid}.webp`}
                      width={150}
                    />
                  </>
                ) : (
                  <>
                    <Button
                      htmlType="button"
                      onClick={() => setIsImgView(true)}
                    >
                      이미지 보기
                    </Button>
                  </>
                )}
                <Information>
                  <Information.Title>
                    이미지 수정 업로드 진행 시 주의사항
                  </Information.Title>
                  <Information.List>
                    <Information.Item>
                      수정될 파일명 및 확장자는&nbsp;
                      <CopyText>{`${uid}.webp`}</CopyText>
                      &nbsp;입니다.(클릭하여 복사가능)
                    </Information.Item>
                    <Information.Item>
                      수정된 이미지는 바로 적용되지 않습니다. 즉시 수정이 필요한
                      경우 관리자에게 문의해 주세요.
                    </Information.Item>
                  </Information.List>
                </Information>
              </>
            ) : (
              <>
                <Button htmlType="button" onClick={checkUploadedImg}>
                  이미지 업로드 확인
                </Button>
                <Information>
                  <Information.Title>
                    이미지 업로드 진행 시 주의사항
                  </Information.Title>
                  <Information.List>
                    <Information.Item>
                      파일명 및 확장자는&nbsp;
                      <CopyText>{`${uid}.webp`}</CopyText>
                      &nbsp;입니다.(파일명을 클릭하여 복사가능)
                    </Information.Item>
                    <Information.Item>
                      위의 파일명으로 저장되어 있어야만 확인이 가능합니다.
                    </Information.Item>
                    <Information.Item>
                      이미지 업로드 후에는 업로드 확인 버튼을 눌러주세요.
                    </Information.Item>
                  </Information.List>
                </Information>
              </>
            )}
          </Form.Item>
          {hasUploadedImg && (
            <Form.Item
              name="detailYn"
              label="상세 이미지 노출 여부"
              rules={[formValidation]}
            >
              <Radio.Group
                options={detailYnOptions}
                optionType="button"
                buttonStyle="solid"
                disabled={!hasUploadedImg}
              />
            </Form.Item>
          )}
        </Form>
        <ButtonGroup block justify="center">
          <Link href="/cms/projectManage">
            <Button size="large">목록</Button>
          </Link>
          <Button
            size="large"
            htmlType="submit"
            type="primary"
            form="writeForm"
          >
            저장
          </Button>
        </ButtonGroup>
      </Section>
    </>
  );
};

Write.title = '프로젝트 전시 관리 | 홈페이지 관리';

export default Write;
