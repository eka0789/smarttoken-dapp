import { useWeb3React } from '@web3-react/core';
import axios from 'axios';
import { useEffect } from 'react';
import { useAuthState } from 'src/contexts/auth/authContext';

export function useAxios() {
  const { token, user, loadLocalToken, logout } = useAuthState();
  const { account } = useWeb3React();

  useEffect(() => {
    if (account) {
      const local_token = localStorage.getItem(
        `alturaToken-${account.toLowerCase()}`
      );
      loadLocalToken(local_token || '');
    }
  }, [account]);

  axios.interceptors.request.use((request) => {
    if (token && request?.headers) {
      (request.headers.common as any)['Authorization'] = `Bearer ${token}`;
    }

    request.timeout = 300000;

    return request;
  });

  axios.interceptors.response.use(
    (response) => {
      const { status, statusText, data } = response;
      return Promise.resolve(response);
    },
    (error) => {
      const { status, statusText, data } = error.response;

      if (status === 401 || status === 403) {
        logout(user?.address?.toLowerCase() || '');
        window.location.reload();
      }

      return Promise.reject(error);
    }
  );
}
