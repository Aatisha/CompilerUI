import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonResponses } from 'src/app/models/commonResponse';
import {VariableService} from '../variable.service';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionByLabIdService {
  url = "labs/question/";
  constructor(private http: HttpClient,private variable:VariableService) { }
  getQuestionByLabId(labId:string):Observable<CommonResponses>
  {
    console.log("labId inside service " + labId)
    return this.http.get<CommonResponses>(this.variable.apiUrl+this.url+labId);
  }
}
