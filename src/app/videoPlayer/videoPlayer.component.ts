import { Component, OnInit } from '@angular/core';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-videoPlayer .custom_style',
  templateUrl: './videoPlayer.component.html',
  styleUrls: ['./videoPlayer.component.css']
})
export class VideoPlayerComponent implements OnInit {

  public movie_name = "";
  public path_to_movie = "";
  
  constructor() { }

  ngOnInit() {
  }

}
