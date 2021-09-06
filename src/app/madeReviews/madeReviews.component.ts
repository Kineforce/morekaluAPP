import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Review } from '../Models/Review';

@Component({
  selector: 'app-madeReviews .custom_style',
  templateUrl: './madeReviews.component.html',
  styleUrls: ['./madeReviews.component.css']
})
export class MadeReviewsComponent implements OnInit {

  @Input() _curr_review: Review;

  public reviews? = Array<Review>();
  public genres = '';

  public sliceGenres(){
    let genres_array = this.genres.split(";");
    let trimmed_array = new Array<String>();

    genres_array.forEach(item => {
      if (item.length > 0){
        trimmed_array.push(item)
      }
    });

    this._curr_review.movie_genres = trimmed_array || [];

    console.log(this._curr_review);
    
  }

  public postNewReview(){

    this.dataService.addReview(this._curr_review).subscribe(response=>{
      if (response){
        this.populateReviews();
      }
    })

  }

  public populateReviews(){
    this.dataService.getReviews().subscribe(data => {
      if (data.length > 0){
        let check = 0;
        data.map((new_review)=>{          
          this.reviews?.map(curr_review=>{
            if (curr_review.id == new_review.id){
              check += 1;
            }
          })
          if (!check){
            this.reviews?.push(new_review);
          }
          check = 0;
        })
      } else {
        this.reviews = undefined;
      }
    })
  }
  
  constructor( private dataService: DataService ) { 
    this._curr_review = new Review();
  }

  ngOnInit() {

    this.populateReviews();

  }

}
