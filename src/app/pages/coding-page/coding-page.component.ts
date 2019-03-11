import { Component, OnInit,ViewChild } from '@angular/core';
import { CodeEditorComponent } from 'src/app/components/code-editor/code-editor.component';

@Component({
  selector: 'app-coding-page',
  templateUrl: './coding-page.component.html',
  styleUrls: ['./coding-page.component.scss']
})
export class CodingPageComponent implements OnInit {

  @ViewChild(CodeEditorComponent) codeEditor: CodeEditorComponent; // editor component instance
  constructor() { }

  ngOnInit () { }

  private consoleCode() {
    console.log(this.codeEditor.getContent());
  }

  private beautifyContent() {
    this.codeEditor.beautifyContent();
  }

 

}
