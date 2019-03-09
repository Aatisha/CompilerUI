import { Injectable,NgZone} from '@angular/core';
import { HttpHeaders,HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Lab } from 'src/app/models/lab';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar} from '@angular/material';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AddLabService {
  addLabUrl='http://192.168.31.198:8070/api/v1/labs/add';
  constructor(public http:HttpClient,private snackBar: MatSnackBar,private zone: NgZone) { }
//ERROR HANDLING METHOD
  ///////////////////////////////////////////////////////////////////////////
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log("Client Side Error: ", errorResponse.error.message);
    } else {
      console.log("Server Side Error: ", errorResponse);
      this.openSnackbar("Problem occured while adding the lab details. Try Again.");
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
  addLab(request:Lab):Observable<Lab>
  {
    console.log('service called');
    return this.http.post<Lab>(this.addLabUrl,request,httpOptions).pipe(catchError(this.handleError.bind(this)));
  }
  
}