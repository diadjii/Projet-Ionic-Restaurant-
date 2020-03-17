import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Plat } from '../models/plat';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PlatsService {
  private URL:string  = 'http://localhost:1337';

  constructor(private httpClient : HttpClient) { }

  postPlat(plat:Plat):Observable<Plat>{
    return this.httpClient.post<Plat>(this.URL+'/plats',plat).pipe();
  }

  getPlats():Observable<Plat[]>{
    return this.httpClient.get<Plat[]>(this.URL+'/plats').pipe();
  }

  getPlat(id:number):Observable<Plat>{
    return this.httpClient.get<Plat>(this.URL+'/plats/'+id).pipe();
  }

  deletePlat(id:number){
    return this.httpClient.delete(this.URL+'/plats/'+id).pipe();
  }

  updatePlat(id:number, plat:Plat): Observable<Plat>{
    return this.httpClient.put<Plat>(this.URL+'/plats/'+id,plat).pipe();
  }
}
