import { HomeGetIntroductionResponse } from './responses/home-get-introduction-response';
import data from '../../../data';
export class HomeApi {
  static GetIntroduction = async (): Promise<HomeGetIntroductionResponse> => {
    try {
      const res: any = data.context;
      const output: HomeGetIntroductionResponse = {
        context: res,
      };
      return Promise.resolve(output);
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
