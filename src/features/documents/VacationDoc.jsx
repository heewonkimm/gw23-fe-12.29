import Approval from '@/components/document/Approval';
import Document from '@/components/document/Document';
import Heading from '@/components/document/Heading';
import Info from '@/components/document/Info';
import Stamp from '@/components/document/Stamp';
import Table from '@/components/document/Table';
import {
  calcTotalVacationDays,
  getApprovalColor,
  getApprovalText,
  getMemberColor,
  getMemberText,
  getVacationDay,
  getVacationType,
} from '@/features/documents/utils';

const VacationDoc = ({
  content = [],
  memberName = '',
  memberDept = '',
  memberRank = '',
  createdDate = '',
  status = '',
  approvalList = [],
  acquirerAgreedList = [],
  ...props
}) => {
  const memberStampColor = getMemberColor(status);
  const memberStampTxt = getMemberText(status);

  const approval1 = approvalList.filter(
    ({ approvalOrder }) => approvalOrder === 0,
  )[0];
  const approval2 = approvalList.filter(
    ({ approvalOrder }) => approvalOrder === 1,
  )[0];
  const approval3 = approvalList.filter(
    ({ approvalOrder }) => approvalOrder === 2,
  )[0];
  const approval4 = approvalList.filter(
    ({ approvalOrder }) => approvalOrder === 3,
  )[0];
  const approval5 = approvalList.filter(
    ({ approvalOrder }) => approvalOrder === 4,
  )[0];

  const approval1StampColor = getApprovalColor(approval1?.approvalStatus);
  const approval1StampTxt = getApprovalText(approval1?.approvalStatus);
  const approval2StampColor = getApprovalColor(approval2?.approvalStatus);
  const approval2StampTxt = getApprovalText(approval2?.approvalStatus);
  const approval3StampColor = getApprovalColor(approval3?.approvalStatus);
  const approval3StampTxt = getApprovalText(approval3?.approvalStatus);
  const approval4StampColor = getApprovalColor(approval4?.approvalStatus);
  const approval4StampTxt = getApprovalText(approval4?.approvalStatus);
  const approval5StampColor = getApprovalColor(approval5?.approvalStatus);
  const approval5StampTxt = getApprovalText(approval5?.approvalStatus);

  return (
    <Document role="document" {...props}>
      <Document.Inner>
        <Document.Header>
          <Heading align="center">휴가신청서</Heading>
        </Document.Header>
        <Document.Main>
          <Approval>
            <Approval.Item style={{ marginRight: 'auto' }}>
              <Approval.Title>신청자</Approval.Title>
              <Approval.Content>
                <Approval.Con>
                  <Stamp color={memberStampColor}>{memberStampTxt}</Stamp>
                  <Approval.Name>{memberName}</Approval.Name>
                </Approval.Con>
                <Approval.Date>{createdDate.split(' ')[0]}</Approval.Date>
              </Approval.Content>
            </Approval.Item>
            <Approval.Item>
              <Approval.Title>신청부서</Approval.Title>
              <Approval.Content>
                <Approval.Tit>부서장</Approval.Tit>
                <Approval.Con>
                  {approval1?.approvalStatus && (
                    <>
                      <Stamp color={approval1StampColor}>
                        {approval1StampTxt}
                      </Stamp>
                      <Approval.Name>{approval1.memberName}</Approval.Name>
                    </>
                  )}
                </Approval.Con>
                <Approval.Date>
                  {approval1?.approvalDate?.split(' ')[0] || '-'}
                </Approval.Date>
              </Approval.Content>
            </Approval.Item>
            <Approval.Item>
              <Approval.Title>경영전략</Approval.Title>
              <Approval.Content>
                <Approval.Tit>{approval2?.originMemberName}</Approval.Tit>
                <Approval.Con>
                  {approval2?.approvalStatus && (
                    <>
                      <Stamp color={approval2StampColor}>
                        {approval2StampTxt}
                      </Stamp>
                      <Approval.Name>{approval2.memberName}</Approval.Name>
                    </>
                  )}
                </Approval.Con>
                <Approval.Date>
                  {approval2?.approvalDate?.split(' ')[0] || '-'}
                </Approval.Date>
              </Approval.Content>
              <Approval.Content>
                <Approval.Tit>{approval3?.originMemberName}</Approval.Tit>
                <Approval.Con>
                  {approval3?.approvalStatus && (
                    <>
                      <Stamp color={approval3StampColor}>
                        {approval3StampTxt}
                      </Stamp>
                      <Approval.Name>{approval3.memberName}</Approval.Name>
                    </>
                  )}
                </Approval.Con>
                <Approval.Date>
                  {approval3?.approvalDate?.split(' ')[0] || '-'}
                </Approval.Date>
              </Approval.Content>
            </Approval.Item>
            <Approval.Item>
              <Approval.Title>경영지원</Approval.Title>
              <Approval.Content>
                <Approval.Tit>담당</Approval.Tit>
                <Approval.Con>
                  {approval4?.approvalStatus && (
                    <>
                      <Stamp color={approval4StampColor}>
                        {approval4StampTxt}
                      </Stamp>
                      <Approval.Name>{approval4.memberName}</Approval.Name>
                    </>
                  )}
                </Approval.Con>
                <Approval.Date>
                  {approval4?.approvalDate?.split(' ')[0] || '-'}
                </Approval.Date>
              </Approval.Content>
              <Approval.Content>
                <Approval.Tit>차장</Approval.Tit>
                <Approval.Con>
                  {approval5?.approvalStatus && (
                    <>
                      <Stamp color={approval5StampColor}>
                        {approval5StampTxt}
                      </Stamp>
                      <Approval.Name>{approval5.memberName}</Approval.Name>
                    </>
                  )}
                </Approval.Con>
                <Approval.Date>
                  {approval5?.approvalDate?.split(' ')[0] || '-'}
                </Approval.Date>
              </Approval.Content>
            </Approval.Item>
          </Approval>
          <Info>
            <Info.Item style={{ flexBasis: '33.33%' }}>
              <Info.Title>이름&nbsp;:&nbsp;</Info.Title>
              <Info.Content>{memberName}</Info.Content>
            </Info.Item>
            <Info.Item style={{ flexBasis: '33.33%' }}>
              <Info.Title>소속&nbsp;:&nbsp;</Info.Title>
              <Info.Content>{memberDept}</Info.Content>
            </Info.Item>
            <Info.Item style={{ flexBasis: '33.33%' }}>
              <Info.Title>직급&nbsp;:&nbsp;</Info.Title>
              <Info.Content>{memberRank}</Info.Content>
            </Info.Item>
            <Info.Item style={{ flexBasis: '100%' }}>
              <Info.Title>휴가사유&nbsp;:&nbsp;</Info.Title>
              <Info.Content>{content[0]?.remark}</Info.Content>
            </Info.Item>
          </Info>
          <Heading as="h2">
            휴가기간 ({calcTotalVacationDays(content)}일)
          </Heading>
          <Table>
            <table>
              <caption>휴가기간 테이블</caption>
              <colgroup>
                <col width="80px" />
                <col width="180px" />
                <col span="2" />
              </colgroup>
              <thead>
                <tr>
                  <th style={{ textAlign: 'center' }}>No.</th>
                  <th style={{ textAlign: 'center' }}>구분</th>
                  <th style={{ textAlign: 'center' }}>사용일수</th>
                  <th style={{ textAlign: 'center' }}>사용기간</th>
                </tr>
              </thead>
              <tbody>
                {content?.map(({ division, type, yyyyMMdd }, index) => (
                  <tr key={division + yyyyMMdd}>
                    <td style={{ textAlign: 'center' }}>{index + 1}</td>
                    <td style={{ textAlign: 'center' }}>
                      {getVacationType(type)}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {getVacationDay(division)} 일
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {yyyyMMdd}
                      {division === 'am' && ' (오전)'}
                      {division === 'pm' && ' (오후)'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Table>
          {acquirerAgreedList?.length > 0 && (
            <>
              <Heading as="h2">휴가자 업무 인수인계 계획</Heading>
              <Table>
                <table>
                  <caption>휴가자 업무 인수인계 계획 테이블</caption>
                  <colgroup>
                    <col width="80px" />
                    <col width="110px" />
                    <col />
                    <col width="140px" />
                    <col width="110px" />
                    <col width="110px" />
                    <col width="140px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'center' }}>No.</th>
                      <th style={{ textAlign: 'center' }}>구분</th>
                      <th style={{ textAlign: 'center' }}>주요내용</th>
                      <th style={{ textAlign: 'center' }}>고객사명</th>
                      <th style={{ textAlign: 'center' }}>인계자</th>
                      <th style={{ textAlign: 'center' }}>인수자</th>
                      <th style={{ textAlign: 'center' }}>확인</th>
                    </tr>
                  </thead>
                  <tbody>
                    {acquirerAgreedList.map((item, index) => (
                      <tr key={item.workContent}>
                        <td style={{ textAlign: 'center' }}>{index + 1}</td>
                        <td style={{ textAlign: 'center' }}>{memberName}</td>
                        <td>{item.workContent}</td>
                        <td style={{ textAlign: 'center' }}>{item.company}</td>
                        <td style={{ textAlign: 'center' }}>{memberName}</td>
                        <td style={{ textAlign: 'center' }}>
                          {item.memberName}
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          {
                            <>
                              <Stamp
                                color="blue"
                                size="small"
                                style={{ marginRight: 6 }}
                              >
                                확인
                              </Stamp>
                              {item.memberName}
                            </>
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Table>
            </>
          )}
          <Heading as="h3" align="center" style={{ margin: '250px 0 100px' }}>
            상기와 같이 휴가를 신청합니다.
          </Heading>
        </Document.Main>
      </Document.Inner>
    </Document>
  );
};

export default VacationDoc;
