import { Component, OnInit } from '@angular/core';
import { LoginReq } from 'src/app/models/LoginReq';
import { Md5 } from 'ts-md5';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formRequest=new LoginReq();
  constructor(public service:RestApiService,private router : Router) { }

  ngOnInit( ) {
  }

  onSubmit(request:LoginReq){
    const md5 = new Md5();
    request.password=md5.appendStr(request.password).end().toString();
    console.log(request);

    this.service.login(request).subscribe(response=>{ 
      console.log('Response-'+response);
      this.router.navigate(['/dashboard']);
    });

  }

}
