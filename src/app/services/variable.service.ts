import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableService {
  //public apiUrl:string = "http://localhost:8070/api/v1/";
  public apiUrl:string = "http://192.168.31.198:8070/api/v1/";
  constructor() { }
}
