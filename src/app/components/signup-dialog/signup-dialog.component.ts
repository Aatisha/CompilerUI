import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeComponent } from '../home/home.component';
import { SignupReq } from '../../models/SignupReq';
import { RestApiService } from 'src/app/services/rest-api.service';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss']
})
export class SignupDialogComponent implements OnInit {

  depts: string[] = [ 'CSE','IT','ECE','EE'];
  years: number[]=[2015,2016,2017,2018,2019,2020,2021,2022,2023];
  section: string[]=['A','B','C'];
  types:string[]=['Teacher','Student']
  ptype:string='';
  
  public formRequest=new SignupReq();
  constructor( public dialogRef: MatDialogRef<HomeComponent>, public service:RestApiService,private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(request:SignupReq){
    
    const md5 = new Md5();
    request.password=md5.appendStr(request.password).end().toString();
    
    if(request.profile==='Teacher')
    {
    this.service.signupTeacher(request).subscribe(
      response=> {
      
      this.snackBar.open('Signup successful!', 'Ok', {duration: 1500});
      this.dialogRef.close();
    }
      );
    }
    if(request.profile==='Student')
    {
    this.service.signupStudent(request).subscribe(response=> {
      
      this.snackBar.open('Signup successful!', 'Ok', {duration: 1500});
      this.dialogRef.close();
    });
    }
  }
}
