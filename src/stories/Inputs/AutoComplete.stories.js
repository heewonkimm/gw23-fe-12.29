import useAutoComplete from '@/hooks/useAutoComplete';

import { AutoComplete, Input } from 'antd';

export default {
  title: 'Inputs/AutoComplete',
  component: AutoComplete,
};

export const Default = () => {
  const [options, onSearch] = useAutoComplete();
  const [options2, onSearch2] = useAutoComplete();

  return (
    <>
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        onSearch={onSearch}
        placeholder="내용을 입력해 주세요"
      />
      <br />
      <br />
      <AutoComplete
        options={options2}
        style={{ width: 200 }}
        onSearch={onSearch2}
        placeholder="내용을 입력해 주세요"
        bordered={false}
      />
    </>
  );
};

export const Status = () => {
  const [options, onSearch] = useAutoComplete();
  const [options2, onSearch2] = useAutoComplete();
  const [options3, onSearch3] = useAutoComplete();

  return (
    <>
      <AutoComplete
        options={options}
        onSearch={onSearch}
        style={{ width: 200 }}
        placeholder="내용을 입력해 주세요"
        disabled
      />
      <br />
      <br />
      <AutoComplete
        options={options2}
        onSearch={onSearch2}
        style={{ width: 200 }}
        placeholder="내용을 입력해 주세요"
        status="error"
      />
      <br />
      <br />
      <AutoComplete
        options={options3}
        onSearch={onSearch3}
        style={{ width: 200 }}
        placeholder="내용을 입력해 주세요"
        status="warning"
      />
    </>
  );
};

export const Type = () => {
  const [options, onSearch] = useAutoComplete();
  const [options2, onSearch2] = useAutoComplete();

  return (
    <>
      <AutoComplete
        options={options}
        onSearch={onSearch}
        style={{ width: 200 }}
        placeholder="내용을 입력해 주세요"
      />
      <br />
      <br />
      <AutoComplete
        popupClassName="certain-category-search-dropdown"
        options={options2}
        onSearch={onSearch2}
        style={{ width: 200 }}
      >
        <Input.Search placeholder="내용을 입력해 주세요" />
      </AutoComplete>
    </>
  );
};
