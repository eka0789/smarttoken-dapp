import axios from 'axios';
import React, { useReducer, PropsWithChildren } from 'react';
import Querystring from 'query-string';
import { signMessage } from '../../utils/connectors';
import { AuthReducer } from './authReducer';
import { AuthActionType } from './authReducer';
import { Provider } from '@ethersproject/abstract-provider';

export interface User {
  address: string;
  admin: boolean | false;
  bio?: string;
  last_login: string;
  name: string;
  nonce?: number;
  profilePic: string;
  referralCode?: string;
  socialLink?: string;
  agreedToTermsOfUse: boolean | false;
  blackListed: boolean | false;
  didPayOutForBeingReffered: boolean | false;
  didPayOutForReferral: boolean | false;
  dismissedEmailVerification: boolean | false;
  emailVerificationCode: number;
  emailVerified: boolean | false;
  totalPaidOut?: number;
  totalSpent?: number;
  usedReferralCode?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean | false;
  error: any | null;
}

interface AuthStateContextProps extends AuthState {
  getUser(address: string): Promise<void>;
  loginUser(account: string, signer: Provider): Promise<void>;
  logout(account: string): Promise<void>;
  loadLocalToken(token: string | null): void;
}

export const initialState: AuthState = {
  user: null,
  token: '',
  loading: false,
  error: null
};

/**
 * Context
 */
const AuthStateContext = React.createContext<AuthStateContextProps>(
  {} as AuthStateContextProps
);

export function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }

  return context;
}

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const getUser = async (address: string): Promise<void> => {
    showLoader();
    clearError();
    axios
      .get(`/api/user/${address}`)
      .then(async (res) => {
        dispatch({
          type: AuthActionType.FETCH_USER_SUCCESS,
          payload: res.data.user
        });
      })
      .catch((err) => {
        dispatch({ type: AuthActionType.FETCH_USER_SUCCESS, payload: null });
        showError(err);
      })
      .finally(() => {
        hideLoader();
      });
  };

  const loginUser = async (
    account: string,
    signer: Provider
  ): Promise<void> => {
    try {
      clearError();
      showLoader();
      dispatch({ type: AuthActionType.REQUEST_LOGIN });

      try {
        const nonce = state.user?.nonce;
        if (!nonce) {
          showError('Invalild Nonce');
          hideLoader();
          return;
        }

        const signature = await signMessage(
          signer,
          account,
          `I am signing my one-time nonce: ${nonce}`
        );

        if (signature) {
          const { data } = await axios.post(
            `/api/login`,
            Querystring.stringify({ address: account, signature: signature })
          );
          const token = data.token;
          if (token) {
            localStorage.setItem(`alturaToken-${account.toLowerCase()}`, token);
            dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: token });
            await getUser(account);
          }
        }
      } catch (err) {
        showError(err);
      }
    } catch (error) {
      showError(error);
    }
    hideLoader();
  };

  const logout = async (account: string): Promise<void> => {
    dispatch({ type: AuthActionType.LOGOUT });
    localStorage.removeItem(`alturaToken-${account?.toLowerCase()}`);
  };

  const loadLocalToken = (token: string | null) => {
    dispatch({ type: AuthActionType.LOAD_LOCAL_TOKEN, payload: token || '' });
  };

  const showLoader = () => dispatch({ type: AuthActionType.SHOW_LOADER });
  const hideLoader = () => dispatch({ type: AuthActionType.HIDE_LOADER });

  const showError = (error: any | undefined): void =>
    dispatch({ type: AuthActionType.SHOW_ERROR, payload: error });
  const clearError = (): void => dispatch({ type: AuthActionType.CLEAR_ERROR });

  return (
    <AuthStateContext.Provider
      value={{ ...state, getUser, loginUser, logout, loadLocalToken }}
    >
      {children}
    </AuthStateContext.Provider>
  );
};
