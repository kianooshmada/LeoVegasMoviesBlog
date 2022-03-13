import PageHead from '../src/components/shared/page-head';
import { AboutApi } from '../src/services/api/about/about-api';
import { getServerSidePropsErrorHandler } from '../src/helpers/get-sever-side-props-error-handler';
import AboutView from '../src/components/views/about-view/about-view';
type Props = {
  content: string;
};
const AboutPage = ({ content }: Props) => {
  return (
    <>
      <PageHead title="About Us" />
      <AboutView content={content} />
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const [aboutRes] = await Promise.all([AboutApi.GetContent()]);
    const props: Props = {
      content: aboutRes?.content || '',
    };
    return {
      props,
    };
  } catch (e) {
    return getServerSidePropsErrorHandler(e);
  }
};

export default AboutPage;
