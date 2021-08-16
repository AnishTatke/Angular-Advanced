import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from '../interfaces/posts';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private _url: string = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getData(): Observable<Post[]>{
    return this.http.get<Post[]>(this._url)
  }

  errorHandler(error: HttpErrorResponse){
    throw throwError(error.message || "Service Error");
  }

}
