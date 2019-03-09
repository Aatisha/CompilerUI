import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()  username :string;
  constructor(private router:Router,private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  logout()
  {
    localStorage.removeItem('login-data');
    this.snackBar.open("Logout Successful.", 'Ok', {duration: 1500});
    this.router.navigate(['/']);
  }
}
