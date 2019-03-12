import { Component, OnInit,Input } from '@angular/core';
import { Question } from 'src/app/models/question';
import { Cases } from 'src/app/models/cases';

@Component({
  selector: 'app-question-tab',
  templateUrl: './question-tab.component.html',
  styleUrls: ['./question-tab.component.scss']
})
export class QuestionTabComponent implements OnInit {

  @Input() question : Question;
  cases : Cases[] = [];
  c:string;
  
  constructor() { }

  ngOnInit() {
    var c = ("\""+this.question.sampleCase+"\"").toString();
   this.cases = JSON.parse(JSON.parse(c));
   console.log("cases  "+this.cases.length );

console.log( Array.isArray(this.cases)) // true
  }

}
