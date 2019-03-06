import { Component, OnInit,Input } from '@angular/core';
import { Lab } from 'src/app/models/lab';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {

  @Input() lab: Lab;

  constructor() { }

  ngOnInit() {
  }
  
  getImage(labName:string)
  {
    switch(labName)
    {
      case "Java Programming": return "second-lang.gif";
      case "C Programming": return "fourth-lang.gif";
      case "C++ Programming": return "third-lang.gif";
      case "HTML": return "fifth-lang.gif";
    }
  }

}
