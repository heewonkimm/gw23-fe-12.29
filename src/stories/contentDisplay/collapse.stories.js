import { Collapse } from 'antd';

Collapse.defaultProps = {
  size: 'middle',
};

export default {
  title: 'ContentDisplay/Collapse',
  component: Collapse,

  argTypes: {
    defaultActiveKey: {
      control: 'object',
    },
    items: {
      control: 'object',
    },
    ghost: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    Collapsible: {
      control: 'select',
      options: ['header', 'icon', 'disabled'],
      defaultValue: {
        summary: 'none',
      },
    },
    bordered: {
      description: '사용 안할 시 bordered={false}',
      defaultValue: {
        summary: 'true',
      },
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      defaultValue: {
        summary: 'middle',
      },
    },
  },
  args: {
    defaultActiveKey: ['1'],
    items: [
      {
        key: '1',
        label: '1번 제목',
        children: <p>1번 내용</p>,
      },
      {
        key: '2',
        label: '2번 제목',
        children: <p>2번 내용</p>,
      },
      {
        key: '3',
        label: '3번 제목',
        children: <p>3번 내용</p>,
      },
    ],
    ghost: false,
    size: 'middle',
  },
};

export const Default = {
  render: ({ ...props }) => (
    <>
      <Collapse style={{ width: 500 }} {...props}></Collapse>
    </>
  ),
};

export const Bordered = {
  render: ({ items }) => (
    <>
      <Collapse
        style={{ width: 500 }}
        items={items}
        bordered={false}
      ></Collapse>
    </>
  ),
};

export const Ghost = {
  render: ({ items }) => (
    <Collapse style={{ width: 500 }} items={items} ghost></Collapse>
  ),
};

export const Collapsible = () => (
  <>
    <Collapse
      style={{ width: 500 }}
      collapsible="header"
      items={[
        {
          key: '1',
          label: '이 항목은 텍스트를 클릭했을 때만 열립니다.',
          children: <p>collapsible = header</p>,
        },
      ]}
    />
    <Collapse
      style={{ width: 500 }}
      collapsible="icon"
      items={[
        {
          key: '1',
          label: '이 항목은 아이콘을 클릭했을 때만 열립니다.',
          children: <p>collapsible = icon</p>,
        },
      ]}
    />
    <Collapse
      style={{ width: 500 }}
      collapsible="disabled"
      items={[
        {
          key: '1',
          label: '이 항목은 열리지 않습니다.',
          children: <p>collapsible = disabled</p>,
        },
      ]}
    />
  </>
);

export const Size = {
  render: ({ items }) => (
    <>
      <Collapse style={{ width: 500 }} items={items} size="small"></Collapse>
      <br />
      <Collapse style={{ width: 500 }} items={items}></Collapse>
      <br />
      <Collapse style={{ width: 500 }} items={items} size="large"></Collapse>
    </>
  ),
};
