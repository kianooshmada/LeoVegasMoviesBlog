import HttpClient from '../../../utils/http-client';
import { MovieGetRequest } from './requests/movie-get-request';
import { MovieInterface } from '../../../models/movie/movie-interface';
import { MovieBaseInterface } from '../../../models/movie/movie-base-interface';
import { movieMapper } from './movie-mapper';
import { movieBaseMapper } from './movie-mapper';
import { MovieGetListResponse } from './responses/movie-get-list-response';
import { ListRequestBase } from '../infrastructure/list-request-base';
import { listAdapter, ListInterface } from '../../../models/list-interface';
export class MovieApi {
  static list = async (
    request: ListRequestBase
  ): Promise<ListInterface<MovieBaseInterface> | null> => {
    try {
      //const query = `?pageNumber=${request.pageNumber}&pagesize=${request.pageSize}`;
      const query = `?page=${request.pageNumber}`;
      const res: any = await HttpClient.get(
        '/discover/movie' + query,
        request.config
      );

      console.log(res.data);

      const data: any = res.data;
      const output: ListInterface<MovieBaseInterface> | null = listAdapter(
        data,
        movieBaseMapper
      );

      return Promise.resolve(output);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  static get = async (request: MovieGetRequest): Promise<MovieInterface> => {
    try {
      const res: any = await HttpClient.get(
        `/movie/${request.id}`,
        request.config
      );
      const output = movieMapper(res.data);

      console.log(output);

      return Promise.resolve(output);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  // static getTopList = async (): Promise<MovieGetListResponse> => {
  //   try {
  //     const res = await HttpClient.get('/discover/movie');
  //     const list: any[] = res.data;
  //     const response: MovieGetListResponse = list.map(movieBaseMapper);

  //     return Promise.resolve(response);
  //   } catch (e) {
  //     return Promise.reject(e);
  //   }
  // };
}
