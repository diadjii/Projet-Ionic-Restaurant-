import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Plat } from 'src/app/models/plat';
import { IonicModule } from '@ionic/angular';

import { AjouterPlatPageRoutingModule } from './ajouter-plat-routing.module';

import { AjouterPlatPage } from './ajouter-plat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterPlatPageRoutingModule
  ],
  declarations: [AjouterPlatPage]
})
export class AjouterPlatPageModule {}
