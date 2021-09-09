import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Review } from '../Models/Review';
import { UpdateCard } from '../Models/UpdateCard';

@Component({
  selector: 'app-madeReviews .custom_style',
  templateUrl: './madeReviews.component.html',
  styleUrls: ['./madeReviews.component.css']
})
export class MadeReviewsComponent implements OnInit {

  @Input() _curr_review: Review;
  @Input() _temp_update_review: Review;

  public reviews? = Array<Review>();
  public genres = '';
  public trimmed_array = new Array<String>();
  public update_card = new UpdateCard();
  
  public sliceGenres(){
    if (!this.genres.includes(';')){
      return;
    }

    let genres_array = this.genres.split(";");

    genres_array.forEach(item => {
      if (item.length > 0){
        this.trimmed_array.push(item)
      }
    });

    this._curr_review.movie_genres = this.trimmed_array || [];    

    this.genres = '';
  }

  public postNewReview(){

    this.dataService.addReview(this._curr_review).subscribe(response=>{
      this.populateReviews();
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

        this.reviews = this.reviews?.sort(this.compare);

      } else {
        this.reviews = undefined;
      }
    })
  }

  public updateMode(_review?: Review, _mode?: boolean){
    this.update_card.which_card = _review?.id;
    this.update_card.can_update = _mode;

    this._temp_update_review.movie_name = _review?.movie_name;
    this._temp_update_review.review_text = _review?.review_text;
    this._temp_update_review.review_score = _review?.review_score;
  }

  public updateReview(_updated_review: Review){

    _updated_review.movie_name = this._temp_update_review.movie_name;
    _updated_review.review_text = this._temp_update_review.review_text;
    _updated_review.review_score = this._temp_update_review.review_score;

    this.dataService.updateReview(_updated_review).subscribe(response=>{
      if (response){
        this.reviews?.map((curr_review)=>{
          if (curr_review.id == _updated_review.id){
            curr_review = _updated_review;
          } 
        })

        this.updateMode(undefined, false);

      }
    })
  }

  public deleteReview(_review_id?: number){
    this.dataService.delReview(_review_id).subscribe(response=>{
      if (response){
        let updated_reviews = new Array<Review>();
        this.reviews?.map((curr_review)=>{
          if (curr_review.id != _review_id){
            updated_reviews.push(curr_review);
          }
        })

        this.reviews = updated_reviews;
      }
    });
    
  }
  
  public compare(a: Review, b: Review) {
    if ( ( a.id || "" ) > ( b.id || "" )  ){
      return -1;
    }
    if ( ( a.id || "" ) < ( b.id || "" )  ){
      return 1;
    }
    return 0;
  }

  
  constructor( private dataService: DataService ) { 
    this._curr_review = new Review();
    this._temp_update_review = new Review();

  }

  ngOnInit() {

    this.populateReviews();

  }

}
