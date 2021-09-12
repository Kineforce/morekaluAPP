import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Msg } from '../Models/Msg';

@Injectable({
  providedIn: 'root'
})
export class MessageDataService {

  constructor(private http: HttpClient) { }
  
  public getMessages(){
    return this.http.get<Array<Msg>>(`http://localhost:5000/api/chat/chat`)
  }

  public delReview(_id_message?: number){
    return this.http.delete<Boolean>("http://localhost:5000/api/chat/chat?_id=" + _id_message);
  }

  public updateReview(_updated_message: Msg){ 
    return this.http.put<Boolean>("http://localhost:5000/api/chat/chat", _updated_message);
  }


}

