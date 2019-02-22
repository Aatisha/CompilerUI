import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupReq } from '../models/SignupReq';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginReq } from '../models/LoginReq';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  signupStudentUrl='http://192.168.31.198:8070/api/v1/users/signup/student';
  signupTeacherUrl='http://192.168.31.198:8070/api/v1/users/signup/user';
  loginUrl='http://192.168.31.198:8070/api/v1/users/login';

  constructor(private http: HttpClient) { }

  signupStudent(request:SignupReq):Observable<SignupReq>
  {
    console.log('service called');
    return this.http.post<SignupReq>(this.signupStudentUrl,request,httpOptions);
  }

  signupTeacher(request:SignupReq):Observable<SignupReq>
  {
    console.log('service called');
    return this.http.post<SignupReq>(this.signupTeacherUrl,request,httpOptions);
  }

  login(request:LoginReq):Observable<LoginReq>
  {
    console.log('service called');
    return this.http.post<LoginReq>(this.loginUrl,request,httpOptions);
  }
}
