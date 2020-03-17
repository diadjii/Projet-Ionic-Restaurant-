import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterPlatPage } from './ajouter-plat.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterPlatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterPlatPageRoutingModule {}
