import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chatToggle:boolean = false;
  chatFab:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggleWindow()
  {
    console.log("hi")
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
