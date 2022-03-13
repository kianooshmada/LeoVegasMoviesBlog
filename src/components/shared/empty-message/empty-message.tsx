import { Alert } from 'antd';
import React from 'react';

type Props = {
  message?: string;
};
const EmptyMessage = ({ message }: Props) => {
  return (
    <Alert
      style={{ margin: '0 auto' }}
      message={message || 'There is no item'}
      type="error"
    />
  );
};

export default EmptyMessage;
