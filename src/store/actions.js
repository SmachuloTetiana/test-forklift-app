import { CREATE_USER_ACCOUNT, SHOW_LOADER, FETCH_USER } from './types';

export const showLoader = () => ({
  type: SHOW_LOADER
});

export const createUser = payload => {
  return {
    type: CREATE_USER_ACCOUNT,
    payload
  };
};

export const fetchedUsers = payload => ({
  type: FETCH_USER,
  payload
});
