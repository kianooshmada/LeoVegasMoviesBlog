import axios from 'axios';
import { ErrorInterface } from '../models/error-interface';

export const convertTryCatchParamToError = (e: any): ErrorInterface => {
  let output: ErrorInterface = { message: e.message };
  if (e instanceof TypeError) {
    output.message = e.message;
  } else if (e instanceof RangeError) {
    output.message = e.message;
  } else if (e instanceof EvalError) {
    output.message = e.message;
  } else if (typeof e === 'string') {
    output.message = e;
  } else if (axios.isAxiosError(e)) {
    output = {
      code: e.response?.status ? e.response.status.toString() : '',
      message: e.response?.statusText || e.message,
    };
  }
  return output;
};
