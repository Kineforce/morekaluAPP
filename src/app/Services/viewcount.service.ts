import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewCount } from '../Models/ViewCount';

@Injectable({
  providedIn: 'root'
})
export class ViewCountService {

  constructor(private http: HttpClient) { }
  
  public getViewCount(){
    return this.http.get<ViewCount>(`https://localhost:5001/api/pageview/pageview`)
  }

}

