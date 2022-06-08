import React from 'react';
import Input from '..';

export default function Num() {
  const handleIptChange = (h: string) => {
    console.log(h);
  };
  const handleNumChange = (h: string) => {
    console.log(h);
  };
  return (
    <Input
      type="num"
      placeholder="请输入"
      min={0}
      max={100}
      step={2}
      handleIptChange={handleIptChange}
      handleNumChange={handleNumChange}
    />
  );
}