import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { UsersComponent } from './users/users.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { FeedComponent } from './feed/feed.component';
import { MessagesComponent } from './messages/messages.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsersComponent, ChatPageComponent, FeedComponent, MessagesComponent, InputComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule
  ]
})
export class ChatModule { }
