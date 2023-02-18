import { user } from "@angular/fire/auth";

export interface SignInCredentials{
    email:string;
    password:string;
}
export interface SignupCredentials extends SignInCredentials{
    displayName:string;
}
user
