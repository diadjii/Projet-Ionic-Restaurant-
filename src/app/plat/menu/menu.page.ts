import { Component, OnInit } from '@angular/core';
import {PlatsService} from '../../services/plats.service';
import { Plat } from '../../models/plat';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  plats = []  ;
  selectedPlat = null;

  constructor(private api: PlatsService,private storage: Storage,) { }

  ngOnInit() {
  }

   ionViewWillEnter(){
    this.getMenu();
  }

  selectItem(plat):void{
      this.selectedPlat = plat;
      console.log(plat)
  }

  sendCommande():void{
      if(this.selectedPlat == null){
          alert("Veillez choisir un plat dans le menu proposé SVP")
      }else{
          this.storage.get('user').then(val => {

              this.api.sendCommande(this.selectedPlat,val).subscribe(response => {
                  console.log(response);
              })
              console.log(this.selectedPlat)
          })
          // console.log(this.selectedPlat)
      }
  }
  getMenu():void{
    this.api.getMenu().subscribe(response => {
      console.table(response)
      this.plats = response;
    });
  }
}
