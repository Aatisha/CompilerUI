import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/dialogflow/chat.service';
import {Message} from '../../models/message';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/internal/operators';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chatToggle:boolean = false;
  chatFab:boolean = true;

  messages: Observable<Message[]>;
  formValue: string;

  constructor(public chat: ChatService) { }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
    .pipe(
      scan((acc, val) => acc.concat(val))
    )

  }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';
  }

  toggleWindow()
  {
    
    if(this.chatToggle===false)
    {
        document.getElementById("chat-content").style.display = "block";
        document.getElementById("chat-counter").style.display = "none";
        this.chatToggle = true;
    }
    else{
      document.getElementById("chat-content").style.display = "none";
      document.getElementById("chat-counter").style.display = "inline";
      this.chatToggle = false;
    }
  }
  
  fabToggle(){
    if(this.chatFab === true)
    {
      document.getElementById("live-chat-fab").style.display = "none";
      document.getElementById("live-chat").style.display = "block";
      this.chatFab = false;

    }
  }

  closeChat()
  {
    if(this.chatFab === false)
    {
      document.getElementById("live-chat-fab").style.display = "block";
      document.getElementById("live-chat").style.display = "none";
      this.chatFab = true;

    }
  }

}
