import { useCallback, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { Logout } from '@/components/icons';
import menus from '@/components/menus';
import MemberChangeModals from '@/features/modals/MemberChangeModal';
import { $http } from '@/lib/api';
import * as userActions from '@/store/modules/user';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { getCookie } from 'cookies-next';
import jwt_decode from 'jwt-decode';
import _ from 'lodash-core';
import { useDispatch } from 'react-redux';

import { App, Button, ConfigProvider, Flex, Layout, Menu, Modal } from 'antd';

const { Header: AntdHeader } = Layout;

const layoutTheme = {
  components: {
    Layout: {
      headerBg: 'var(--white-color)',
      headerColor: 'var(--greyscale-900-color)',
      headerHeight: 88,
      headerPadding: '0 3rem 0 3rem',
    },
  },
};

const topMenuTheme = {
  components: {
    Menu: {
      activeBarHeight: 0,
      itemPaddingInline: 12,
      itemColor: 'var(--greyscale-400-color)',
      horizontalItemHoverColor: 'var(--greyscale-900-color)',
      horizontalItemSelectedColor: 'var(--greyscale-900-color)',
    },
  },
};

const bottomMenuTheme = {
  components: {
    Menu: {
      activeBarHeight: 0,
      itemPaddingInline: 12,
      itemColor: 'var(--greyscale-400-color)',
      itemHoverColor: 'var(--greyscale-400-color)',
      horizontalItemHoverColor: 'var(--greyscale-400-color)',
      horizontalItemSelectedColor: 'var(--primary-600-color)',
    },
  },
};

const styles = {
  header: css`
    .ant-app & {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      position: sticky;
      top: 0;
      z-index: 1;
      box-shadow: 2px 0px 40px 0px rgba(0, 0, 0, 0.04);
      transition: height 0.1s;
      .btn-member-change {
        position: absolute;
        top: 0;
        right: 0;
        overflow: hidden;
        width: 10px;
        max-height: 0;
        height: 0;
        padding-top: 10px;
      }
    }
  `,
  topMenu: css`
    .ant-app & {
      flex-grow: 1;
      line-height: 8.8rem !important;
      border-bottom: 0;
      font-size: 2.2rem;
      font-weight: 600;

      .ant-menu-item {
        &:not(:last-child) {
          margin-right: 1rem;
        }
      }
    }
  `,
  utilButton: css`
    .ant-app & {
      font-size: 1.4rem;
      color: var(--greyscale-500-color);
    }
  `,
  bottomMenu: css`
    .ant-app & {
      .ant-menu-item {
        line-height: 4.2rem;
        font-size: 2rem;
        border-radius: 0.8rem;

        &:not(:last-child) {
          margin-right: 1rem;
        }

        &:hover {
          color: var(--greyscale-400-color);
          background-color: var(--greyscale-50-color);
        }

        &.ant-menu-item-selected {
          color: var(--primary-600-color);
          background-color: var(--primary-50-color);
        }
      }
    }
  `,
};

const Top = styled(Flex)`
  width: 100%;
  height: 8.8rem;
`;

const UtilMenu = styled(Flex)`
  flex-shrink: 0;
`;

const Bottom = styled(Flex)`
  width: 100%;
  height: 7rem;
  border-top: 1px solid var(--greyscale-100-color);
`;

const getPathSegments = path => {
  const pathSlice = path.split('/');
  let result = [];

  for (let i = 0; i < pathSlice.length; i++) {
    if (i === 0) {
      result.push(`${pathSlice.join('/')}`);
    } else if (i === pathSlice.length - 1) {
      result.push('/');
    } else {
      result.push(`${pathSlice.slice(0, -i).join('/')}`);
    }
  }

  return result.reverse().slice(1);
};

const getMenuList = pathname => {
  const result = _.cloneDeep(menus)
    .filter(menu => menu.key === getPathSegments(pathname).at(0))
    .at(0)?.children;

  result?.forEach(menu => {
    if (menu.children) {
      delete menu.children;
    }
  });

  return result;
};

const getSubMenuList = pathname => {
  const result = _.cloneDeep(menus)
    .filter(menu => menu.key === getPathSegments(pathname).at(0))
    .at(0)
    ?.children?.filter(menu => menu.key === getPathSegments(pathname).at(1))
    .at(0)?.children;

  result?.forEach(menu => {
    if (menu.children) {
      delete menu.children;
    }
  });

  return result;
};

const Header = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState('');
  const [menuList, setMenuList] = useState([]);
  const [subMenuList, setSubMenuList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memberList, setMemberList] = useState([]);
  const [changeMember, setChangeMember] = useState([]);
  const dispatch = useDispatch();
  const { message } = App.useApp();

  const logout = useCallback(async () => {
    try {
      await $http.post('/apis/auth/logout');

      router.push('/signIn');
    } catch (error) {
      console.error(error);
    }
  }, []);

  const showModal = () => {
    getMemberData();
  };
  const handleOk = () => {
    setIsModalOpen(false);
    // console.log(changeMember);
    getChangeMemeberData(changeMember);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const addMember = value => {
    // console.log(value);
    setChangeMember(value);
  };

  const getChangeMemeberData = useCallback(async changeMember => {
    try {
      await $http.get(
        `/apis/token-changes?uid=${changeMember}&secretKey=${process.env.NEXT_PUBLIC_SECRET_KEY}`,
      );

      const token = getCookie('Authorization');
      const userInfo = token && jwt_decode(token);
      dispatch(
        userActions.login({
          ...userInfo,
          isLoggedIn: true,
        }),
      );

      setIsModalOpen(false);
      message.success('유저 정보가 변경되었습니다.');
      // console.log(data.body);
    } catch (error) {
      if (error.code === 403) {
        console.log('접근 권한이 없습니다.');
      }

      message.error('유저 정보 변경에 실패하였습니다.');

      console.error(error);
    }
  }, []);

  const getMemberData = useCallback(async () => {
    try {
      const { data } = await $http.get('/apis/members');

      const list = data.body.map(row => {
        return {
          value: row.uid,
          label: `${row.deptName} / ${row.memName} / ${row.rankName}`,
          name: row.memName,
          rankName: row.rankName,
          jobPositionName: row.jobPositionName,
          jobFamilyName: row.jobFamilyName,
        };
      });
      setMemberList(list);
      setIsModalOpen(true);
      // console.log(data.body);
    } catch (error) {
      if (error.code === 403) {
        console.log('접근 권한이 없습니다.');
      }

      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (currentPath !== router.pathname) {
      setCurrentPath(router.pathname);
      setMenuList(getMenuList(router.pathname));
      setSubMenuList(getSubMenuList(router.pathname));
    }
  }, [router.pathname]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            ...layoutTheme.components.Layout,
            headerHeight: subMenuList ? 158 : 88,
          },
        },
      }}
    >
      <AntdHeader className="common-header" css={styles.header}>
        <Top align="center">
          <ConfigProvider theme={topMenuTheme}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={getPathSegments(router.pathname)}
              selectedKeys={getPathSegments(router.pathname)}
              items={menuList}
              css={styles.topMenu}
            />
          </ConfigProvider>
          <UtilMenu>
            <Button
              type="text"
              size="small"
              icon={<Logout size="21" color="var(--greyscale-500-color)" />}
              onClick={logout}
              css={styles.utilButton}
            >
              로그아웃
            </Button>
          </UtilMenu>
        </Top>
        {subMenuList && (
          <Bottom align="center">
            <ConfigProvider theme={bottomMenuTheme}>
              <Menu
                mode="horizontal"
                // defaultSelectedKeys={
                //   _.cloneDeep(menus)
                //     .filter(
                //       menu =>
                //         menu.key === getPathSegments(router.pathname).at(0),
                //     )
                //     .at(0)
                //     ?.children?.filter(
                //       menu =>
                //         menu.key === getPathSegments(router.pathname).at(1),
                //     )
                //     .at(0)
                //     ?.children?.at(0).key
                // }
                items={subMenuList}
                css={styles.bottomMenu}
              />
            </ConfigProvider>
          </Bottom>
        )}
        {process.env.NODE_ENV !== 'production' && (
          <>
            <button className="btn-member-change" onClick={showModal}>
              결재자정보 변경
            </button>
            <Modal
              title="정보 변경"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              width={520}
              okText="확인"
            >
              <MemberChangeModals list={memberList} addMember={addMember} />
            </Modal>
          </>
        )}
      </AntdHeader>
    </ConfigProvider>
  );
};

export default Header;
