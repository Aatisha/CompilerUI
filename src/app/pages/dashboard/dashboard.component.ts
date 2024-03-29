import { Component, OnInit } from '@angular/core';
import { LoginRes } from 'src/app/models/loginRes';
import { MatDialog } from '@angular/material/dialog';
import { CreateLabComponent } from 'src/app/components/create-lab/create-lab.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user : LoginRes= new LoginRes();
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('login-data'));
    
  }

  openDialog(): void {
    
    const dialogRef = this.dialog.open(CreateLabComponent, {
      width: '700px',
      data: {
        dept: this.user.dept,
        assignee:this.user.userId
      }
    });
  }

}
