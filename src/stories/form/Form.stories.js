import LabelHelp from '@/components/form/LabelHelp';

import { Col, Form, Input, Row } from 'antd';

Form.Item.displayName = 'Form.Item';

Form.defaultProps = {
  layout: 'horizontal',
  size: 'middle',
  colon: true,
  disabled: false,
};

export default {
  title: 'Form/Form',
  component: Form,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical', 'inline'],
      defaultValue: {
        summary: 'horizontal',
      },
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      defaultValue: {
        summary: 'middle',
      },
    },
    colon: {
      control: 'boolean',
      defaultValue: {
        summary: true,
      },
    },
    disabled: {
      control: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
  },
  args: {
    layout: 'horizontal',
    size: 'middle',
    colon: true,
    disabled: false,
  },
};

const Text = () => {
  return (
    <>
      Label
      <span>dsafsdf</span>
    </>
  );
};

export const Default = {
  render: props => {
    return (
      <Form {...props}>
        <Form.Item name="name" label="label">
          <Input />
        </Form.Item>
        <Form.Item name="name2" label="label">
          <Input />
        </Form.Item>
      </Form>
    );
  },
};

export const Layout = {
  render: ({}) => {
    return (
      <>
        <Form>
          <Form.Item name="name" label="label">
            <Input />
          </Form.Item>
          <Form.Item name="name2" label="label">
            <Input />
          </Form.Item>
        </Form>
        <Form layout="vertical">
          <Form.Item name="name3" label="label">
            <Input />
          </Form.Item>
          <Form.Item name="name4" label="label">
            <Input />
          </Form.Item>
        </Form>
        <Form layout="inline">
          <Form.Item name="name5" label="label">
            <Input />
          </Form.Item>
          <Form.Item name="name6" label="label">
            <Input />
          </Form.Item>
        </Form>
      </>
    );
  },
};

export const Size = {
  render: ({}) => {
    return (
      <>
        <Form size="small">
          <Form.Item name="name" label="label">
            <Input />
          </Form.Item>
          <Form.Item name="name2" label="label">
            <Input />
          </Form.Item>
        </Form>
        <Form>
          <Form.Item name="name3" label="label">
            <Input />
          </Form.Item>
          <Form.Item name="name4" label="label">
            <Input />
          </Form.Item>
        </Form>
        <Form size="large">
          <Form.Item name="name5" label="label">
            <Input />
          </Form.Item>
          <Form.Item name="name6" label="label">
            <Input />
          </Form.Item>
        </Form>
      </>
    );
  },
};

export const Required = {
  render: ({}) => {
    return (
      <Form>
        <Form.Item name="name" label="label">
          <Input />
        </Form.Item>
        <Form.Item name="name2" label="label" required>
          <Input />
        </Form.Item>
      </Form>
    );
  },
};

export const Disabled = {
  render: ({}) => {
    return (
      <>
        <Form disabled>
          <Form.Item name="name" label="label">
            <Input />
          </Form.Item>
          <Form.Item name="name2" label="label">
            <Input />
          </Form.Item>
        </Form>
        <Form>
          <Form.Item name="name3" label="label">
            <Input />
          </Form.Item>
          <Form.Item name="name4" label="label">
            <Input disabled />
          </Form.Item>
        </Form>
      </>
    );
  },
};

export const MultipleColumn = {
  render: ({}) => {
    return (
      <Form layout="vertical">
        <Form.Item name="name" label="label">
          <Input />
        </Form.Item>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="name2" label="label">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="name3" label="label">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item name="name4" label="label">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="name5" label="label">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="name6" label="label">
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  },
};

export const MultipleInput = {
  render: ({}) => {
    return (
      <Form layout="vertical">
        <Form.Item name="name" label="label">
          <Input />
        </Form.Item>
        <Form.Item label="label" style={{ marginBottom: 0 }}>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item name="name2">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="name3">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item label="label" style={{ marginBottom: 0 }}>
          <Row gutter={12}>
            <Col span={8}>
              <Form.Item name="name4">
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="name5">
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="name6">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    );
  },
};

export const FormItemOptions = {
  render: ({}) => {
    return (
      <Form layout="vertical">
        <Form.Item name="name" label="label" tooltip="툴팁내용">
          <Input />
        </Form.Item>
        <Form.Item
          name="name2"
          label={
            <>
              label{' '}
              <LabelHelp>
                (선택일수 <LabelHelp.Strong>2.5일</LabelHelp.Strong>)
              </LabelHelp>
            </>
          }
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name3"
          label="label"
          extra="추가 메세지로 오류 메세지와 별개"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name4"
          label="label"
          help="추가 메세지이면서 오류 메세지로 오류 메세지를 대체한다"
        >
          <Input />
        </Form.Item>
        <Form.Item name="name5" label="label" hidden>
          <Input />
        </Form.Item>
      </Form>
    );
  },
};
