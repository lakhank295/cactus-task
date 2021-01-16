import { apiUrl } from './../../config/api-url';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private basePath: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getAllPosts() {
    return this.http.get(this.basePath + apiUrl.allPosts);
  }
 
  public getCommentsById(id: number) {
    return this.http.get(this.basePath + apiUrl.allPosts + '/' +  id + apiUrl.comments);
  }
}
