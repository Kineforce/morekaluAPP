import { Component, OnInit } from '@angular/core';
import { Msg } from '../Models/Msg';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  private webSocket = new WebSocket('wss://localhost:5001/ws');

  public curr_message = new Msg();
  public arr_messages = new Array<Msg>();

  public listerServer(){

    this.webSocket.onmessage = (event) => {
      let _received_msg = new Msg();
      _received_msg = JSON.parse(event.data);
      
      this.arr_messages.push(_received_msg);

    }

  }

  public closeConnection(){
    this.webSocket.close();
  }

  public sendMessage(_event: KeyboardEvent){
    if (_event.key == 'Enter'){
      if (this.curr_message.text_message && this.curr_message.sender){

        let to_send_message = new Msg();
        
        to_send_message.date_msg = this.curr_message.date_msg;
        to_send_message.text_message = this.curr_message.text_message;
        to_send_message.sender = this.curr_message.sender;

        this.webSocket.send(JSON.stringify(to_send_message));
        this.curr_message.text_message = "";

      }
    }
  }

  ngOnInit() {

    this.listerServer();

  }

}
