import React from 'react';
import Input from '..';

export default function PlaceHolder() {
  const handleIptChange = (h: string) => {
    console.log(h);
  };
  return <Input placeholder="请输入" showClear handleIptChange={handleIptChange} />;
}