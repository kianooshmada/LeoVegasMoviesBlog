import { RequestBase } from '../../infrastructure/request-base';

export interface MovieGetRequest extends RequestBase {
  id: string;
}
