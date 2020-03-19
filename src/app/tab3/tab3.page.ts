import { Component } from '@angular/core';
import {PlatsService} from '../services/plats.service';
import { Plat } from '../models/plat';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    plats = [];
    constructor( private api: PlatsService,) {}

    ionViewWillEnter(){
        this.getPlats();
    }

  getPlats():void{
    this.api.getPlats().subscribe(response => {
      console.table(response)
      this.plats = response;
    });
  }

  changeStatus(plat:Plat):void {
    plat.checked = !plat.checked;
    this.api.updatePlat(plat.id,plat).subscribe(plat=> {
        console.log(plat)
    })
  }
}
