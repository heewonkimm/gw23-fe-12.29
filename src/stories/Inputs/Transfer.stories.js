import { useState } from 'react';

import { Switch, Transfer } from 'antd';

export default {
  title: 'Inputs/Transfer',
  component: Transfer,
};

export const Default = () => {
  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [pagination, setPagination] = useState(false);
  const [oneWay, setOneWay] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const mockData = Array.from({
    length: 20,
  }).map((_, i) => ({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
  }));

  const initialTargetKeys = mockData
    .filter(item => Number(item.key) > 10)
    .map(item => item.key);

  const onChange = (nextTargetKeys, direction, moveKeys) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const onScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };

  return (
    <>
      <Transfer
        dataSource={mockData}
        titles={['Source', 'Target']}
        render={item => item.title}
        pagination={pagination}
        showSearch={showSearch}
        oneWay={oneWay}
      />
      <br />
      <Switch
        unCheckedChildren="pagination"
        checkedChildren="pagination"
        checked={pagination}
        onChange={setPagination}
      />
      <br />
      <Switch
        unCheckedChildren="one way"
        checkedChildren="one way"
        checked={oneWay}
        onChange={setOneWay}
      />
      <br />
      <Switch
        unCheckedChildren="show search"
        checkedChildren="show search"
        checked={showSearch}
        onChange={setShowSearch}
      />
      <br />
      <br />
      <Transfer
        dataSource={mockData}
        titles={['Source', 'Target']}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={onChange}
        onSelectChange={onSelectChange}
        onScroll={onScroll}
        render={item => item.title}
        pagination={pagination}
        showSearch={showSearch}
        oneWay={oneWay}
        status="error"
      />
      <br />
      <br />
      <Transfer
        dataSource={mockData}
        titles={['Source', 'Target']}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={onChange}
        onSelectChange={onSelectChange}
        onScroll={onScroll}
        render={item => item.title}
        pagination={pagination}
        showSearch={showSearch}
        oneWay={oneWay}
        status="warning"
      />
      <br />
      <br />
      <Transfer
        dataSource={mockData}
        titles={['Source', 'Target']}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={onChange}
        onSelectChange={onSelectChange}
        onScroll={onScroll}
        render={item => item.title}
        pagination={pagination}
        showSearch={showSearch}
        oneWay={oneWay}
        disabled
      />
    </>
  );
};
