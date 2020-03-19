import {PlatsService} from '../services/plats.service';
import { Plat } from '../models/plat';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {
  plats = [];

  constructor(private route: Router , private api: PlatsService, private storage: Storage) {
  }

  ngOnInit() {
    this.storage.get('token').then((val) => {
      if(val==null){
        this.route.navigate(['login'])
      }
    })
  }

  ionViewWillEnter(){
    this.getPlats();
  }

  getPlats():void{
    this.api.getPlats().subscribe(response => {
      console.table(response)
      this.plats = response;
    });
  }


  modifierPlat(id:any):void{
    this.route.navigate(['tabs/plat/modifier', id]);
  }

  deletePlat(plat: Plat): void {
    console.log(plat)
      this.api.deletePlat(plat.id).subscribe(plat => {
        console.log("ok")
      })
  }
}
