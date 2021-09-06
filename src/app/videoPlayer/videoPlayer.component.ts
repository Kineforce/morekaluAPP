import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videoPlayer .custom_style',
  templateUrl: './videoPlayer.component.html',
  styleUrls: ['./videoPlayer.component.css']
})
export class VideoPlayerComponent implements OnInit {

  public movie_name = "A espera de um milagre";
  public path_to_movie = "https://mdbootstrap.com/img/video/Sail-Away.mp4";
  
  constructor() { }

  ngOnInit() {
  }

}
