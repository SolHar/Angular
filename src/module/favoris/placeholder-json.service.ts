import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


  export interface Posts extends PostsData {
      id: number;

  }

  export interface PostsData {
    userId: number;
    title: string;
    body: string;
  }




@Injectable({
  providedIn: 'root'
})
export class PlaceholderJsonService {

  private endpoint = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient : HttpClient) { }

  // pour ecouter les flux d'état
  //requete http et stock la valeur dans un tableau, ici List()
  getList(userId? : number) : Observable<any> {
    let params = new HttpParams();
    if(userId){
      params = params.set('userId', userId + '');
    }
    return this.httpClient.get<Posts>(`${this.endpoint}/posts`, {params});
  }

  getPostsById(id : number) : Observable<Posts> {
    return this.httpClient.get<Posts>(`${this.endpoint}/posts/${id}`);
  }

  getPostsByUser(userId : string) : Observable<any>{
    return this.httpClient.get<Posts>(`${this.endpoint}/posts?/${userId = '1'}`);
  }

  createPost(data : PostsData) : Observable<Posts>{
    return this.httpClient.post<Posts>(`${this.endpoint}/posts`, data);
  }

  putPost(id : number, data : PostsData) : Observable<Posts>{
    return this.httpClient.put<Posts>(`${this.endpoint}/posts/${id}`, data)
  }
// le Partial prends le PostsData et met tout en facultatif
  patchPost(id : number, data : Partial<PostsData>) : Observable<Posts>{
    return this.httpClient.patch<Posts>(`${this.endpoint}/posts/${id}`, data);
  }

}
