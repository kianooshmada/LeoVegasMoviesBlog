import React, { ReactNode, useState, useEffect } from 'react';
import { SocialNetworkInterface } from '../../../models/social-network/social-network-interface';
import { SocialNetworkApi } from '../../../services/api/social-network/social-network-api';
import Header from '../../shared/header';
import Footer from '../../shared/footer';
import * as S from './main-layout.styled';
import { ContactUsInfoInterface } from '../../../models/contact-us-info/contact-us-info-interface';
import { ContactUsApi } from '../../../services/api/contact-us/contact-us-api';

export interface MainLayoutData {
  socialNetworks: SocialNetworkInterface[];
  contactUsInfo: ContactUsInfoInterface;
}

type Props = {
  data: MainLayoutData;
  children: ReactNode;
};

const MainLayout = ({ children, data }: Props) => {
  const [layoutData, setLayoutData] = useState(data);
  useEffect(() => {
    if (data) {
      setLayoutData(data);
    }
  }, [data]);

  return (
    <S.Wrapper style={{ minHeight: '100%' }}>
      <Header contactUsInfo={layoutData?.contactUsInfo} />
      <S.Content>{children}</S.Content>
      <Footer
        socialNetworks={layoutData?.socialNetworks}
        contactUsInfo={layoutData?.contactUsInfo}
      />
    </S.Wrapper>
  );
};

MainLayout.loadData = async (): Promise<MainLayoutData> => {
  try {
    const contactUsInfo = await ContactUsApi.getInfo();
    const socialNetworks = await SocialNetworkApi.getList();
    const output: MainLayoutData = { socialNetworks, contactUsInfo };
    return Promise.resolve(output);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default MainLayout;
