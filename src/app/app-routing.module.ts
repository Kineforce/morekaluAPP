import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MadeReviewsComponent } from './madeReviews/madeReviews.component';
import { MainComponent } from './main/main.component';
import { VideoPlayerComponent } from './videoPlayer/videoPlayer.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'homePage', component: MainComponent },
  { path: 'videoPlayer', component: VideoPlayerComponent },
  { path: 'madeReviews', component: MadeReviewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
