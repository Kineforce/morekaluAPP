import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { VideoPlayerComponent } from './videoPlayer/videoPlayer.component';
import { MadeReviewsComponent } from './madeReviews/madeReviews.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [								
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavComponent,
    VideoPlayerComponent,
    MadeReviewsComponent,
    ChatComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
