import PageHead from '../src/components/shared/page-head';
import HomeView from '../src/components/views/home-view';
import { getServerSidePropsErrorHandler } from '../src/helpers/get-sever-side-props-error-handler';
import { HomeApi } from '../src/services/api/home/home-api';

type Props = {
  introduction: string;
};

const HomePage = ({ introduction }: Props) => {
  return (
    <>
      <PageHead title="home" />
      <HomeView introduction={introduction} />
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const [introductionRes] = await Promise.all([HomeApi.GetIntroduction()]);
    const props: Props = {
      introduction: introductionRes?.context || '',
    };
    return {
      props,
    };
  } catch (e) {
    return getServerSidePropsErrorHandler(e);
  }
};

export default HomePage;
