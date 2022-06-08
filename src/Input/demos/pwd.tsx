import React from 'react';
import Input from '..';

export default function Pwd() {
  const handleIptChange = (h: string) => {
    console.log(h);
  };
  return (
    <Input type="password" placeholder="请输入" showTogglePwd handleIptChange={handleIptChange} />
  );
}