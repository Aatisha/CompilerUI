import { Component, OnInit,Input } from '@angular/core';
import { Lab } from 'src/app/models/lab';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {

  @Input() lab: Lab;
  @Input() profile: string;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  redirectQuestionListPage()
  {
    this.router.navigate(['/questionlist',this.lab.labId])
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
