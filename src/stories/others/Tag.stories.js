import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  MinusCircleOutlined,
  SyncOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';

import { Tag } from 'antd';

export default {
  title: 'Others/Tag',
  component: Tag,
  argTypes: {
    color: {
      control: 'text',
    },
    icon: {
      control: 'select',
      options: {
        'Check Circle': <CheckCircleOutlined />,
        Sync: <SyncOutlined spin />,
        'Close Circle': <CloseCircleOutlined />,
        'Exclamation Circle': <ExclamationCircleOutlined />,
        'Clock Circle': <ClockCircleOutlined />,
        'Minus Circle': <MinusCircleOutlined />,
        'Twitter Outlined': <TwitterOutlined />,
        'Youtube Outlined': <YoutubeOutlined />,
        'Facebook Outlined': <FacebookOutlined />,
        'Linkedin Outlined': <LinkedinOutlined />,
      },
    },
    closable: {
      control: 'boolean',
      defautlValue: {
        summary: false,
      },
    },
  },
  args: {
    closable: false,
  },
};

export const Default = {
  render: ({ ...props }) => (
    <>
      <Tag {...props}>Tag 1</Tag>
      <Tag {...props}>Tag 2</Tag>
      <Tag {...props}>Tag 3</Tag>
    </>
  ),
};

export const Color = {
  render: ({}) => (
    <>
      <Tag color="orange">Tag 1</Tag>
      <Tag color="blue">Tag 2</Tag>
      <Tag color="magenta">Tag 3</Tag>
    </>
  ),
};

export const Close = {
  render: ({}) => {
    return (
      <>
        <Tag closable>Tag 1</Tag>
        <Tag closeIcon={<CloseCircleOutlined />} closable>
          Tag 2
        </Tag>
      </>
    );
  },
};

export const Icon = {
  render: ({}) => (
    <>
      <Tag icon={<TwitterOutlined />} color="#55acee">
        Twitter
      </Tag>
      <Tag icon={<YoutubeOutlined />} color="#cd201f">
        Youtube
      </Tag>
      <Tag icon={<FacebookOutlined />} color="#3b5999">
        Facebook
      </Tag>
      <Tag icon={<LinkedinOutlined />} color="#55acee">
        LinkedIn
      </Tag>
    </>
  ),
};

export const StatusIcon = {
  render: ({}) => (
    <>
      <Tag icon={<CheckCircleOutlined />} color="success">
        success
      </Tag>
      <Tag icon={<SyncOutlined spin />} color="processing">
        processing
      </Tag>
      <Tag icon={<CloseCircleOutlined />} color="error">
        error
      </Tag>
      <Tag icon={<ExclamationCircleOutlined />} color="warning">
        warning
      </Tag>
      <Tag icon={<ClockCircleOutlined />} color="default">
        waiting
      </Tag>
      <Tag icon={<MinusCircleOutlined />} color="default">
        stop
      </Tag>
    </>
  ),
};
