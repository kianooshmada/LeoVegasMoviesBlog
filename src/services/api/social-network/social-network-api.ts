import HttpClient from '../../../utils/http-client';
import { SocialNetworkGetListResponse } from './responses/social-network-get-list-response';
import { socialNetworkMapper } from './social-network-mapper';

export class SocialNetworkApi {
  static basePath: string = '/SocialNetwork';

  static getList = async (): Promise<SocialNetworkGetListResponse> => {
    try {
      const res = await HttpClient.get(this.basePath + '/GetSocialNetworkList');
      const list: any[] = res.data;
      const response: SocialNetworkGetListResponse =
        list.map(socialNetworkMapper);

      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
