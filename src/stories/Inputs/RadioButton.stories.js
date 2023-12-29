import { Radio } from 'antd';

Radio.Group.displayName = 'Radio.Group';
Radio.Button.displayName = 'Radio.Button';
Radio.Group.defaultProps = {
  size: 'middle',
  buttonStyle: 'outline',
};

export default {
  title: 'Inputs/Radio/RadioButton',
  component: Radio.Button,

  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    buttonStyle: {
      control: 'select',
      defaultValue: {
        summary: 'outline',
      },
      options: ['outline', 'solid'],
    },
    size: {
      control: 'select',
      defaultValue: {
        summary: 'middle',
      },
      options: ['small', 'middle', 'large'],
    },
    options: {
      control: 'object',
    },
  },
  args: {
    size: 'middle',
    buttonStyle: 'outline',
    disabled: false,
    options: [
      { label: '서울', value: '서울' },
      { label: '대전', value: '대전' },
      { label: '대구', value: '대구' },
      { label: '부산', value: '부산' },
    ],
  },
};

export const Default = {
  render: ({ options, ...props }) => {
    return (
      <>
        <Radio.Group defaultValue={'서울'} {...props}>
          {options.map(({ value, label }) => (
            <Radio.Button key={value} value={value}>
              {label}
            </Radio.Button>
          ))}
        </Radio.Group>
        <br />
        <br />
        <Radio.Group
          optionType="button"
          defaultValue={'서울'}
          options={options}
          {...props}
        />
      </>
    );
  },
};

export const Size = {
  render: ({ options }) => {
    return (
      <>
        <Radio.Group
          defaultValue={'서울'}
          size="small"
          optionType="button"
          options={options}
        ></Radio.Group>
        <br />
        <br />
        <Radio.Group
          defaultValue={'서울'}
          optionType="button"
          options={options}
        ></Radio.Group>
        <br />
        <br />
        <Radio.Group
          defaultValue={'서울'}
          optionType="button"
          size="large"
          options={options}
        ></Radio.Group>
      </>
    );
  },
};

export const ButtonStyle = {
  render: ({ options }) => {
    return (
      <>
        <Radio.Group
          optionType="button"
          options={options}
          defaultValue={'서울'}
        ></Radio.Group>
        <br />
        <br />
        <Radio.Group
          optionType="button"
          options={options}
          buttonStyle="solid"
          defaultValue={'서울'}
        ></Radio.Group>
      </>
    );
  },
};

export const Status = {
  render: ({ options }) => {
    const radioOptionsWithDisabled = [
      { label: '서울', value: '서울' },
      { label: '대전', value: '대전', disabled: true },
      { label: '대구', value: '대구' },
      { label: '부산', value: '부산', disabled: true },
    ];

    return (
      <>
        <Radio.Group defaultValue={'서울'}>
          <Radio.Button value={'서울'}>서울</Radio.Button>
          <Radio.Button value={'대전'} disabled>
            대전
          </Radio.Button>
          <Radio.Button value={'대구'}>대구</Radio.Button>
          <Radio.Button value={'부산'} disabled>
            부산
          </Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Radio.Group
          options={radioOptionsWithDisabled}
          optionType="button"
          defaultValue={'서울'}
        />
        <br />
        <br />

        <Radio.Group options={options} optionType="button" disabled />
      </>
    );
  },
};
