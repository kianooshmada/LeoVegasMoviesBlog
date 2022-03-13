import HttpClient from '../../../utils/http-client';
import { ContactUsInfoMapper } from './contact-us-mapper';
import { ContactUsGetInfoResponse } from './responses/contact-us-get-info-response';

export class ContactUsApi {
  static getInfo = async (): Promise<ContactUsGetInfoResponse> => {
    try {
      const res = await HttpClient.get('/ContactUsInfo/GetContactUsInfo');
      const data = res.data;
      const response: ContactUsGetInfoResponse = ContactUsInfoMapper(data);

      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
