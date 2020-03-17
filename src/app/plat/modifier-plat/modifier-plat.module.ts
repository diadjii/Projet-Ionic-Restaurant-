import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierPlatPageRoutingModule } from './modifier-plat-routing.module';

import { ModifierPlatPage } from './modifier-plat.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ModifierPlatPageRoutingModule
  ],
  declarations: [ModifierPlatPage]
})
export class ModifierPlatPageModule {}
