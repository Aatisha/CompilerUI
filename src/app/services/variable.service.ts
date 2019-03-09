import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableService {
  public apiUrl:string = "http://localhost:8070/api/v1/";
  constructor() { }
}
