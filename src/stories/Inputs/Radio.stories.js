import { Radio } from 'antd';

Radio.Group.displayName = 'Radio.Group';

export default {
  title: 'Inputs/Radio/Radio',
  component: Radio,

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
    children: 'Radio',
    disabled: false,
  },
};

export const Default = {
  render: ({ children, ...props }) => {
    return <Radio {...props}>{children}</Radio>;
  },
};

export const RadioGroup = () => {
  const options = [
    { label: '서울', value: '서울' },
    { label: '대전', value: '대전' },
    { label: '대구', value: '대구' },
    { label: '부산', value: '부산' },
  ];

  return (
    <>
      <Radio.Group options={options} defaultValue={'서울'} />
      <br />
      <br />
      <Radio.Group defaultValue={'서울'}>
        <Radio value={'서울'}>서울</Radio>
        <Radio value={'대전'}>대전</Radio>
        <Radio value={'대구'}>대구</Radio>
        <Radio value={'부산'}>부산</Radio>
      </Radio.Group>
    </>
  );
};

export const Status = () => {
  const radioOptionsWithDisabled = [
    { label: '서울', value: '서울' },
    { label: '대전', value: '대전', disabled: true },
    { label: '대구', value: '대구' },
    { label: '부산', value: '부산', disabled: true },
  ];

  return (
    <>
      <Radio disabled>서울</Radio>
      <br />
      <br />
      <Radio.Group options={radioOptionsWithDisabled} defaultValue={'서울'} />
    </>
  );
};
