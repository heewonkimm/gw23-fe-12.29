import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';

import { Rate } from 'antd';

Rate.defaultProps = {
  count: 5,
};

export default {
  title: 'Inputs/Rate',
  component: Rate,
  argTypes: {
    allowClear: {
      description: 'allowClear={false}일 경우 다시 클릭했을 때 초기화 안됨',
      defaultValue: {
        summary: 'none',
      },
    },
    allowHalf: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    count: {
      control: 'number',
      defaultValue: {
        summary: 5,
      },
    },
    tooltips: {},
    character: {},
    disabled: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
  },
  args: {
    allowHalf: false,
    count: 5,
    disabled: false,
    tooltips: ['terrible', 'bad', 'normal', 'good', 'wonderful'],
  },
};

export const Default = {};

export const AllowHalf = {
  render: () => {
    return <Rate defaultValue={2.5} allowHalf></Rate>;
  },
};

export const Count = {
  render: ({}) => {
    return (
      <>
        <Rate defaultValue={2.5} count={8}></Rate>
        <br />
        <Rate defaultValue={2.5}></Rate>
      </>
    );
  },
};

export const Character = () => {
  const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

  return (
    <>
      <Rate defaultValue={2} character={({ index }) => index + 1} />
      <br />
      <Rate
        defaultValue={3}
        character={({ index }) => customIcons[index + 1]}
      />
    </>
  );
};
