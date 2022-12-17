import { Injectable, NgZone } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import {VariableService} from '../variable.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError, Observable } from 'rxjs';
import { Question } from 'src/app/models/question';
import { CommonResponses } from 'src/app/models/commonResponse';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CreateQuestionService {
  createUrl='labs/question/add';
  updateUrl='labs/question/update';
  constructor(private http: HttpClient,private snackBar: MatSnackBar,private zone: NgZone,private variable:VariableService) { }

  //ERROR HANDLING METHOD
  ///////////////////////////////////////////////////////////////////////////
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      
    } else {
      
      this.openSnackbar("Problem creating question");
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

  createQuestion(request:Question):Observable<CommonResponses>
  {
    
    return this.http.post<CommonResponses>(this.variable.apiUrl+this.createUrl,request,httpOptions).pipe(catchError(this.handleError.bind(this)));
  }

  updateQuestion(request:Question):Observable<CommonResponses>
  {
    
    
    return this.http.put<CommonResponses>(this.variable.apiUrl+this.updateUrl,request,httpOptions).pipe(catchError(this.handleError.bind(this)));
  }
}
