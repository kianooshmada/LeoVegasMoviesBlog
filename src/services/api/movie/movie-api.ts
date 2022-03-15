import HttpClient from '../../../utils/http-client';
import { MovieGetRequest } from './requests/movie-get-request';
import { MovieInterface } from '../../../models/movie/movie-interface';
import { MovieBaseInterface } from '../../../models/movie/movie-base-interface';
import { movieMapper } from './movie-mapper';
import { movieBaseMapper } from './movie-mapper';
import { ListRequestBase } from '../infrastructure/list-request-base';
import { listAdapter, ListInterface } from '../../../models/list-interface';
export class MovieApi {
  static list = async (
    request: ListRequestBase
  ): Promise<ListInterface<MovieBaseInterface> | null> => {
    try {
      let query = `?page=${request.pageNumber}`;
      if (request.primary_release_year != null) {
        query += `&primary_release_year=${request.primary_release_year}`;
      }
      const res: any = await HttpClient.get(
        '/discover/movie' + query,
        request.config
      );

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

      return Promise.resolve(output);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  static getNowPalyingList = async (
    request: ListRequestBase
  ): Promise<ListInterface<MovieBaseInterface> | null> => {
    try {
      const query = `?page=${request.pageNumber}`;
      const res: any = await HttpClient.get(
        '/movie/now_playing' + query,
        request.config
      );

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
}
