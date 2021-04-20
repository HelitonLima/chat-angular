import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  public messages: any

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.chatService.getMessages().subscribe(data => {
      this.messages = data
    })
  }

}
