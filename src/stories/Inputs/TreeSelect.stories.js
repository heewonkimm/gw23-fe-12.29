import { TreeSelect } from 'antd';

TreeSelect.defaultProps = {
  size: 'middle',
};

export default {
  title: 'Inputs/TreeSelect',
  component: TreeSelect,
  argTypes: {
    placeholder: {
      control: 'text',
    },
    multiple: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    allowClear: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    showSearch: {
      description: 'multiple일 때, showSearch={false}로 기능끄기',
      control: 'boolean',
      defaultValue: {
        summary: 'single: false | multiple: true',
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
    status: {
      control: 'select',
      options: ['warning', 'error'],
      defaultValue: {
        summary: 'none',
      },
    },
    disabled: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    treeData: {
      control: 'object',
    },
  },
  args: {
    placeholder: 'Please select',
    showSearch: false,
    allowClear: false,
    multiple: false,
    size: 'middle',
    disabled: false,
    treeData: [
      {
        value: 'parent 1',
        title: 'parent 1',
        children: [
          {
            value: 'parent 1-0',
            title: 'parent 1-0',
            children: [
              {
                value: 'leaf1',
                title: 'leaf1',
              },
              {
                value: 'leaf2',
                title: 'leaf2',
              },
            ],
          },
          {
            value: 'parent 1-1',
            title: 'parent 1-1',
            children: [
              {
                value: 'leaf3',
                title: (
                  <b
                    style={{
                      color: '#08c',
                    }}
                  >
                    leaf3
                  </b>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
};

export const Default = {
  render: ({ ...props }) => (
    <TreeSelect style={{ width: 500 }} {...props}></TreeSelect>
  ),
};

export const Multiple = {
  render: ({ treeData, placeholder }) => (
    <TreeSelect
      style={{ width: 500 }}
      placeholder={placeholder}
      treeData={treeData}
      multiple
    ></TreeSelect>
  ),
};

export const AllowClear = {
  render: ({ treeData, placeholder }) => (
    <TreeSelect
      style={{ width: 500 }}
      placeholder={placeholder}
      treeData={treeData}
      allowClear
    ></TreeSelect>
  ),
};

export const ShowSearch = {
  render: ({ treeData, placeholder }) => (
    <TreeSelect
      style={{ width: 500 }}
      placeholder={placeholder}
      treeData={treeData}
      showSearch
    ></TreeSelect>
  ),
};

export const Bordered = {
  render: ({ treeData, placeholder }) => (
    <>
      <TreeSelect
        style={{ width: 500 }}
        placeholder={placeholder}
        treeData={treeData}
      ></TreeSelect>
      <br />
      <TreeSelect
        style={{ width: 500 }}
        treeData={treeData}
        placeholder={placeholder}
        bordered={false}
      ></TreeSelect>
    </>
  ),
};

export const Size = {
  render: ({ treeData, placeholder }) => (
    <>
      <TreeSelect
        style={{ width: 500 }}
        placeholder={placeholder}
        treeData={treeData}
        size="small"
      ></TreeSelect>
      <br />
      <TreeSelect
        style={{ width: 500 }}
        treeData={treeData}
        placeholder={placeholder}
        bordered={false}
      ></TreeSelect>
      <br />
      <TreeSelect
        style={{ width: 500 }}
        treeData={treeData}
        placeholder={placeholder}
        bordered={false}
        size="large"
        multiple
        showSearch={false}
      ></TreeSelect>
    </>
  ),
};

export const Status = {
  render: ({ treeData, placeholder }) => (
    <>
      <TreeSelect
        style={{ width: 500 }}
        placeholder={placeholder}
        treeData={treeData}
        status="warning"
      ></TreeSelect>
      <br />
      <TreeSelect
        style={{ width: 500 }}
        treeData={treeData}
        placeholder={placeholder}
        status="error"
      ></TreeSelect>
      <br />
      <TreeSelect
        style={{ width: 500 }}
        treeData={treeData}
        placeholder={placeholder}
        disabled
      ></TreeSelect>
    </>
  ),
};
