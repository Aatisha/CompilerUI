import { Injectable } from '@angular/core';
import { environment } from '../..//../environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient'

import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../../models/message';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  readonly token = environment.dialogflow.compilerBot;
  readonly client = new ApiAiClient({ accessToken: this.token });
  conversation = new BehaviorSubject<Message[]>([]);


  constructor() { }

  // Sends and receives messages via DialogFlow
  converse(msg: string) {
    const userMessage = new Message(msg, 'You');
    this.update(userMessage);
    
    return this.client.textRequest(msg)
    .then(res => {
      const speech = res.result.fulfillment.speech;
      
      const botMessage = new Message(speech, 'Bot');
      this.update(botMessage);
      
               });
  }

  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }
}
