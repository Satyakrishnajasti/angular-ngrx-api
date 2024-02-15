import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Albums, Comments } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class ApiiService {
  constructor(private readonly http: HttpClient) {}

  public getAlbums(): Observable<Albums[]> {
    return this.http.get<Albums[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }

  public getComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }
}
