import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import {  RedditResponse } from '../Types/types';

@Injectable({
  providedIn: 'root',
})
export class RedditApiService {
  @Input() after: string='';
  
  
  constructor(private http: HttpClient) {
  }

  //  the method makes the initial request without the AFTER parameter
  //  and on the next requests it uses the AFTER property value from the previous request
  //  the initial query is "aww"
  // the query can be modified by the search bar in the reddit-list-container
  getPosts(query:string): Observable<RedditResponse> {
    let url = `https://www.reddit.com/r/${query}.json?after=${this.after}`;
    return this.http.get<RedditResponse>(url);
  }
}
