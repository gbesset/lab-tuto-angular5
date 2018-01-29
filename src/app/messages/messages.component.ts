import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //messageService doit être public car on va le binder au template
  constructor(public _messageService: MessageService) { }

  ngOnInit() {
  }

}
