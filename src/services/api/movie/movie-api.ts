import HttpClient from '../../../utils/http-client';
import { MovieGetRequest } from './requests/movie-get-request';
import { MovieInterface } from '../../../models/movie/movie-interface';
import { movieMapper } from './movie-mapper';
import { movieBaseMapper } from './movie-mapper';
import { MovieGetListResponse } from './responses/movie-get-list-response';

export class MovieApi {
  static get = async (request: MovieGetRequest): Promise<MovieInterface> => {
    try {
      const res: any = await HttpClient.get(
        `/GetNewsDetails?newsID=${request.id}`,
        request.config
      );
      const output = movieMapper(res.data);

      return Promise.resolve(output);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  static list = async (): Promise<MovieGetListResponse> => {
    try {
      const res = await HttpClient.get('/discover/movie');
      const list: any[] = res.data;
      const response: MovieGetListResponse = list.map(movieBaseMapper);

      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
