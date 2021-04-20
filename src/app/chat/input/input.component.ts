import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  public message = ''

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
  }

  sendMessage() {
    if(this.message) {
      this.chatService.sendMessage(this.message)
      this.message = ''
    }
  }

}
