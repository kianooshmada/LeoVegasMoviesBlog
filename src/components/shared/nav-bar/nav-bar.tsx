import { ContactUsInfoInterface } from '../../../models/contact-us-info/contact-us-info-interface';
import Paths from '../../../utils/paths';
import NavigationLink from '../../shared/navigation-link';
import * as S from './nav-bar.styled';
type Props = {
  contactUsInfo: ContactUsInfoInterface;
};

const NavBar = ({ contactUsInfo }: Props) => {
  return (
    <S.Wrapper>
      <S.List>
        <S.Item>
          <NavigationLink href={Paths.home().getPath()}>
            <S.Button href={Paths.home().getPath()}>Home</S.Button>
          </NavigationLink>
        </S.Item>
        <S.Item>
          <S.Button>Contact Us</S.Button>
          <S.SubMenu>
            <S.SubMenuList>
              {contactUsInfo?.email ? (
                <S.SubMenuItem>
                  <S.SubMenuButton href={'mailto:' + contactUsInfo.email}>
                    Email
                  </S.SubMenuButton>
                </S.SubMenuItem>
              ) : null}
              {contactUsInfo?.phone ? (
                <S.SubMenuItem>
                  <S.SubMenuButton href={'tel:' + contactUsInfo.phone}>
                    Phone
                  </S.SubMenuButton>
                </S.SubMenuItem>
              ) : null}
            </S.SubMenuList>
          </S.SubMenu>
        </S.Item>
        <S.Item>
          <NavigationLink href={Paths.about().getPath()}>
            <S.Button href={Paths.about().getPath()}>About Us</S.Button>
          </NavigationLink>
        </S.Item>
      </S.List>
    </S.Wrapper>
  );
};

export default NavBar;
