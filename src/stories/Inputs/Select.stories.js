import { Select } from 'antd';

Select.defaultProps = {
  size: 'middle',
  status: 'default',
};

export default {
  title: 'Inputs/Select',
  component: Select,
  argTypes: {
    placeholder: {
      control: 'text',
    },
    size: {
      control: 'select',
      defaultValue: {
        summary: 'middle',
      },
      options: ['small', 'middle', 'large'],
    },
    mode: {
      control: 'select',
      defaultValue: {
        summary: 'none',
      },
      options: ['multiple', 'tags'],
      description: 'multiple: 직접입력불가, tags: 직접입력가능',
    },
    loading: {
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
    status: {
      control: 'select',
      defaultValue: {
        summary: 'none',
      },
      options: ['error', 'warning'],
    },
    options: {
      control: 'object',
    },
  },
  args: {
    placeholder: '내용을 선택하세요',
    size: 'middle',
    loading: false,
    disabled: false,
    options: [
      { value: '옵션1', label: '옵션1' },
      { value: '옵션2', label: '옵션2' },
      { value: '옵션3', label: '옵션3' },
    ],
  },
};

export const Default = {
  render: ({ placeholder, options, ...props }) => {
    return (
      <>
        <Select
          placeholder={placeholder}
          options={options}
          style={{ width: 300 }}
          {...props}
        />
        <br />
        <Select
          placeholder={placeholder}
          options={options}
          bordered={false}
          style={{ width: 300 }}
          {...props}
        />
      </>
    );
  },
};

export const Size = {
  render: ({ options, placeholder }) => {
    return (
      <>
        <Select
          defaultValue="옵션1"
          placeholder={placeholder}
          options={options}
          size="small"
        />
        <Select
          defaultValue="옵션1"
          placeholder={placeholder}
          options={options}
        />
        <Select
          defaultValue="옵션1"
          placeholder={placeholder}
          options={options}
          size="large"
        />
      </>
    );
  },
};

export const Status = {
  render: ({ options, placeholder }) => {
    return (
      <>
        <Select
          defaultValue="옵션1"
          placeholder={placeholder}
          options={options}
          status="warning"
        />
        <Select
          defaultValue="옵션1"
          placeholder={placeholder}
          options={options}
          status="error"
        />
      </>
    );
  },
};

export const Mode = {
  render: ({ options, placeholder }) => {
    return (
      <>
        <Select
          mode="multiple"
          defaultValue={['옵션1', '옵션2']}
          placeholder={placeholder}
          options={options}
          style={{ width: 200 }}
        />
        <Select
          mode="tags"
          defaultValue={['옵션1', '옵션2']}
          placeholder={placeholder}
          options={options}
          style={{ width: 200 }}
        />
      </>
    );
  },
};

export const Search = {
  render: () => {
    const demoOptions = [
      {
        value: '1',
        label: '세컨즈팩토리 / 한효주 / 대리',
        name: '한효주',
      },
      {
        value: '2',
        label: 'BXD / 조인성 / 과장',
        name: '조인성',
      },
      {
        value: '3',
        label: 'DCD / 고수 / 차장',
        name: '고수',
      },
    ];
    const filterOption = (input, option) =>
      (option?.label ?? '').includes(input);

    const dataAdd = (_, row) => {
      const data = {
        memberName: row.name,
        memberUid: row.value,
      };
      console.log(data);
    };

    return (
      <>
        <Select
          options={demoOptions}
          placeholder="내용을 검색하세요"
          onChange={(_, row) => dataAdd(_, row)}
          filterOption={filterOption}
          style={{ width: 300 }}
          showSearch
        />
      </>
    );
  },
};
