import { useEffect, useState } from 'react';

// import { sendError } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';

import { colors } from '@/components/Theme';
import Filter from '@/components/filter/Filter';
import Section from '@/components/layout/Section';
import CopyText from '@/components/typography/CopyText';
import { $http } from '@/lib/api';
import { MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

import { Checkbox, Spin } from 'antd';

//필터탭 스타일
const FilterTab = styled.div`
  .content-head {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;

    .left {
      display: flex;
      gap: 10px;

      li {
        span {
          display: block;
          cursor: pointer;
          border: 1px solid ${colors.greyscale['200']};
          padding: 5px 23px;
          border-radius: 8px;
          color: ${colors.greyscale['400']};
          transition: all 0.5s;

          :hover {
            color: ${colors.greyscale['900']};
            border: 1px solid ${colors.greyscale['900']};
          }

          &.active {
            color: ${colors.greyscale['900']};
            border: 1px solid ${colors.greyscale['900']};
          }
        }
      }
    }

    .right {
      display: inline-block;
      margin-left: auto;
    }
  }

  .content {
    .inner {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 30px;
    }

    .box {
      width: 350px;
      min-height: 147px;
      border-radius: 12px;
      padding: 20px;
      background-color: ${colors.greyscale['50']};
      display: none;
      flex-direction: column;
      align-items: center;

      &.visible {
        display: flex;
      }

      .top {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-start;
        gap: 20px;
        padding: 0 20px 15px;

        .member {
          font-weight: bold;
          font-size: 16px;
        }
      }

      .bottom {
        width: 100%;
        text-align: left;
        padding: 15px 30px 0;
        border-top: 1px dotted ${colors.greyscale['300']};
      }

      .row {
        font-size: 14px;
        color: ${colors.greyscale['500']};

        .icon {
          margin-right: 10px;
          vertical-align: text-top;
        }
      }

      .user-img {
        width: 70px;
        height: 70px;
        position: relative;
        border-radius: 100%;
        overflow: hidden;
        flex-shrink: 0;

        img {
          display: block;
          min-width: 80px;
          min-height: 80px;
          object-fit: cover;
          object-position: -4px;
          position: absolute;
          top: 0;
          left: 0;
        }
      }

      .no-img {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: url('/img/no-img.png') no-repeat 0 0;
        background-size: cover;
      }
    }
  }
`;

const Index = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [memberData, setMemberData] = useState([]);
  const [api, setApi] = useState(false);

  // api 업데이트
  const onClickCheck = () => {
    setApi(prevApi => !prevApi);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const endpoint = api ? '/apis/member?leaveYn=Y' : '/apis/member';
        const res = await $http.get(endpoint);
        const data = res.data.body;

        const list = data.map(row => {
          return {
            uid: row.uid,
            memName: row.memName,
            deptName: row.deptName,
            rankName: row.rankName,
            jobPositionName: row.jobPositionName,
            jobFamilyName: row.jobFamilyName,
            companyTelNumber: row.companyTelNumber,
            mobileNumber: row.mobileNumber,
            emailAddress: row.emailAddress,
            displayName: row.displayName,
            attachUid: row.attachUid,
          };
        });
        setMemberData(list);

        console.log(list);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [api]);

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setIsLoading(true);
    });
    router.events.on('routeChangeComplete', () => {
      setIsLoading(false);
    });
  });
  //탭메뉴
  const filterList = [
    { label: '전체', value: 'All' },
    { label: 'BXD', value: 'BXD' },
    { label: 'DCD', value: 'DCD' },
    { label: 'NXC', value: 'NXC' },
    { label: '세컨즈팩토리', value: '세컨즈팩토리' },
    { label: '경영지원', value: '경영전략' },
  ];
  const [selectedFilter, setSelectedFilter] = useState('All');
  const onClickFilterChange = value => setSelectedFilter(value);

  const filteredData =
    selectedFilter !== 'All'
      ? memberData.filter(row => row.deptName === selectedFilter)
      : memberData;

  return (
    <Section>
      <FilterTab>
        <div className="content-head">
          <ul className="left">
            <Filter
              filterList={filterList}
              selectedFilter={selectedFilter}
              onFilterChange={onClickFilterChange}
            />
          </ul>
          <span className="right">
            <Checkbox onClick={onClickCheck}>퇴사자 포함 보기</Checkbox>
          </span>
        </div>
        {isLoading ? (
          <Spin
            style={{
              textAlign: 'center',
              display: 'block',
            }}
          />
        ) : (
          <div className="content">
            <div className="inner">
              {filteredData?.map((item, index) => (
                <div
                  key={item.uid}
                  className={`box ${
                    filteredData === item.deptName || '전체' ? 'visible' : ''
                  }`}
                >
                  <div className="top">
                    <div className="user-img">
                      {item.attachUid ? (
                        <img
                          src={`/apis/attach/image/view/${item.attachUid}`}
                        />
                      ) : (
                        <span className="no-img"></span>
                      )}
                    </div>
                    <div>
                      <div className="member">{item.memName}</div>
                      <div className="row">
                        <span>{item.deptName} / </span>
                        <span>{item.rankName} / </span>
                        <span>{item.jobPositionName}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="row">
                      <span className="icon">
                        <UserOutlined />
                      </span>
                      <span>{item.jobFamilyName}</span>
                    </div>
                    <div className="row">
                      <span className="icon">
                        <PhoneOutlined />
                      </span>
                      <span>{item.companyTelNumber} / </span>
                      <span>{item.mobileNumber}</span>
                    </div>
                    <div className="row">
                      <span className="icon">
                        <MailOutlined />
                      </span>
                      <span>
                        <CopyText>{item.emailAddress}</CopyText>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </FilterTab>
    </Section>
  );
};

export default Index;

Index.title = '임직원 정보';
