import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})


export class UsersService {
  private URL:string  = 'http://localhost:1337';

  constructor(private httpClient : HttpClient) { }

  login(login:string, password:string){
    // return this.httpClient.post(this.URL+"")
  }

  register(user:User):Observable<User>{
    return this.httpClient.post<User>(this.URL+'/users',user).pipe();
  }
}
