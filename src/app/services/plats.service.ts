import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Plat } from '../models/plat';
import { Commande } from '../models/commande';
import { User } from '../models/user';
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

  getMenu():Observable<Plat[]>{
    return this.httpClient.get<Plat[]>(this.URL+'/plats?checked=true').pipe();
  }

  sendCommande(plat:Plat,user:User):Observable<Plat>{
    return this.httpClient.post<Plat>(this.URL+'/Commandes',{plat,user}).pipe();
  }

  getCommandes():Observable<Commande[]>{
    return this.httpClient.get<Commande[]>(this.URL+'/commandes').pipe();
  }

  updatePlat(id:number, plat:Plat): Observable<Plat>{
    return this.httpClient.put<Plat>(this.URL+'/plats/'+id,plat).pipe();
  }
}
