import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import {MenuPage} from '../plat/menu/menu.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  adminTab = false;
  employeTab = false;

  tabMenu :MenuPage;

  constructor(private storage: Storage) {
       this.storage.get('type').then((val) => {
           console.log(val)
           if(val ==0){
               this.adminTab = true;
           }else{
               this.employeTab = true;
           }
       })
  }

}
