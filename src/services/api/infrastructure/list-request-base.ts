import { RequestBase } from './request-base';
export interface ListRequestBase extends RequestBase {
  pageNumber?: number;
  pageSize?: number;
}
