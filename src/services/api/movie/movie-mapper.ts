import { MovieBaseInterface } from '../../../models/movie/movie-base-interface';
import { MovieInterface } from '../../../models/movie/movie-interface';

export const movieBaseMapper = (input: any): MovieBaseInterface => {
  return {
    id: input.id || null,
    title: input.title || null,
  };
};

export const movieMapper = (input: any): MovieInterface => {
  return {
    ...movieBaseMapper(input),
    original_language: input.original_language || null,
    release_date: input.release_date || null,
    vote_average: input.vote_average,
    vote_count: input.vote_count,
  };
};
