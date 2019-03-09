import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignupReq } from 'src/app/models/SignupReq';
@Injectable({
  providedIn: 'root'
})
export class GetTeacherByDeptService {

  constructor(private http: HttpClient) { }
  getTeacherByDept(dept:string):Observable<SignupReq[]>
  {
    console.log("dept inside service " + dept)
    return this.http.get<SignupReq[]>("http://192.168.31.198:8070/api/v1/users/dept/"+dept);
  }
}
