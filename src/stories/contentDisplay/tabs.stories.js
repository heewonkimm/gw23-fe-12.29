import { useRef, useState } from 'react';

import { Tabs } from 'antd';

Tabs.defaultProps = {
  size: 'middle',
  type: 'line',
};

export default {
  title: 'ContentDisplay/Tabs',
  component: Tabs,
  argTypes: {
    defaultActiveKey: {
      control: 'text',
    },
    items: {
      control: 'object',
    },
    centered: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    type: {
      control: 'select',
      options: ['line', 'card', 'editable-card'],
      defaultValue: {
        summary: 'line',
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
    defaultActiveKey: '2',
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
    centered: false,
    type: 'line',
    size: 'middle',
  },
};

export const Default = {
  render: ({ ...props }) => (
    <div style={{ width: 500 }}>
      <Tabs {...props}></Tabs>
    </div>
  ),
};

export const Size = {
  render: ({ items }) => (
    <>
      <Tabs items={items} size="small"></Tabs>
      <Tabs items={items}></Tabs>
      <Tabs items={items} size="large"></Tabs>
    </>
  ),
};

export const Centered = {
  render: ({ items }) => (
    <div style={{ width: 500 }}>
      <Tabs items={items}></Tabs>
      <Tabs items={items} centered></Tabs>
    </div>
  ),
};

export const Type = {
  render: ({ items }) => (
    <>
      <Tabs items={items} type="line"></Tabs>
      <Tabs items={items} type="card"></Tabs>
    </>
  ),
};

export const TypeEditableCard = () => {
  const [activeKey, setActiveKey] = useState('1');
  const [items, setItems] = useState([
    {
      label: 'Tab 1',
      children: 'Content of Tab 1',
      key: '1',
    },
  ]);
  const newTabIndex = useRef(0);

  const onChange = newActiveKey => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({
      label: 'New Tab',
      children: 'Content of new Tab',
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = targetKey => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });

    const newPanes = items.filter(item => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <Tabs
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      items={items}
    />
  );
};
