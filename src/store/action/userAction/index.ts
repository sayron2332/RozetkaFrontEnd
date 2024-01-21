import { UserActionTypes, UserActions } from "../../reducers/userReducer/types";
import { Dispatch } from "redux"
import { toast } from "react-toastify"
import {jwtDecode} from "jwt-decode"

// Import services
import { login, logout, register, removeTokens, setAccessToken, setRefreshToken } from "../../../services/api-user-service";
import { IUserLogin, IUserRegister } from "../../../types/user";

export const LoginUser = (user : IUserLogin) => {
    return async(dispatch: Dispatch<UserActions>) => {
         try{
            const data = await login(user);
            console.log(data.accessToken)
            const { response } = data;
           
            if(!response.success){
               toast.error(response.message)
            }
            else{
               toast.success(response.message)
               const { accessToken, refreshToken, message } = response;
               setAccessToken(accessToken);
               setRefreshToken(refreshToken);
               const decodedToken = jwtDecode(accessToken) as any;
               dispatch(
                {
                  type: UserActionTypes.LOGIN_USER, 
                  payload: {message, decodedToken}}
                )
            }
         }
         catch(e){
            dispatch({type: UserActionTypes.SERVER_ERROR, payload: "Unknown error!"})
        }
    }
}

export const RegisterUser = (user : IUserRegister) => {
  return async(dispatch: Dispatch<UserActions>) => {
       try{
          const data = await register(user);
          const { response } = data;
         
          if(!response.success){
             toast.error(response.message)
          }
          else{
             toast.success(response.message)
             dispatch(
              {
                type: UserActionTypes.REGISTER_USER, 
                payload: response.payload
              })
          }
       }
       catch(e){
          dispatch({type: UserActionTypes.SERVER_ERROR, payload: "Unknown error!"})
      }
  }
}

export const LogOut = () => {
     return async (dispatch: Dispatch<UserActions>) => {
     const data = await logout();
     console.log("LogOut " + data)
     const { response } = data;
     if (response.success) {
       toast.success(response.message)
       removeTokens();
       dispatch({
         type: UserActionTypes.LOGOUT_USER,
         payload: {response}
       });
     }
   };
 };

