import { AboutInterface } from '../../../models/about/about-interface';

export const aboutMapper = (input: any): AboutInterface => {
  return {
    content: input.content,
  };
};
