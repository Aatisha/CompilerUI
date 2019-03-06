import { Injectable,NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupReq } from '../models/SignupReq';
import { HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginReq } from '../models/LoginReq';
import { LoginRes } from '../models/LoginRes';
import { MatSnackBar} from '@angular/material';

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

  constructor(private http: HttpClient,private snackBar: MatSnackBar,private zone: NgZone) { }

 //ERROR HANDLING METHOD
  ///////////////////////////////////////////////////////////////////////////
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log("Client Side Error: ", errorResponse.error.message);
    } else {
      console.log("Server Side Error: ", errorResponse);
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
    console.log('service called');
    return this.http.post<SignupReq>(this.signupStudentUrl,request,httpOptions);
  }

  signupTeacher(request:SignupReq):Observable<SignupReq>
  {
    console.log('service called');
    return this.http.post<SignupReq>(this.signupTeacherUrl,request,httpOptions);
  }

  login(request:LoginReq):Observable<LoginRes>
  {
    console.log('service called');
    return this.http.post<LoginRes>(this.loginUrl,request,httpOptions).pipe(catchError(this.handleError.bind(this)));
  }
}
