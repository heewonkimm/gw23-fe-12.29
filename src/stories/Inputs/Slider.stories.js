import { Slider } from 'antd';

Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
};

export default {
  title: 'Inputs/Slider',
  component: Slider,
  argTypes: {
    min: {
      control: 'number',
      defaultValue: {
        summary: 0,
      },
    },
    max: {
      control: 'number',
      defaultValue: {
        summary: 100,
      },
    },
    step: {
      control: 'number',
      defaultValue: {
        summary: 1,
      },
    },
    vertical: {
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
    marks: {
      control: 'object',
    },
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
    vertical: false,
    disabled: false,
    marks: {
      0: '0°C',
      26: '26°C',
      37: '37°C',
      100: {
        style: {
          color: '#f50',
        },
        label: <strong>100°C</strong>,
      },
    },
  },
};

export const Default = {
  render: ({ marks, ...props }) => {
    return (
      <>
        <div style={{ width: 500, height: 300 }}>
          <Slider defaultValue={30} marks={marks} {...props} />
        </div>
      </>
    );
  },
};

export const Range = {
  render: () => {
    return (
      <>
        <div style={{ width: 500, height: 100 }}>
          <Slider defaultValue={30} />
          <Slider defaultValue={[30, 60]} range />
        </div>
      </>
    );
  },
};

export const CustomizeTooltip = () => {
  const formatter = value => `${value}% 입니다.`;

  return (
    <div style={{ width: 500, height: 100 }}>
      <Slider tooltip={{ formatter }} />
      <Slider tooltip={{ formatter: null }} />
    </div>
  );
};

export const Marks = ({ marks }) => {
  return (
    <div style={{ width: 500, height: 100 }}>
      <Slider marks={marks} />
      <Slider marks={marks} step={null} />
    </div>
  );
};
