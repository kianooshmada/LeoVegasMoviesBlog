import * as S from './about-view.styled';
type Props = {
  content: string;
};
const AboutView = ({ content }: Props) => {
  return (
    <>
      <S.Cover>
        <S.CoverImage src="/images/about-us.jpg" alt="about us cover" />
      </S.Cover>
      <S.Wrapper>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </S.Wrapper>
    </>
  );
};

export default AboutView;
