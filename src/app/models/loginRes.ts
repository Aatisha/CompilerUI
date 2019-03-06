import {Lab} from './lab';
export class LoginRes{
    public userId:string;
    public name:string;
    public email:string;
    public dept:string;
    public profile:string;
    public year:string;
    public section:string;
    public responseMessage:string;
    public lab: Lab[];
}