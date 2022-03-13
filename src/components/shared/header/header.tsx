import NavBar from '../nav-bar';
import Paths from '../../../utils/paths';
import NavigationLink from '../../shared/navigation-link';
import * as S from './header.styled';
import { ContactUsInfoInterface } from '../../../models/contact-us-info/contact-us-info-interface';
import { PhoneOutlined } from '@ant-design/icons';

type Props = {
  contactUsInfo: ContactUsInfoInterface;
};

const Header = ({ contactUsInfo }: Props) => {
  return (
    <S.Header>
      <NavigationLink href={Paths.home().getPath()}>
        <S.Logo href={Paths.home().getPath()}>
          <S.LogoImage src="/images/logo.png"></S.LogoImage>
        </S.Logo>
      </NavigationLink>
      <S.Content>
        <NavBar contactUsInfo={contactUsInfo} />
      </S.Content>
      {contactUsInfo?.phone ? (
        <S.PhoneWrap href={'tel:' + contactUsInfo.phone}>
          <S.PhoneText>{contactUsInfo.phone}</S.PhoneText>
          <S.PhoneIcon>
            <PhoneOutlined />
          </S.PhoneIcon>
        </S.PhoneWrap>
      ) : null}
    </S.Header>
  );
};

export default Header;
