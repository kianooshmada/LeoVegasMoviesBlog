import 'antd/dist/antd.css';
import '../public/styles/globals.scss';
import MainLayout from '../src/components/layouts/main-layout';
import NextHead from 'next/head';
import ErrorView from '../src/components/views/error-view';
import RootProvider from '../src/providers';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

type AppProps = {
  Component: any;
  pageProps: any;
  layoutData: any;
};
const MyApp = ({ Component, pageProps, layoutData }: AppProps) => {
  const Layout = Component.Layout ? Component.Layout : MainLayout;

  return (
    <RootProvider>
      <NextHead>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="nofollow, noindex" />
      </NextHead>
      <Layout {...pageProps} data={layoutData}>
        {pageProps?.error ? (
          <ErrorView data={pageProps.error} />
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </RootProvider>
  );
};
MyApp.getInitialProps = async (appContext: any) => {
  const { ctx } = appContext;
  if (!ctx.req) return {};
  const { Component } = appContext;

  const Layout = Component.Layout ? Component.Layout : MainLayout;
  let layoutData: any;
  if (Layout.loadData) {
    try {
      layoutData = await Layout.loadData();
    } catch (error) {
      console.log(error);
    }
  }
  return { layoutData };
};
export default MyApp;
