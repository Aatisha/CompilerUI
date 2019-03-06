import { Injectable } from '@angular/core';
import { LoginRes } from '../models/loginRes';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  public loginResponse:LoginRes;
  constructor() { }
}
