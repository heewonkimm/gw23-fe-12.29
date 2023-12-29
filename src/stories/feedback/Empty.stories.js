import { Button, Empty } from 'antd';

export default {
  title: 'Feedback/Empty',
  component: Empty,
  argTypes: {
    description: {},
    image: {},
    imageStyle: {},
  },
  args: {},
};

export const Default = {};

export const Image = {
  render: ({}) => (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 100,
      }}
    ></Empty>
  ),
};

export const Description = {
  render: ({}) => (
    <Empty description={<span>Customize Description</span>}>
      <Button type="primary">Add data</Button>
    </Empty>
  ),
};
