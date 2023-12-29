export const getMemberText = status => {
  switch (status) {
    case 'temp':
      return '대기';
    case 'selfCanceled':
      return '취소';
    case 'managerCanceled':
      return '취소';
    default:
      return '승인';
  }
};

export const getMemberColor = status => {
  switch (status) {
    case 'temp':
      return 'green';
    case 'selfCanceled':
      return 'red';
    case 'managerCanceled':
      return 'red';
    default:
      return 'blue';
  }
};

export const getApprovalText = approvalStatus => {
  switch (approvalStatus) {
    case 'Y':
      return '승인';
    case 'R':
      return '대기';
    case 'N':
      return '반려';
    default:
      return null;
  }
};

export const getApprovalColor = approvalStatus => {
  switch (approvalStatus) {
    case 'Y':
      return 'blue';
    case 'R':
      return 'green';
    case 'N':
      return 'red';
    default:
      return null;
  }
};

export const getVacationType = code => {
  switch (code) {
    case 'AAA':
      return '일반';
    case 'ABA':
      return '일반';
    case 'BAA':
      return '리프레시';
    case 'BBA':
      return '출산';
    case 'BCA':
      return '육아';
    case 'CAA':
      return '예비군';
    case 'CAB':
      return '민방위';
    case 'CBA':
      return '본인결혼';
    case 'CBB':
      return '자녀결혼';
    case 'CBC':
      return '부모사망';
    case 'CBD':
      return '배우자/자매 사망';
    case 'CBE':
      return '형제자매 사망';
    case 'CBF':
      return '승중상';
    case 'DAA':
      return '프로젝트';
    case 'EAA':
      return '선차감';
    case 'FAA':
      return '무급';
    default:
      return null;
  }
};

export const getVacationDay = division => {
  switch (division) {
    case 'day':
      return 1;
    case 'am':
      return 0.5;
    case 'pm':
      return 0.5;
    default:
      return 0;
  }
};

export const calcTotalVacationDays = content =>
  content.reduce((acc, current) => acc + getVacationDay(current.division), 0);

export const filterAttachImage = attachList => {
  const allowExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

  return attachList.filter(({ displayName }) => {
    const extension = displayName.split('.').pop();

    return allowExtensions.includes(extension);
  });
};
