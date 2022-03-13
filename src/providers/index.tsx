import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';
import ThemeProvider from './theme-provider';

type Props = {
  children: ReactNode;
};
const RootProvider = ({ children }: Props) => {
  return (
    <ConfigProvider direction="rtl">
      <ThemeProvider>{children}</ThemeProvider>
    </ConfigProvider>
  );
};

export default RootProvider;
