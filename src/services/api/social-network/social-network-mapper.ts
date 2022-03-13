import { SocialNetworkInterface } from '../../../models/social-network/social-network-interface';

export const socialNetworkMapper = (input: any): SocialNetworkInterface => {
  return {
    title: input.name,
    type: input.socialNetworkType,
    url: input.url,
  };
};
