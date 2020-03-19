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

  login(email):Observable<User>{
    return this.httpClient.get<User>(this.URL+"/Users?email="+email).pipe();
  }

  register(user:User):Observable<User>{
    user.role = 1;
    return this.httpClient.post<User>(this.URL+'/Users',user).pipe();
  }

  edit(user:User):Observable<User>{
     return this.httpClient.put<User>(this.URL+'/users/'+user.id,user).pipe();
  }
}
