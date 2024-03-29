import { Injectable,NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupReq } from '../models/SignupReq';
import { HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginReq } from '../models/LoginReq';
import { LoginRes } from '../models/LoginRes';
import { MatSnackBar} from '@angular/material/snack-bar';
import {VariableService} from './variable.service';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  signupStudentUrl='users/signup/student';
  signupTeacherUrl='users/signup/user';
  loginUrl='users/login';

  constructor(private http: HttpClient,private snackBar: MatSnackBar,private zone: NgZone,private variable:VariableService) { }

 //ERROR HANDLING METHOD
  ///////////////////////////////////////////////////////////////////////////
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      
    } else {
      
      this.openSnackbar("Username or password incorrect.");
    }
    return throwError("There is an issue with the call.");
  }

  //SNACK BAR METHOD
  ///////////////////////////////////////////////////////////////////////////
  openSnackbar(snackMessage: string) {
    this.zone.run(() => {
      this.snackBar.open(snackMessage, 'Ok', {duration: 1500});
  })
  }
  signupStudent(request:SignupReq):Observable<SignupReq>
  {
    
    return this.http.post<SignupReq>(this.variable.apiUrl+this.signupStudentUrl,request,httpOptions);
  }

  signupTeacher(request:SignupReq):Observable<SignupReq>
  {
    
    return this.http.post<SignupReq>(this.variable.apiUrl+this.signupTeacherUrl,request,httpOptions);
  }

  login(request:LoginReq):Observable<LoginRes>
  {
    
    return this.http.post<LoginRes>(this.variable.apiUrl+this.loginUrl,request,httpOptions).pipe(catchError(this.handleError.bind(this)));
  }
}
