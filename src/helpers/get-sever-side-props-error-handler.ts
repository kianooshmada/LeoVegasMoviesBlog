import { ErrorInterface } from '../models/error-interface';
import { convertTryCatchParamToError } from './convert-try-catch-param-to-error';

interface GetServerSidePropsErrorHandlerOutput {
  props: {
    error?: ErrorInterface | null;
  };
}

export const getServerSidePropsErrorHandler = (
  e: any
): GetServerSidePropsErrorHandlerOutput => {
  let error: ErrorInterface | null = convertTryCatchParamToError(e);

  return {
    props: {
      error: error,
    },
  };
};
