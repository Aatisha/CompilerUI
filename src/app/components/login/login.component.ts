import { Component, OnInit } from '@angular/core';
import { LoginReq } from 'src/app/models/LoginReq';
import { Md5 } from 'ts-md5';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Router } from '@angular/router';
import { MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formRequest=new LoginReq();
  constructor(public service:RestApiService,private router : Router,private snackBar: MatSnackBar) { }
  response :any;
  ngOnInit( ) {
  }

  onSubmit(request:LoginReq){
    const md5 = new Md5();
    request.password=md5.appendStr(request.password).end().toString();
    console.log(request);

    this.service.login(request).subscribe(response=>{ 
      console.log('Response-'+response.responseMessage);
      //this.loginService.loginResponse=response;
      // localStorage.removeItem('login-data')
      localStorage.setItem('login-data',JSON.stringify(response));
      this.snackBar.open(response.responseMessage, 'Ok', {duration: 1500});
      this.router.navigate(['/dashboard']);
    });

  }

}
