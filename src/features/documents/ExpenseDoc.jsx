import Approval from '@/components/document/Approval';
import AttachImage from '@/components/document/AttachImage';
import Document from '@/components/document/Document';
import EditorContent from '@/components/document/EditorContent';
import Heading from '@/components/document/Heading';
import Info from '@/components/document/Info';
import Stamp from '@/components/document/Stamp';
import Table from '@/components/document/Table';
import {
  filterAttachImage,
  getApprovalColor,
  getApprovalText,
  getMemberColor,
  getMemberText,
} from '@/features/documents/utils';

const ExpenseDoc = ({
  title = '',
  content = [],
  memberName = '',
  memberDept = '',
  memberRank = '',
  createdDate = '',
  status = '',
  approvalList = [],
  attachList = [],
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
  const approval6 = approvalList.filter(
    ({ approvalOrder }) => approvalOrder === 5,
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
  const approval6StampColor = getApprovalColor(approval6?.approvalStatus);
  const approval6StampTxt = getApprovalText(approval6?.approvalStatus);

  return (
    <Document role="document" {...props}>
      <Document.Inner>
        <Document.Header>
          <Heading align="center">지출결의서</Heading>
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
            <Approval.Item>
              <Approval.Title>대표이사</Approval.Title>
              <Approval.Content>
                <Approval.Con>
                  {approval6?.approvalStatus && (
                    <>
                      <Stamp color={approval6StampColor}>
                        {approval6StampTxt}
                      </Stamp>
                      <Approval.Name>{approval6.memberName}</Approval.Name>
                    </>
                  )}
                </Approval.Con>
                <Approval.Date>
                  {approval6?.approvalDate?.split(' ')[0] || '-'}
                </Approval.Date>
              </Approval.Content>
            </Approval.Item>
          </Approval>
          <Info>
            <Info.Item style={{ flexBasis: '25%' }}>
              <Info.Title>작성자&nbsp;:&nbsp;</Info.Title>
              <Info.Content>{memberName}</Info.Content>
            </Info.Item>
            <Info.Item style={{ flexBasis: '25%' }}>
              <Info.Title>소속&nbsp;:&nbsp;</Info.Title>
              <Info.Content>{memberDept}</Info.Content>
            </Info.Item>
            <Info.Item style={{ flexBasis: '25%' }}>
              <Info.Title>직급&nbsp;:&nbsp;</Info.Title>
              <Info.Content>{memberRank}</Info.Content>
            </Info.Item>
            <Info.Item style={{ flexBasis: '25%' }}>
              <Info.Title>지급일자&nbsp;:&nbsp;</Info.Title>
              <Info.Content>{content[0]?.payDate}</Info.Content>
            </Info.Item>
            <Info.Item style={{ flexBasis: '100%' }}>
              <Info.Title>지출금액&nbsp;:&nbsp;</Info.Title>
              <Info.Content>
                {content[0]?.payHistory
                  .reduce((acc, current) => acc + Number(current.price), 0)
                  .toLocaleString() + '원'}
              </Info.Content>
            </Info.Item>
          </Info>
          <Heading as="h2">지출 내역</Heading>
          <Table align="center">
            <table>
              <caption>지출내역 테이블</caption>
              <colgroup>
                <col width="80px" />
                <col width="120px" />
                <col />
                <col width="120px" />
                <col />
                <col width="120px" />
              </colgroup>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>구분</th>
                  <th>기간</th>
                  <th>금액</th>
                  <th>사용내역</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody>
                {content[0]?.payHistory.map(
                  (
                    { division, usedDate, price, usedHistory, remark },
                    index,
                  ) => {
                    return (
                      <tr key={usedDate + usedHistory}>
                        <td>{index + 1}</td>
                        <td>{division}</td>
                        <td>
                          {usedDate.split(',').length > 1
                            ? usedDate.split(',').join(' ~ ')
                            : usedDate}
                        </td>
                        <td>{`${Number(price).toLocaleString()}원`}</td>
                        <td>{usedHistory}</td>
                        <td>{remark}</td>
                      </tr>
                    );
                  },
                )}
              </tbody>
            </table>
          </Table>
          <Heading as="h2">{title}</Heading>
          <EditorContent>{content[0]?.content}</EditorContent>
          {filterAttachImage(attachList).length > 0 && (
            <>
              <Heading as="h2" className="break-before-page">
                영수증 첨부 내역
              </Heading>
              {filterAttachImage(attachList)
                .sort((a, b) => a.innerOrder - b.innerOrder)
                .map(({ uid, displayName }) => (
                  <AttachImage
                    key={uid}
                    src={`/apis/attach/image/view/${uid}`}
                    alt={displayName}
                  />
                ))}
            </>
          )}
        </Document.Main>
      </Document.Inner>
    </Document>
  );
};

export default ExpenseDoc;
