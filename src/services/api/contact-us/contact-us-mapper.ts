import { ContactUsInfoInterface } from '../../../models/contact-us-info/contact-us-info-interface';

export const ContactUsInfoMapper = (input: any): ContactUsInfoInterface => {
  return {
    email: input.email,
    phone: input.phone,
  };
};
