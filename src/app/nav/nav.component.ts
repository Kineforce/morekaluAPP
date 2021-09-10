import { Component, OnInit } from '@angular/core';
import { ViewCount } from '../Models/ViewCount';
import { ViewCountService } from '../Services/viewcount.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  public curr_count_reviews = new ViewCount();

  public getViewCount(){
    this.requestCountView.getViewCount().subscribe(data => {
      this.curr_count_reviews = data;
    })
  }

  constructor( private requestCountView: ViewCountService ) {
  }

  ngOnInit() {

    this.getViewCount();

  }

}
