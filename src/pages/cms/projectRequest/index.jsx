import { useEffect, useState } from 'react';

import Section from '@/components/layout/Section';
import CopyText from '@/components/typography/CopyText';
import { $http } from '@/lib/api';
import styled from '@emotion/styled';
import dayjs from 'dayjs';

import { List, Tag, Typography } from 'antd';

const { Title } = Typography;

const TitleTag = styled(Tag)`
  .ant-app & {
    font-size: inherit;
    font-weight: 600;
  }
`;

// const ErrorText = () => {
//   return (
//     <Empty
//       description={
//         <div className="contactus">
//           <span>
//             접근 권한이 없습니다.
//             <br />
//             관리자에게 문의 해주세요.
//           </span>
//           <div className="info">
//             세컨즈팩토리 박승완 차장
//             <br />
//             02-2015-3331 / hammer0130@adnstyle.com
//           </div>
//         </div>
//       }
//     />
//   );
// };

const Index = () => {
  const [projectData, setProjectData] = useState([]);
  // const [noAuthorize, setNoAuthorize] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await $http.get('/apis/projects-request');
        const data = res.data.body;

        const list = data.map(row => {
          return {
            seq: row.seq,
            serviceName: row.serviceName,
            budget: row.budget,
            companyName: row.companyName,
            customerName: row.customerName,
            email: row.email,
            period: row.period,
            savedFile: row.savedFile,
            tel: row.tel,
            contents: row.contents,
            reqdate: dayjs(row.reqdate).format('YYYY.MM.DD'),
          };
        });
        setProjectData(list);

        console.log(list);
      } catch (error) {
        console.log(error);

        // if (error.code === 403) {
        //   console.log('접근 권한이 없습니다.');
        //   setNoAuthorize(true);
        // }
      }
    };

    getData();
  }, []);

  return (
    <>
      <Title level={2}>프로젝트 의뢰 관리</Title>
      <Section last>
        <List
          itemLayout="vertical"
          pagination={{
            pageSize: 5,
            position: 'bottom',
            align: 'center',
          }}
          dataSource={projectData}
          renderItem={item => {
            // console.log(item);
            return (
              <List.Item key={item.seq}>
                <List.Item.Meta
                  title={
                    <>
                      <TitleTag bordered={false}>{item.serviceName}</TitleTag>
                      <TitleTag bordered={false}>{item.budget}</TitleTag>
                      <TitleTag bordered={false}>{item.period}</TitleTag>
                    </>
                  }
                  description={
                    <>
                      {item.companyName} / {item.customerName} /{' '}
                      <CopyText>{item.tel}</CopyText> /{' '}
                      <CopyText>{item.email}</CopyText>
                    </>
                  }
                />
                {item.contents}
              </List.Item>
            );
          }}
        />
      </Section>
    </>
  );
};

Index.title = '홈페이지 관리';

export default Index;
