import { MovieBaseInterface } from '../../../../models/movie/movie-base-interface';

export interface MovieGetNowPlayingListResponse
  extends Array<MovieBaseInterface> {}
