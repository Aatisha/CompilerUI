import { Component, OnInit,ViewChild, Input } from '@angular/core';
import { CodeEditorComponent } from 'src/app/components/code-editor/code-editor.component';
import { Solution } from 'src/app/models/solution';
import { LoginRes } from 'src/app/models/loginRes';
import { SolutionService } from 'src/app/services/solution/solution.service';
import { MatSnackBar } from '@angular/material';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { ResultProgressComponent } from 'src/app/components/result-progress/result-progress.component';

@Component({
  selector: 'app-coding-page',
  templateUrl: './coding-page.component.html',
  styleUrls: ['./coding-page.component.scss']
})
export class CodingPageComponent implements OnInit {

  // solution:Solution;
  @ViewChild(CodeEditorComponent, { static: true }) codeEditor: CodeEditorComponent; // editor component instance
  @Input() labId:string;
  @Input() questionId:string;
  @Input() lang:string;
  solution:Solution = new Solution();
  progressBar = false;
  user : LoginRes= new LoginRes();
  @ViewChild(CodeEditorComponent, { static: true }) input :string;
  @ViewChild(CodeEditorComponent, { static: true }) output:string;
  result:string;
  constructor(private service : SolutionService,private snackBar: MatSnackBar,private bottomSheet: MatBottomSheet) { }

  ngOnInit () {
    this.user = JSON.parse(localStorage.getItem('login-data'));
   }

  private consoleCode() {
    console.log(this.codeEditor.getContent());
  }

  private saveCode()
  {
    this.solution.solution_file = this.codeEditor.getContent();
    this.solution.labId = this.labId;
    this.solution.questionId = this.questionId;
    this.solution.userId = this.user.userId;
    this.progressBar = !this.progressBar;
    debugger
    console.log(this.solution.solution_file);
    this.service.saveSolution(this.solution).subscribe(response=>{ 
      this.progressBar = !this.progressBar;
      debugger
      console.log('Response-'+response.responseMessage);
      this.snackBar.open(response.responseMessage, 'Ok', {duration: 1500});
    },error =>{
      debugger
      this.progressBar = !this.progressBar;
      
    });
  }
  
  private compileCode()
  {
    this.solution.solution_file = this.codeEditor.getContent().substring(1,this.codeEditor.getContent().length-1);
    this.solution.questionId = this.questionId;
    this.progressBar = !this.progressBar;
    debugger
    this.service.compileSolution(this.solution).subscribe(response=>{ 
      this.progressBar = !this.progressBar;
      if(response.statusCode===200){
      this.snackBar.open("Compilation Successful.", 'Ok', {duration: 3000});
      debugger
      }
      else{
      this.snackBar.open("Error while compiling", 'Ok', {duration: 3000});
      debugger
      }

    },error =>{
      this.progressBar = !this.progressBar;
      
    });
  }

  private runCode()
  {
    this.solution.solution_file = this.codeEditor.getContent().substring(1,this.codeEditor.getContent().length-1);
    this.solution.questionId = this.questionId;
    this.solution.input = this.codeEditor.getInput().substring(1,this.codeEditor.getInput().length-1);
    debugger
    this.progressBar = !this.progressBar;
    this.service.runSolution(this.solution).subscribe(response=>{ 
      this.progressBar = !this.progressBar;
      this.codeEditor.setOutput(response.output)
    },error =>{
      this.progressBar = !this.progressBar;
      
    });
  }

  private submitCode()
  {
    this.solution.solution_file = this.codeEditor.getContent().substring(1,this.codeEditor.getContent().length-1);
    this.solution.labId = this.labId;
    this.solution.questionId = this.questionId;
    this.solution.userId = this.user.userId;
    debugger
    this.progressBar = !this.progressBar;
    this.service.submitSolution(this.solution).subscribe(response=>{ 
      this.progressBar = !this.progressBar;
      this.result = response.result;
      console.log('Response-'+this.result);
      this.snackBar.open(response.responseMessage, 'Ok', {duration: 1500});
    },error =>{
      this.progressBar = !this.progressBar;
      
    });
  }

  private statusCode()
  {
    this.bottomSheet.open(ResultProgressComponent, {
      data: { result: this.result }
    }
      );
  }

  private beautifyContent() {
    this.codeEditor.beautifyContent();
  }

 

}
