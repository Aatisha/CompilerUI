import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import * as ace from 'ace-builds';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-eclipse';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-vibrant_ink';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/theme-gob';
import 'ace-builds/src-noconflict/theme-tomorrow_night_blue';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';


const INIT_CONTENT = '';
const baseTheme= 'ace/theme/';


@Component({
    selector: 'app-code-editor',
    templateUrl: './code-editor.component.html',
    styleUrls: ['./code-editor.component.scss']
}) export class CodeEditorComponent implements OnInit {
    
    //public THEME = 'ace/theme/eclipse';
    private codeEditor: ace.Ace.Editor;
    private editorBeautify; // beautify extension
    theme = 'eclipse';
    @ViewChild('codeEditor', { static: true }) private codeEditorElmRef: ElementRef;
    @Input() content: string;
    @Input() lang:string;
    input:string =" ";
    output:string;
    LANG = 'ace/mode/';

    constructor() { }

    ngOnInit() {
        if(this.lang === 'c' || this.lang ==='cpp'){
            this.LANG +='c_cpp'; 
            
        }
        else if(this.lang === 'python3')
        {
            this.LANG+='python';
            
        }
        else{
            this.LANG +='java'; 
            
        }

        ace.require('ace/ext/language_tools');
        const element = this.codeEditorElmRef.nativeElement;
        const editorOptions = this.getEditorOptions();
        this.codeEditor = this.createCodeEditor(element, editorOptions);
        this.setContent(this.content || INIT_CONTENT);
        // hold reference to beautify extension
        this.editorBeautify = ace.require('ace/ext/beautify');
    }


    private createCodeEditor(element: Element, options: any): ace.Ace.Editor {
        const editor = ace.edit(element, options);
        editor.setTheme('ace/theme/eclipse');
        editor.getSession().setMode(this.LANG);
        editor.setShowFoldWidgets(true);
       editor.renderer.setScrollMargin(10, 10,10,10);
        return editor;
    }

    // setEditorTheme(value) {
    //     
    //     this.codeEditor.setTheme(value);
    // }

    // missing propery on EditorOptions 'enableBasicAutocompletion' so this is a wolkaround still using ts
    private getEditorOptions(): Partial<ace.Ace.EditorOptions> & { enableBasicAutocompletion?: boolean; } {
        const basicEditorOptions: Partial<ace.Ace.EditorOptions> = {
            highlightActiveLine: true,
            minLines: 30,
            maxLines: 30,
            autoScrollEditorIntoView: true
        };
        const extraEditorOptions = { enableBasicAutocompletion: true };
        return Object.assign(basicEditorOptions, extraEditorOptions);
    }

    /**
     * @returns - the current editor's content.
     */
    public getContent() {
        if (this.codeEditor) {
            const code = JSON.stringify(this.codeEditor.getValue());
            return code;
        }
    }

    /**
     * @param content - set as the editor's content.
     */
    public setContent(content: string): void {
        if (this.codeEditor) {
            this.codeEditor.setValue(content);
        }
    }

    /**
     * @returns - the current editor's input.
     */
    public getInput() {
        if (this.codeEditor) {
            const input = JSON.stringify(this.input);
            return input;
        }
    }
    /**
     * @returns - the current editor's input.
     */
    public setOutput(output:string):void {
        if (this.codeEditor) {
            this.output = output;
        }
    }

    
    /**
     * @description
     *  beautify the editor content, rely on Ace Beautify extension.
     */
    public beautifyContent() {
        if (this.codeEditor && this.editorBeautify) {
            const session = this.codeEditor.getSession();
            this.editorBeautify.beautify(session);
        }
    }

    /**
     * @event OnContentChange - a proxy event to Ace 'change' event - adding additional data.
     * @param callback - recive the corrent content and 'change' event's original parameter.
     */
    public OnContentChange(callback: (content: string, delta: ace.Ace.Delta) => void): void {
        this.codeEditor.on('change', (delta) => {
            const content = this.codeEditor.getValue();
            callback(content, delta);
        });
    }

    changeTheme(value:string)
    {
    
      this.codeEditor.setTheme(baseTheme+value);
    }
}