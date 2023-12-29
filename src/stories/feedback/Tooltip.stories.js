import { Button, Tooltip } from 'antd';

Tooltip.defaultProps = {
  trigger: 'hover',
};

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  argTypes: {
    title: {
      description: '문자열이 아닌 Reactnode로 값을 전달하는 것도 가능',
      control: 'text',
    },
    defaultOpen: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
    trigger: {
      description:
        '배열객체를 전달하여 복수 선택 가능, 옵션 중 contextMenu는 마우스 우클릭을 의미',
      control: 'select',
      options: ['hover', 'focus', 'click', 'contextMenu'],
      defaultValue: {
        summary: 'hover',
      },
    },
  },
  args: {
    title: 'Tooltip content',
    defaultOpen: false,
    trigger: 'hover',
  },
};

export const Default = {
  render: ({ ...props }) => (
    <Tooltip {...props}>
      <span>Tooltip text</span>
    </Tooltip>
  ),
};

export const Trigger = {
  render: ({ title }) => (
    <>
      <Tooltip title={title}>
        <Button>Hover</Button>
      </Tooltip>
      <br />
      <br />
      <Tooltip title={title} trigger="focus">
        <Button>Focus</Button>
      </Tooltip>
      <br />
      <br />
      <Tooltip title={title} trigger="click">
        <Button>Click</Button>
      </Tooltip>
      <br />
      <br />
      <Tooltip title={title} trigger="contextMenu">
        <Button>ContextMenu</Button>
      </Tooltip>
      <br />
      <br />
      <Tooltip
        title={title}
        trigger={['hover', 'focus', 'click', 'contextMenu']}
      >
        <Button>Multiple</Button>
      </Tooltip>
    </>
  ),
};

export const DefaultOpen = {
  render: ({ title }) => (
    <Tooltip title={title} defaultOpen>
      <Button>Default open tooltip</Button>
    </Tooltip>
  ),
};
