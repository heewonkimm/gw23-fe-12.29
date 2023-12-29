import { useState } from 'react';

const useAutoComplete = () => {
  const [options, setOptions] = useState([]);

  const onSearch = text => {
    const mockVal = (str, repeat = 1) => ({
      value: str.repeat(repeat),
    });

    const getPanelValue = searchText =>
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
    setOptions(getPanelValue(text));
  };

  return [options, onSearch];
};

export default useAutoComplete;
