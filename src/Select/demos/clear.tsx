import React from 'react';
import Select from '..';
/**
 * transform: true
 */
export default function Clear() {
  const option = [
    {
      label: 'Mucy',
      value: 'mucy',
    },
    {
      label: 'Muke',
      value: 'muke',
    },
    {
      label: 'aMck',
      value: 'amck',
    },
  ];
  const handleSelectCallback = (v: number) => {
    console.log(v);
  };
  const handleTextChange = (v: number) => {
    console.log("handleTextChange", v);
  };
  return (
    <Select
      option={option}
      width={200}
      handleSelectCallback={handleSelectCallback}
      handleTextChange={handleTextChange}
      showSearch
      placeholder={'请输入'}
      clearable
    />
  );
}