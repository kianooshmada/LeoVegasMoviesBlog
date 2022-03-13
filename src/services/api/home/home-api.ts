import HttpClient from '../../../utils/http-client';
import { HomeGetIntroductionResponse } from './responses/home-get-introduction-response';

export class HomeApi {
  static GetIntroduction = async (): Promise<HomeGetIntroductionResponse> => {
    try {
      const res: any = await HttpClient.get('GenericText/HomePageAboutUsText');
      const output: HomeGetIntroductionResponse = {
        context: res.data,
      };
      return Promise.resolve(output);
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
