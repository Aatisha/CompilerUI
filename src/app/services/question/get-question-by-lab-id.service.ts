import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonResponses } from 'src/app/models/commonResponse';


@Injectable({
  providedIn: 'root'
})
export class GetQuestionByLabIdService {

  constructor(private http: HttpClient) { }
  getQuestionByLabId(labId:string):Observable<CommonResponses>
  {
    console.log("labId inside service " + labId)
    return this.http.get<CommonResponses>("http://192.168.31.198:8070/api/v1/labs/question/"+labId);
  }
}
