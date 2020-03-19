import { Component } from '@angular/core';
import {PlatsService} from '../services/plats.service';
import { Plat } from '../models/plat';
import { Commande } from '../models/commande';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  commandes = [];

  constructor(private api: PlatsService) {}



   ionViewWillEnter(){
    this.getcommandes();
  }


  getcommandes():void{
      this.api.getCommandes().subscribe(response => {
          console.log(response)
          this.commandes = response;
      },error => {
          console.log(error)
      })
  }
}
