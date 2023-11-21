import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('selise-uits.learn:3000/api/v1/users');
  }

  getUserById(id: string){
    return this.http.get(`selise-uits.learn:3000/api/v1/user/${id}`);
  }
}
