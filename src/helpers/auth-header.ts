import SessionNames from '../constants/session-names';
import { getCookie } from '../utils/cookie';

export const authHeader = (req: any) => {
  const token = getCookie(SessionNames.AUTH, req);

  if (token) {
    return { Authorization: 'Bearer ' + token };
  } else {
    return {};
  }
};
