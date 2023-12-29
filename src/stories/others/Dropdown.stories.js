import { DownOutlined } from '@ant-design/icons';

import { Button, Dropdown, Space } from 'antd';

Dropdown.Button.displayName = 'Dropdown.Button';

Dropdown.defaultProps = {
  trigger: 'hover',
  placement: 'bottomLeft',
};

export default {
  title: 'Others/Dropdown',
  component: Dropdown,
  argTypes: {
    menu: {
      control: 'object',
    },
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'contextMenu'],
      defaultValue: {
        summary: 'hover',
      },
    },
    arrow: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    placement: {
      control: 'select',
      options: [
        'bottomLeft',
        'bottom',
        'bottomRight',
        'topLeft',
        'top',
        'topRight',
      ],
      defaultValue: {
        summary: 'bottomLeft',
      },
    },
    disabled: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
  },
  args: {
    menu: {
      items: [
        { key: '1', label: <a href="#">첫번째 메뉴</a> },
        { key: '2', label: <a href="#">두번째 메뉴</a> },
        { key: '3', label: <a href="#">세번째 메뉴</a> },
      ],
    },
    placement: 'bottomLeft',
    trigger: 'hover',
    arrow: false,
    disabled: false,
  },
};

export const Default = {
  render: ({ ...props }) => (
    <Dropdown {...props}>
      <a>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  ),
};

export const Type = {
  render: ({ menu }) => (
    <>
      <Dropdown menu={menu}>
        <a>
          <Space>
            Hover me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      <br />
      <br />
      <Dropdown menu={menu}>
        <Button>Hover me</Button>
      </Dropdown>
      <br />
      <br />
      <Dropdown.Button menu={menu}>Submit</Dropdown.Button>
    </>
  ),
};

export const Arrow = {
  render: ({ menu }) => (
    <>
      <Dropdown menu={menu} placement="bottomLeft" arrow>
        <Button>bottomLeft</Button>
      </Dropdown>
      <Dropdown menu={menu} placement="bottom" arrow>
        <Button>bottom</Button>
      </Dropdown>
      <Dropdown menu={menu} placement="bottomRight" arrow>
        <Button>bottomRight</Button>
      </Dropdown>
      <Dropdown menu={menu} placement="topLeft" arrow>
        <Button>topLeft</Button>
      </Dropdown>
      <Dropdown menu={menu} placement="top" arrow>
        <Button>top</Button>
      </Dropdown>
      <Dropdown menu={menu} placement="topRight" arrow>
        <Button>topRight</Button>
      </Dropdown>
    </>
  ),
};

export const Trigger = {
  render: ({ menu }) => (
    <>
      <Dropdown menu={menu}>
        <Button>Hover me</Button>
      </Dropdown>
      <Dropdown menu={menu} trigger="click">
        <Button>Click me</Button>
      </Dropdown>
      <Dropdown menu={menu} trigger="contextMenu">
        <Button>Right Click on here</Button>
      </Dropdown>
    </>
  ),
};

export const Status = () => {
  const itemsDisabled = {
    items: [
      { key: '1', label: <a href="#">첫번째 메뉴</a>, disabled: true },
      { key: '2', label: <a href="#">두번째 메뉴</a> },
      { key: '3', label: <a href="#">세번째 메뉴</a>, disabled: true },
    ],
  };

  return (
    <>
      <Dropdown menu={itemsDisabled}>
        <a>
          <Space>
            Hover me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      <br />
      <Dropdown menu={itemsDisabled} disabled>
        <a>
          <Space>
            Hover me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </>
  );
};
