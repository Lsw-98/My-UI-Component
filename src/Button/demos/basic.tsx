import React from 'react';
import Button from '..';

export default function Basic() {

  const debounce = (fn: Function, delay: number) => {
    let timer: any = null
    return function () {
      if (timer) {
        clearTimeout(timer)
      }

      timer = setTimeout(() => {
        fn()
      }, delay);
    }
  }

  const clickEvent = () => {
    console.log(1);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary" handleClick={debounce(clickEvent, 1000)}>基础按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="text">文本按钮</Button>
    </div>
  );
}