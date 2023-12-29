import { useState } from 'react';

import { Checkbox } from 'antd';

Checkbox.Group.displayName = 'Checkbox.Group';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  argTypes: {
    children: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
  },
  args: {
    children: 'Checkbox',
    disabled: false,
  },
};

export const Default = {
  args: {},
};

export const Status = {
  render: ({ children }) => (
    <>
      <Checkbox defaultChecked>{children}</Checkbox>
      <Checkbox disabled>{children}</Checkbox>
      <Checkbox defaultChecked disabled>
        {children}
      </Checkbox>
    </>
  ),
};

export const CheckGroup = ({}) => {
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const defaultCheckedList = ['Apple'];

  return (
    <Checkbox.Group options={plainOptions} defaultValue={defaultCheckedList} />
  );
};

export const CheckAll = () => {
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const defaultCheckedList = ['Apple', 'Orange'];

  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const checkAll = plainOptions.length === checkedList.length;

  const onChange = list => {
    setCheckedList(list);
  };

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };

  return (
    <>
      <Checkbox onChange={onCheckAllChange} checked={checkAll}>
        전체 선택
      </Checkbox>
      <Checkbox.Group
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </>
  );
};
