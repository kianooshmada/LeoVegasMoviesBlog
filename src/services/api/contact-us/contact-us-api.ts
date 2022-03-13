import { ContactUsInfoMapper } from './contact-us-mapper';
import { ContactUsGetInfoResponse } from './responses/contact-us-get-info-response';
import data from '../../../data';
export class ContactUsApi {
  static getInfo = async (): Promise<ContactUsGetInfoResponse> => {
    try {
      const response: ContactUsGetInfoResponse = {
        email: data.email,
        phone: data.phone,
      };
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
