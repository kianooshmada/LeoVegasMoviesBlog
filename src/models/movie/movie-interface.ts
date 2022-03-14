import { MovieBaseInterface } from './movie-base-interface';

export interface MovieInterface extends MovieBaseInterface {
  original_language: string;
  vote_average: string;
  vote_count: string;
  backdrop_path: string;
  overview: string;
}
