import Link from 'next/link';
import { useRouter } from 'next/router';

import menus from '@/components/menus';
import { LeftOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import _ from 'lodash-core';
import { useSelector } from 'react-redux';

import { Avatar, Button, Divider, Layout, Menu, Space } from 'antd';

const { Sider } = Layout;

const AntdSider = styled(Sider)`
  .ant-app .ant-layout & {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    box-sizing: border-box;
    height: 100dvh;
    padding: 2.4rem 1.6rem 3.2rem;
    overflow-x: auto;
    overflow-y: hidden;
    background-color: var(--white-color);
    box-shadow: 2px 0px 40px 0px rgba(0, 0, 0, 0.08);
    z-index: 3;
  }
`;
const LogoLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.4rem;
`;
const Logo = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  width: 12rem;
  margin: 0 auto;
  opacity: 1;
  transition: opacity 0.2s;

  .is-sidebar-collapsed & {
    opacity: 0;
  }
`;
const LogoImg = styled.div`
  overflow: hidden;
  width: 100%;
  height: 0;
  max-height: 0;
  padding-top: 25.94%;
  background: url('/img/logo.png') 0 0 no-repeat;
  background-size: cover;
  mix-blend-mode: difference;
`;
const LogoTxt = styled.div`
  color: var(--greyscale-900-color);
  font-size: 1.4rem;
  font-weight: 700;
`;
const Logo2 = styled.div`
  overflow: hidden;
  width: 4.8rem;
  height: 0;
  max-height: 0;
  padding-top: 3.3rem;
  background: url('/img/logo2.png') 0 0 no-repeat;
  background-size: cover;
  opacity: 0;
  transition: opacity 0.2s;

  .is-sidebar-collapsed & {
    opacity: 1;
  }
`;
const Profile = styled.div`
  display: flex;
  align-item: center;
  margin-bottom: 2.4rem;
  padding: 0 2rem;
  transition: padding 0.2s;

  .is-sidebar-collapsed & {
    padding: 0 0.4rem;
  }
`;
const ProfileAvatar = styled(Avatar)`
  margin-right: 1.2rem;
  background-image: url(${props => props.picture});
  background-size: cover;
  flex-shrink: 0;
`;
const ProfileInfo = styled.div`
  flex-shrink: 0;
  opacity: 1;
  transition: opacity 0.2s;

  .is-sidebar-collapsed & {
    opacity: 0;
  }
`;
const ProfileTitle = styled.div`
  color: var(--greyscale-900-color);
  font-size: 1.4rem;
  font-weight: 600;
`;
const ProfileDesc = styled.div`
  color: var(--greyscale-500-color);
  font-size: 1.2rem;
  font-weight: 500;
`;
const AntdMenu = styled(Menu)`
  .ant-app .ant-layout .ant-menu& {
    border-inline-end: 0;

    // 1depth
    & > .ant-menu-item {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.6rem;
      width: 100%;
      height: 4.8rem;
      line-height: 4.8rem;
      padding: 0 1.6rem;
      transition:
        padding 0.2s,
        margin 0.2s;
      & > .ant-menu-title-content {
        color: var(--greyscale-500-color);
        font-size: 1.6rem;
      }
      &.ant-menu-item-selected {
        & > .ant-menu-title-content {
          color: var(--primary-600-color);
        }
      }
      svg {
        flex-shrink: 0;
      }
    }
    .ant-menu-submenu-title {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.6rem;
      width: 100%;
      height: 4.8rem;
      line-height: 4.8rem;
      padding: 0 1.6rem;
      transition:
        padding 0.2s,
        margin 0.2s;
      .ant-menu-title-content {
        color: var(--greyscale-500-color);
        font-size: 1.6rem;
      }
      svg {
        flex-shrink: 0;
      }
    }
    .ant-menu-submenu-selected {
      .ant-menu-submenu-title {
        .ant-menu-title-content {
          color: var(--primary-600-color);
        }
      }
    }

    // 2depth
    .ant-menu-sub {
      background-color: transparent;
      & > .ant-menu-item {
        height: 3.8rem;
        line-height: 3.8rem;
        padding-left: 4rem !important;
        .ant-menu-title-content {
          padding-left: 1rem;
          color: var(--greyscale-500-color);
          font-size: 1.6rem;
          position: relative;

          &::before {
            content: '';
            display: inline-block;
            width: 3px;
            height: 3px;
            border-radius: 50%;
            background-color: var(--greyscale-500-color);
            vertical-align: middle;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }
        }

        &.ant-menu-item-selected {
          .ant-menu-title-content {
            color: var(--primary-600-color);

            &::before {
              background-color: var(--primary-600-color);
            }
          }
        }
      }
    }
  }

  .ant-app .is-sidebar-collapsed .ant-menu& {
    & > .ant-menu-item {
      width: 100%;
      padding: 0 0.8rem;
      margin-left: 0;
      margin-right: 0;
    }
    .ant-menu-submenu-title {
      width: 100%;
      padding: 0 0.8rem;
      margin-left: 0;
      margin-right: 0;
    }
    .ant-menu-title-content {
      display: none;
    }
  }

  .ant-app .ant-layout .ant-menu& {
    --icon-color: var(--greyscale-500-color);

    .ant-menu-item-selected {
      --icon-color: var(--primary-600-color);
    }
    .ant-menu-submenu-selected {
      --icon-color: var(--primary-600-color);
    }
  }
`;

const Bottom = styled(Space)`
  .ant-app & {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 1.6rem;
  }
`;

const CollapseButton = styled(Button)``;

const deptName = {
  10: 'BXD',
  20: 'NXC',
  30: 'DCD',
  40: '세컨즈팩토리',
  50: '경영전략',
};

const rankName = {
  10: '사원',
  20: '대리',
  30: '과장',
  40: '차장',
  50: '부장',
  60: '이사',
  70: '대표',
};

const sidebarMenu = _.cloneDeep(menus).map(menu => {
  const has3depth = menu.children?.some(child => child.children?.length > 0);

  if (has3depth) {
    menu.children = menu.children.map(child => {
      if (child.children?.length > 0) {
        delete child.children;
      }
      return child;
    });
  }

  return menu;
});

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

const Sidebar = ({ isSidebarCollapsed, setIsSidebarCollapsed }) => {
  const { pathname } = useRouter();
  const { name, dept, rank, picture } = useSelector(state => state.user);

  return (
    <AntdSider
      trigger={null}
      collapsible
      collapsed={isSidebarCollapsed}
      width={250}
      className="common-sidebar"
    >
      <LogoLink href="/">
        {isSidebarCollapsed ? (
          <Logo2 />
        ) : (
          <Logo>
            <LogoImg>Adn Style</LogoImg>
            <LogoTxt>Groupware</LogoTxt>
          </Logo>
        )}
      </LogoLink>
      <Divider style={{ margin: '1rem 0 2rem' }} />
      <Profile>
        <ProfileAvatar size={40} picture={picture} />
        <ProfileInfo>
          <ProfileTitle>{name}</ProfileTitle>
          <ProfileDesc>
            {deptName[dept]} / {rankName[rank]}
          </ProfileDesc>
        </ProfileInfo>
      </Profile>
      <AntdMenu
        mode="inline"
        items={sidebarMenu}
        defaultOpenKeys={[`/${pathname.split('/').slice(1)[0]}`]}
        defaultSelectedKeys={getPathSegments(pathname)}
        selectedKeys={getPathSegments(pathname)}
      />
      <Bottom
        style={{ justifyContent: isSidebarCollapsed ? 'center' : 'flex-end' }}
      >
        <CollapseButton
          type="text"
          icon={
            <LeftOutlined
              style={{
                fontSize: 20,
                color: 'var(--greyscale-600-color)',
                transform: `rotate(${isSidebarCollapsed ? 180 : 0}deg)`,
              }}
            />
          }
          onClick={() => {
            setIsSidebarCollapsed(prevValue => !prevValue);
          }}
        />
      </Bottom>
    </AntdSider>
  );
};

export default Sidebar;
