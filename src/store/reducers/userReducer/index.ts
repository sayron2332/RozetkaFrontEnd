import { UserState, UserActions, UserActionTypes } from "./types";

const initialState: UserState = {
  user: {},
  message: null,
  loading: false,
  error: null,
  isAuth: false,
  selectedUser: null,
  allUsers: [],
};

const UserReducer = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
   
    case UserActionTypes.LOGIN_USER:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: action.payload.decodedToken,
        message: action.payload.message,
      };
      
    case UserActionTypes.LOGOUT_USER:
      return {
        user: {},
        message: null,
        loading: false,
        error: null,
        isAuth: false,
        selectedUser: null,
        allUsers: [],
       };
    case UserActionTypes.SERVER_ERROR:
        return { ...state, loading: false };

    case UserActionTypes.REGISTER_USER:
      return {
        user: {},
        message: action.payload.message,
        loading: false,
        error: null,
        isAuth: false,
        selectedUser: null,
        allUsers: [],
       };
    default:
      return state;
  }
};

export default UserReducer;