import { useState } from 'react';

import {
  DownOutlined,
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
} from '@ant-design/icons';

import { Tree } from 'antd';

export default {
  title: 'Others/Tree',
  component: Tree,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    treeData: {
      control: 'object',
    },
    checkable: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    showLine: {
      control: 'boolean',
      defaultValue: {
        summary: false,
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
    treeData: [
      {
        title: '0-0',
        key: '0-0',
        children: [
          {
            title: '0-0-0',
            key: '0-0-0',
            disabled: true,
            children: [
              {
                title: '0-0-0-0',
                key: '0-0-0-0',
              },
              {
                title: '0-0-0-1',
                key: '0-0-0-1',
                disabled: true,
              },
            ],
          },
          {
            title: '0-0-1',
            key: '0-0-1',
            children: [{ title: '0-0-1-0', key: '0-0-1-0' }],
          },
        ],
      },
      {
        title: '0-1',
        key: '0-1',
        children: [
          {
            title: '0-1-0',
            key: '0-1-0',
            disabled: true,
          },
          {
            title: '0-1-1',
            key: '0-1-1',
          },
        ],
      },
    ],
    checkable: false,
    showLine: false,
    disabled: false,
  },
};

const updateTreeData = (list, key, children) =>
  list.map(el => {
    if (el.key === key) {
      return {
        ...el,
        children,
      };
    }
    if (el.children) {
      return {
        ...el,
        children: updateTreeData(el.children, key, children),
      };
    }
    return el;
  });

export const Default = {
  render: ({ ...props }) => (
    <>
      <Tree {...props} />
    </>
  ),
};

export const Checkable = {
  render: ({ treeData }) => (
    <>
      <Tree checkable treeData={treeData} />
    </>
  ),
};

export const ShowLine = {
  render: ({ treeData }) => (
    <>
      <Tree showLine treeData={treeData} />
    </>
  ),
};

export const LoadData = () => {
  const initTreeData = [
    {
      title: '0-0',
      key: '0-0',
    },
    {
      title: '0-1',
      key: '0-1',
    },
  ];

  const [treeData, setTreeData] = useState(initTreeData);

  const onLoadData = ({ key, children }) =>
    new Promise(resolve => {
      if (children) {
        resolve();
        return;
      }
      setTreeData(origin =>
        updateTreeData(origin, key, [
          {
            title: `${key}-0`,
            key: `${key}-0`,
          },
          {
            title: `${key}-1`,
            key: `${key}-1`,
          },
        ]),
      );
      resolve();
    });

  return <Tree loadData={onLoadData} treeData={treeData} />;
};

export const Icon = () => {
  const treeDataIcon = [
    {
      title: '0-0',
      key: '0-0',
      icon: <SmileOutlined />,
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          icon: <MehOutlined />,
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          icon: <FrownOutlined />,
        },
      ],
    },
  ];

  return (
    <>
      <Tree showIcon switcherIcon={<DownOutlined />} treeData={treeDataIcon} />
    </>
  );
};
