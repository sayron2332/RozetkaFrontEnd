export interface IUserLogin
{
    email: string,
    password: string,
    rememberMe: boolean
}

export interface IUserRegister
{
    firstName: string,
    lastName: string,
    phoneNumber: string | null
    email: string,
    password: string,
    image: File | null
}