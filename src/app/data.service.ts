import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from './Models/Review';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  public getReviews(){
    return this.http.get<Array<Review>>(`https://localhost:5001/api/movies/reviews`)
  }

  public addReview(_review: Review){
    return this.http.post<Boolean>("https://localhost:5001/api/movies/reviews", _review);
  }

}
