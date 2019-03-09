import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignupReq } from 'src/app/models/SignupReq';
import {VariableService} from '../variable.service';
@Injectable({
  providedIn: 'root'
})
export class GetTeacherByDeptService {
  url="users/dept/";
  constructor(private http: HttpClient,private variable:VariableService) { }
  getTeacherByDept(dept:string):Observable<SignupReq[]>
  {
    console.log("dept inside service " + dept)
    return this.http.get<SignupReq[]>(this.variable.apiUrl+this.url+dept);
  }
}
