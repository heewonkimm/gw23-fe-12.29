import ButtonGroup from '@/components/button/ButtonGroup';

import { Button } from 'antd';

export default {
  title: 'Button/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column'],
    },
    reverse: {
      control: 'boolean',
    },
    justify: {
      control: 'select',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
      ],
    },
    align: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end'],
    },
    noGap: {
      control: 'boolean',
    },
    noMargin: {
      control: 'boolean',
    },
  },
};

export const Default = {
  render: props => {
    return (
      <ButtonGroup {...props}>
        <Button>버튼</Button>
        <Button>버튼</Button>
        <Button>버튼</Button>
      </ButtonGroup>
    );
  },
};

export const Direction = {
  render: ({}) => {
    return (
      <>
        <ButtonGroup>
          <Button>버튼</Button>
          <Button>버튼</Button>
          <Button>버튼</Button>
        </ButtonGroup>
        <ButtonGroup direction="column">
          <Button>버튼</Button>
          <Button>버튼</Button>
          <Button>버튼</Button>
        </ButtonGroup>
      </>
    );
  },
};

export const Reverse = {
  render: ({}) => {
    return (
      <>
        <ButtonGroup>
          <Button>버튼1</Button>
          <Button>버튼2</Button>
          <Button>버튼3</Button>
        </ButtonGroup>
        <ButtonGroup reverse={true}>
          <Button>버튼1</Button>
          <Button>버튼2</Button>
          <Button>버튼3</Button>
        </ButtonGroup>
      </>
    );
  },
};

export const Justify = {
  render: ({}) => {
    return (
      <>
        <ButtonGroup>
          <Button>버튼</Button>
          <Button>버튼</Button>
          <Button>버튼</Button>
        </ButtonGroup>
        <ButtonGroup justify="center">
          <Button>버튼</Button>
          <Button>버튼</Button>
          <Button>버튼</Button>
        </ButtonGroup>
        <ButtonGroup justify="flex-end">
          <Button>버튼</Button>
          <Button>버튼</Button>
          <Button>버튼</Button>
        </ButtonGroup>
        <ButtonGroup justify="space-between">
          <Button>버튼</Button>
          <Button>버튼</Button>
          <Button>버튼</Button>
        </ButtonGroup>
        <ButtonGroup justify="space-around">
          <Button>버튼</Button>
          <Button>버튼</Button>
          <Button>버튼</Button>
        </ButtonGroup>
      </>
    );
  },
};

export const Align = {
  args: {
    style: {
      height: 100,
      marginBottom: 10,
      backgroundColor: 'rgba(0,0,0,.05)',
    },
  },
  render: ({}) => {
    return (
      <>
        <ButtonGroup>
          <Button>버튼</Button>
          <Button>버튼</Button>
          <Button>버튼</Button>
        </ButtonGroup>
        <ButtonGroup align="center">
          <Button>버튼</Button>
          <Button>버튼</Button>
          <Button>버튼</Button>
        </ButtonGroup>
        <ButtonGroup align="flex-end">
          <Button>버튼</Button>
          <Button>버튼</Button>
          <Button>버튼</Button>
        </ButtonGroup>
      </>
    );
  },
};

export const NoGap = {
  render: ({}) => {
    return (
      <>
        <ButtonGroup>
          <Button>버튼</Button>
          <Button>버튼</Button>
          <Button>버튼</Button>
        </ButtonGroup>
        <ButtonGroup noGap>
          <Button>버튼</Button>
          <Button>버튼</Button>
          <Button>버튼</Button>
        </ButtonGroup>
      </>
    );
  },
};

export const NoMargin = {
  render: ({}) => {
    return (
      <>
        <ButtonGroup>
          <Button>버튼</Button>
          <Button>버튼</Button>
          <Button>버튼</Button>
        </ButtonGroup>
        <ButtonGroup noMargin>
          <Button>버튼</Button>
          <Button>버튼</Button>
          <Button>버튼</Button>
        </ButtonGroup>
      </>
    );
  },
};

export const UseCase = {
  render: ({}) => {
    return (
      <>
        <ButtonGroup justify="center" gap="large">
          <Button size="large">취소</Button>
          <Button size="large">목록</Button>
          <Button size="large" type="primary">
            확인
          </Button>
        </ButtonGroup>
        <ButtonGroup block>
          <Button block size="large">
            취소
          </Button>
          <Button block size="large">
            목록
          </Button>
          <Button block size="large" type="primary">
            확인
          </Button>
        </ButtonGroup>

        <ButtonGroup direction="column">
          <Button size="large">취소</Button>
          <Button size="large">목록</Button>
          <Button size="large" type="primary">
            확인
          </Button>
        </ButtonGroup>
        <ButtonGroup direction="column">
          <Button block size="large">
            취소
          </Button>
          <Button block size="large">
            목록
          </Button>
          <Button block size="large" type="primary">
            확인
          </Button>
        </ButtonGroup>
      </>
    );
  },
};
