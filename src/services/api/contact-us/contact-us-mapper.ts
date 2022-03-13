import { ContactUsInfoInterface } from '../../../models/contact-us-info/contact-us-info-interface';

export const ContactUsInfoMapper = (
  contactUsInfo: any
): ContactUsInfoInterface => {
  return {
    email: contactUsInfo.email,
    phone: contactUsInfo.phone,
  };
};
