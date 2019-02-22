import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {

  @Input() labName: string;

  constructor() { }

  ngOnInit() {
  }
  getImage(labName)
  {
    switch(labName)
    {
      case "Java": return "second-lang.gif";
      case "C Programming": return "fourth-lang.gif";
      case "C++ Programming": return "third-lang.gif";
      case "HTML": return "fifth-lang.gif";
    }
  }

}
