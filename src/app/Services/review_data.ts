import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../Models/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewDataService {

  constructor(private http: HttpClient) { }
  
  public getReviews(){
    return this.http.get<Array<Review>>(`http://localhost:5000/api/movies/reviews`)
  }

  public addReview(_review: Review){
    return this.http.post<Boolean>("http://localhost:5000/api/movies/reviews", _review);
  }

  public delReview(_id_review?: number){
    return this.http.delete<Boolean>("http://localhost:5000/api/movies/reviews?_id=" + _id_review);
  }

  public updateReview(_updated_review: Review){ 
    return this.http.put<Boolean>("http://localhost:5000/api/movies/reviews", _updated_review);
  }

  public getReviewCount(){
    return this.http.get<number>("http://localhost:5000/api/movies/reviews/total");
  }

}

