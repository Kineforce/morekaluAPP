import { Component, Input, OnInit } from '@angular/core';
import { HubConnectionBuilder } from '@aspnet/signalr';
import { Msg } from '../Models/Msg';
import { MessageDataService } from '../Services/message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private MessageDataService: MessageDataService) { }

  @Input() curr_message = new Msg();
  public arr_messages = new Array<Msg>();
  public default_msg_color = "black";

  private connection = new HubConnectionBuilder()
  .withUrl('http://localhost:5000/chatHub')
  .build();

  public async start() {
    try {
        await this.connection.start();
        console.log("SignalR Connected.");

        // Call listener for incoming messages
        this.onMessage();

    } catch (err) {
        console.log(err);
    }
  };

  public async onMessage(){
    this.connection.on("ReceiveMessage", (user, message: Msg) => {
      this.arr_messages.push(message);
      this.arr_messages = this.arr_messages?.sort(this.compare);

    });
  }

  public populateChat(){
    this.MessageDataService.getMessages().subscribe(data => {
      if (data.length > 0){
        let check = 0;
        data.map((new_message)=>{          
          this.arr_messages?.map(curr_msg=>{
            if (curr_msg.id == new_message.id){
              check += 1;
            }
          })
          if (!check){
            this.arr_messages?.push(new_message);
          }
          check = 0;
        })

        this.arr_messages = this.arr_messages?.sort(this.compare);

      } 
    })

  }

  public compare(a: Msg, b: Msg) {
    if ( ( a.id || "" ) > ( b.id || "" )  ){
      return -1;
    }
    if ( ( a.id || "" ) < ( b.id || "" )  ){
      return 1;
    }
    return 0;
  }


  public sendMessage(_event: KeyboardEvent){
    if (_event.key == 'Enter'){
      if (this.curr_message.text_message && this.curr_message.sender){
        
        let push_msg = new Msg();

        push_msg.color = this.curr_message.color;
        push_msg.sender = this.curr_message.sender;
        push_msg.id = this.curr_message.id;
        push_msg.text_message = this.curr_message.text_message;


        this.connection.invoke("SendMessage", this.curr_message.sender, push_msg).catch(function (err) {
          return console.error(err.toString());
        });

        this.curr_message.text_message = "";

      }
    }
  }

  ngOnInit() {

    this.populateChat();
    this.start();

    let welcome_msg = new Msg();
    welcome_msg.color = "pink";
    welcome_msg.sender = "Sistema";
    welcome_msg.text_message = "Bem vindo(a)!"
    welcome_msg.id = -1;

    this.arr_messages.push(welcome_msg);

  }

}
