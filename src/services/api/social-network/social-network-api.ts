import { SocialNetworkGetListResponse } from './responses/social-network-get-list-response';
import { socialNetworkMapper } from './social-network-mapper';
import data from '../../../data';
export class SocialNetworkApi {
  static getList = async (): Promise<SocialNetworkGetListResponse> => {
    try {
      const list: any[] = data.socialNetworks;
      const response: SocialNetworkGetListResponse =
        list.map(socialNetworkMapper);

      console.log(response);
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
