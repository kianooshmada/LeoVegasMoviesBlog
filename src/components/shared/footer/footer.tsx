import { ContactUsInfoInterface } from '../../../models/contact-us-info/contact-us-info-interface';
import { SocialNetworkInterface } from '../../../models/social-network/social-network-interface';
import Paths from '../../../utils/paths';
import NavigationLink from '../navigation-link';
import * as S from './footer.styled';
import { SocialNetworkTypes } from '../../../models/social-network/social-network-types';
import SVG from 'react-inlinesvg';

import {
  FacebookOutlined,
  GooglePlusOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';

const getSocialNetworkIcon = (type: SocialNetworkTypes) => {
  switch (type) {
    case SocialNetworkTypes.FACEBOOK:
      return <FacebookOutlined />;

    case SocialNetworkTypes.GOOGLE_PLUS:
      return <GooglePlusOutlined />;

    case SocialNetworkTypes.TWITTER:
      return <TwitterOutlined />;

    case SocialNetworkTypes.INSTAGRAM:
      return <InstagramOutlined />;

    case SocialNetworkTypes.LINKEDIN:
      return <LinkedinOutlined />;

    case SocialNetworkTypes.PINTEREST:
      return (
        <SVG
          src="/images/social-networks/pinterest.svg"
          width={24}
          height="auto"
          title="pintrest"
        />
      );
    case SocialNetworkTypes.WHATSAPP:
      return <WhatsAppOutlined />;
  }
};

type Props = {
  socialNetworks: SocialNetworkInterface[];
  contactUsInfo: ContactUsInfoInterface;
};

const Footer = ({ socialNetworks, contactUsInfo }: Props) => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Col>
          <NavigationLink href={Paths.home().getPath()}>
            <S.TitleWrap href={Paths.home().getPath()}>
              <S.TitleLogo src="/images/logo-type-light.png" alt="logo" />
            </S.TitleWrap>
          </NavigationLink>
          {contactUsInfo ? (
            <>
              {contactUsInfo.phone ? (
                <S.TextWrap>
                  <S.TextIcon>
                    <PhoneOutlined />
                  </S.TextIcon>
                  <S.Text dir="ltr">{contactUsInfo.phone}</S.Text>
                </S.TextWrap>
              ) : null}
              {contactUsInfo.email ? (
                <S.TextWrap>
                  <S.TextIcon>
                    <MailOutlined />
                  </S.TextIcon>
                  <S.Text dir="ltr">{contactUsInfo.email}</S.Text>
                </S.TextWrap>
              ) : null}
            </>
          ) : null}
        </S.Col>
      </S.Content>
      {socialNetworks?.length ? (
        <S.SocialNetworks>
          {socialNetworks.map((data, index) => (
            <S.SocialNetworkLink key={index} title={data.title} href={data.url}>
              {getSocialNetworkIcon(data.type)}
            </S.SocialNetworkLink>
          ))}
        </S.SocialNetworks>
      ) : null}
      <S.Copyright>Copyright © 2022-2023</S.Copyright>
    </S.Wrapper>
  );
};

export default Footer;
