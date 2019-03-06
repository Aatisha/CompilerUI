import { Component, OnInit } from '@angular/core';
import { LoginRes } from 'src/app/models/loginRes';
import { LoginDataService } from 'src/app/services/login-data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user : LoginRes= new LoginRes();
  constructor(private loginService:LoginDataService) { }

  ngOnInit() {
    this.user = this.loginService.loginResponse;
    console.log(this.user.email);
  }

}
