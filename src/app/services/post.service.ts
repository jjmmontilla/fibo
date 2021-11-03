import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http: HttpClient) { }

  public getPosts() {
    let p = new Promise( (resolve, reject) => {
      this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res) => {
        console.log(res);
        resolve(res);
      });
    });

    return p;
  }

  public createPost(parameters: any) {
    let p = new Promise( (resolve, reject) => {
      this.http.post('https://jsonplaceholder.typicode.com/posts', parameters).subscribe((res) => {
        resolve(res);
      });
    });

    return p;
  }

  public getComments(postId: number) {

    let p = new Promise( (resolve, reject) => {
      this.http.get('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments').subscribe((res) => {
        resolve(res);
      });
    });

    return p;
  }

}
