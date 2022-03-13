import { Alert } from 'antd';
import React from 'react';
import { ErrorInterface } from '../../../models/error-interface';

type Props = {
  data: ErrorInterface;
};
const ErrorView = ({ data }: Props) => {
  return (
    <section style={{ margin: '20px' }}>
      <Alert
        style={{ maxWidth: '400px', margin: '0 auto' }}
        message={data.code}
        description={data.message}
        type="error"
        showIcon
      />
    </section>
  );
};

export default ErrorView;
