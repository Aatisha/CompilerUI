import { Component, OnInit, Inject } from '@angular/core';
import { LoginRes } from 'src/app/models/loginRes';
import { Question } from 'src/app/models/question';
import { Cases } from 'src/app/models/cases';
import { MatBottomSheetRef,MAT_BOTTOM_SHEET_DATA, MatSnackBar } from '@angular/material';
import { CreateQuestionService } from 'src/app/services/question/create-question.service';
import { QuestionService } from 'src/app/services/question/question.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {

 
  question: Question = new Question();
  languages = ['C', 'C++', 'Java'];
  sampleCases : Cases[] = [];
  testCases : Cases[] = [];
  constructor(private bottomSheetRef: MatBottomSheetRef<CreateQuestionComponent>,@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,private service:CreateQuestionService,private snackBar: MatSnackBar,private qservice:QuestionService) { 
    this.question.labId = data.labId;

  }

  ngOnInit() {
    this.checkQuestion();
  }

  addSample() {
    this.sampleCases.push(new Cases());
  }

  addTest() {
    this.testCases.push(new Cases());
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  deleteSample(i:number)
  {
    this.sampleCases.splice(i,1);
  }
  deleteTest(i:number)
  {
    this.testCases.splice(i,1);
  }

  refresh(): void {
    window.location.reload();
}

  onSubmit(){
    // debugger
    this.question.sampleCase = JSON.stringify(JSON.stringify(this.sampleCases));
    this.question.sampleCase = this.question.sampleCase.substring(1,this.question.sampleCase.length-1);
    console.log(this.question.sampleCase);
    this.question.testCase = JSON.stringify(JSON.stringify(this.testCases));
    this.question.testCase = this.question.testCase.substring(1,this.question.testCase.length-1)
    console.log(this.question.testCase);

     console.log(this.question.questionHead + " " + this.question.question + " "+ this.question.programmingLang + " "+this.question.labId)
    this.service.createQuestion(this.question).subscribe(response=>{ 
      console.log('Response-'+response.responseMessage);
      this.snackBar.open(response.responseMessage, 'Ok', {duration: 1500});
      this.bottomSheetRef.dismiss();
      this.refresh();
    });
  }

  onUpdate(){
    // debugger
    this.question.sampleCase = JSON.stringify(JSON.stringify(this.sampleCases));
    this.question.sampleCase = this.question.sampleCase.substring(1,this.question.sampleCase.length-1);
    console.log(this.question.sampleCase);
    this.question.testCase = JSON.stringify(JSON.stringify(this.testCases));
    this.question.testCase = this.question.testCase.substring(1,this.question.testCase.length-1)
    console.log(this.question.testCase);
   
    console.log(this.question.questionHead + " " + this.question.question + " "+ this.question.programmingLang + " "+this.question.questionId);
    debugger
    this.service.updateQuestion(this.question).subscribe(response=>{ 
      console.log('Response-'+response.responseMessage);
      this.snackBar.open(response.responseMessage, 'Ok', {duration: 1500});
      this.bottomSheetRef.dismiss();
      // this.refresh();
    });
  }

  checkQuestion()
  {
    if(this.data.question === null)
    {
  
      this.testCases.push(new Cases());
      this.sampleCases.push(new Cases());
     
    }
    else{
      
      this.question = this.data.question;
      var sc = ("\""+this.question.sampleCase+"\"").toString();
      this.sampleCases = JSON.parse(JSON.parse(sc));
      var tc = ("\""+this.question.testCase+"\"").toString();
      this.question.labId = this.data.labId;
      this.testCases = JSON.parse(JSON.parse(tc));
     
    }
  }
}
