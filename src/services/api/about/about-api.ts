import { AboutGetResponse } from './responses/about-get-response';
import data from '../../../data';
export class AboutApi {
  static GetContent = async (): Promise<AboutGetResponse> => {
    try {
      const output: AboutGetResponse = {
        content: data.context,
      };
      return Promise.resolve(output);
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
