import React from 'react';
import Button from '..';

export default function Disabled() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary" disabled>
        禁用
      </Button>
      <Button type="danger" disabled>
        禁用
      </Button>
      <Button type="warning" disabled>
        禁用
      </Button>
      <Button type="text" disabled>
        禁用
      </Button>
    </div>
  );
}