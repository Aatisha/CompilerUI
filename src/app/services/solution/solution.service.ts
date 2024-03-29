import { Injectable, NgZone } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { VariableService } from '../variable.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError, Observable } from 'rxjs';
import { CommonResponses } from 'src/app/models/commonResponse';
import { catchError } from 'rxjs/operators';
import { Solution } from 'src/app/models/solution';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class SolutionService {
  saveURL = 'solution/save';
  executeURL = 'solution/execute';
  submitURL = 'solution/submit';
  constructor(private http: HttpClient,private snackBar: MatSnackBar,private zone: NgZone,private variable:VariableService) { }

  //ERROR HANDLING METHOD
  ///////////////////////////////////////////////////////////////////////////
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      
    } else {
      
      this.openSnackbar("Error Occured.");
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

  saveSolution(request:Solution):Observable<CommonResponses>
  {
    
    return this.http.post<CommonResponses>(this.variable.apiUrl+this.saveURL,request,httpOptions).pipe(catchError(this.handleError.bind(this)));
  }
  compileSolution(request:Solution):Observable<Solution>
  {
    

    return this.http.post<Solution>(this.variable.apiUrl+this.executeURL,request,httpOptions).pipe(catchError(this.handleError.bind(this)));
  }
  runSolution(request:Solution):Observable<Solution>
  {
    
    
    return this.http.post<Solution>(this.variable.apiUrl+this.executeURL,request,httpOptions).pipe(catchError(this.handleError.bind(this)));
  }
  submitSolution(request:Solution):Observable<Solution>
  {
    
    return this.http.post<Solution>(this.variable.apiUrl+this.submitURL,request,httpOptions).pipe(catchError(this.handleError.bind(this)));
  }


}
