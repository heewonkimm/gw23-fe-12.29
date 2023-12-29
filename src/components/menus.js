import Link from 'next/link';

import {
  Briefcase,
  FileText,
  LayoutGrid,
  LayoutList,
  User,
  Users,
} from '@/components/icons';

const menus = [
  {
    key: '/',
    label: <Link href="/">Dashboard</Link>,
    icon: <LayoutGrid size={24} />,
  },
  {
    key: '/edms',
    label: '전자결재',
    icon: <FileText size={24} />,
    children: [
      {
        key: '/edms/documents',
        label: <Link href="/edms/documents">기안신청</Link>,
      },
      {
        key: '/edms/mylist',
        label: <Link href="/edms/mylist/proceeding">내 문서함</Link>,
        children: [
          {
            key: '/edms/mylist/proceeding',
            label: <Link href="/edms/mylist/proceeding">진행 문서함</Link>,
          },
          {
            key: '/edms/mylist/completed',
            label: <Link href="/edms/mylist/completed">완료 문서함</Link>,
          },
          {
            key: '/edms/mylist/rejected',
            label: <Link href="/edms/mylist/rejected">반려 문서함</Link>,
          },
          {
            key: '/edms/mylist/temp',
            label: <Link href="/edms/mylist/temp">임시저장함</Link>,
          },
          {
            key: '/edms/mylist/canceled',
            label: <Link href="/edms/mylist/canceled">취소 저장함</Link>,
          },
        ],
      },
      {
        key: '/edms/requestlist',
        label: <Link href="/edms/requestlist/proceeding">요청 문서함</Link>,
        children: [
          {
            key: '/edms/requestlist/ready',
            label: <Link href="/edms/requestlist/ready">대기 문서함</Link>,
          },
          {
            key: '/edms/requestlist/complete',
            label: <Link href="/edms/requestlist/complete">완료 문서함</Link>,
          },
          {
            key: '/edms/requestlist/reject',
            label: <Link href="/edms/requestlist/reject">반려 문서함</Link>,
          },
          {
            key: '/edms/requestlist/cc',
            label: <Link href="/edms/requestlist/cc">참조 저장함</Link>,
          },
          {
            key: '/edms/requestlist/cancel',
            label: <Link href="/edms/requestlist/cancel">취소 저장함</Link>,
          },
        ],
      },
      {
        key: '/edms/alllist',
        label: <Link href="/edms/alllist">전체 문서함</Link>,
      },
    ],
  },
  {
    key: '/hrms',
    label: '인사',
    icon: <Users size={24} />,
    children: [
      {
        key: '/hrms/member',
        label: <Link href="/hrms/member">임직원 정보</Link>,
      },
      {
        key: '/hrms/admin',
        label: <Link href="/hrms/admin">임직원 관리</Link>,
      },
      {
        key: '/hrms/profile',
        label: <Link href="/hrms/profile">프로필 관리</Link>,
      },
      {
        key: '/hrms/vacation',
        label: <Link href="/hrms/vacation">휴가 관리</Link>,
      },
      {
        key: '/hrms/holiday',
        label: <Link href="/hrms/holiday">휴일 관리</Link>,
      },
    ],
  },
  {
    key: '/pms',
    label: '프로젝트',
    icon: <Briefcase size={24} />,
    children: [
      { key: '/pms/index', label: <Link href="#">견적</Link>, disabled: false },
    ],
  },
  {
    key: '/cms',
    label: '홈페이지 관리',
    icon: <LayoutList size={24} />,
    children: [
      {
        key: '/cms/projectManage',
        label: <Link href="/cms/projectManage">프로젝트 전시 관리</Link>,
      },
      {
        key: '/cms/projectRequest',
        label: <Link href="/cms/projectRequest">프로젝트 의뢰 관리</Link>,
      },
    ],
  },
  {
    key: '/mypage',
    label: '마이페이지',
    icon: <User size={24} />,
    children: [
      {
        key: '/mypage/vacation',
        label: <Link href="/mypage/vacation">휴가 정보</Link>,
      },
      {
        key: '/mypage/profile',
        label: <Link href="/mypage/profile">프로필 정보</Link>,
      },
    ],
  },
];

export default menus;
