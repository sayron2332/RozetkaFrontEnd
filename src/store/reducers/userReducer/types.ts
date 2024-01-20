export interface UserState{
    user: any,
    message: null | string,
    loading: boolean,
    error: null | string,
    isAuth: boolean,
    selectedUser: any,
    allUsers: []
}

export enum UserActionTypes {
    LOGIN_USER = "LOGIN_USER",
    LOGOUT_USER = "LOGOUT_USER",
    SERVER_ERROR = "SERVER_ERROR",
}

interface LogoutUserAction {
    type: UserActionTypes.LOGOUT_USER;
}
  
interface LoginUserAction{
    type: UserActionTypes.LOGIN_USER,
    payload: any
}

interface LogoutUserAction {
    type: UserActionTypes.LOGOUT_USER;
}

interface ServerErrorAction{
    type: UserActionTypes.SERVER_ERROR,
    payload: any
}

export type UserActions = | LogoutUserAction | LoginUserAction | ServerErrorAction