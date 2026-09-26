import { Reducer } from 'react'
import { AuthState, User } from './authContext'

export enum AuthActionType {
  FETCH_USER_SUCCESS,
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOAD_LOCAL_TOKEN,
  LOGOUT,
  LOGIN_ERROR,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR
}

type AuthAction =
  | {
      type: AuthActionType.FETCH_USER_SUCCESS
      payload: User | null
    }
  | {
      type: AuthActionType.REQUEST_LOGIN
    }
  | {
      type: AuthActionType.LOGIN_SUCCESS
      payload: string
    }
  | {
      type: AuthActionType.LOAD_LOCAL_TOKEN
      payload: string | null
    }
  | {
      type: AuthActionType.LOGOUT
    }
  | {
      type: AuthActionType.LOGIN_ERROR
      error: any
    }
  | {
      type: AuthActionType.SHOW_LOADER
    }
  | {
      type: AuthActionType.HIDE_LOADER
    }
  | {
      type: AuthActionType.SHOW_ERROR
      payload: any | false
    }
  | {
      type: AuthActionType.CLEAR_ERROR
    }

export const AuthReducer: Reducer<AuthState, AuthAction> = (
  initialState: AuthState,
  action: AuthAction
) => {
  switch (action.type) {
    case AuthActionType.FETCH_USER_SUCCESS:
      return {
        ...initialState,
        user: action.payload,
        loading: false
      }
    case AuthActionType.REQUEST_LOGIN:
      return {
        ...initialState,
        loading: true
      }
    case AuthActionType.LOGIN_SUCCESS:
      return {
        ...initialState,
        token: action.payload,
        loading: false
      }
    case AuthActionType.LOAD_LOCAL_TOKEN:
      return {
        ...initialState,
        token: action.payload,
        loading: false
      }
    case AuthActionType.LOGOUT:
      return {
        ...initialState,
        user: null,
        token: ''
      }
    case AuthActionType.LOGIN_ERROR:
      return {
        ...initialState,
        loading: false,
        error: action.error
      }
    case AuthActionType.SHOW_LOADER:
      return {
        ...initialState,
        loading: true
      }
    case AuthActionType.HIDE_LOADER:
      return {
        ...initialState,
        loading: false
      }
    case AuthActionType.SHOW_ERROR:
      return {
        ...initialState,
        error: action.payload
      }
    case AuthActionType.CLEAR_ERROR:
      return {
        ...initialState,
        error: null
      }

    default:
      throw new Error(`Unhandled action`)
  }
}
