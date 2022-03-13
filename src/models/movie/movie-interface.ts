import { MovieBaseInterface } from './movie-base-interface';

export interface MovieInterface extends MovieBaseInterface {
  original_language: string;
  release_date: string;
  vote_average: string;
  vote_count: string;
}
