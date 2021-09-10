import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../Models/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewDataService {

  constructor(private http: HttpClient) { }
  
  public getReviews(){
    return this.http.get<Array<Review>>(`https://localhost:5001/api/movies/reviews`)
  }

  public addReview(_review: Review){
    return this.http.post<Boolean>("https://localhost:5001/api/movies/reviews", _review);
  }

  public delReview(_id_review?: number){
    return this.http.delete<Boolean>("https://localhost:5001/api/movies/reviews?_id=" + _id_review);
  }

  public updateReview(_updated_review: Review){ 
    return this.http.put<Boolean>("https://localhost:5001/api/movies/reviews", _updated_review);
  }

  public getReviewCount(){
    return this.http.get<number>("https://localhost:5001/api/movies/reviews/total");
  }

}

