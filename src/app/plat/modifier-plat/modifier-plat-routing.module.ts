import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierPlatPage } from './modifier-plat.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierPlatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierPlatPageRoutingModule {}
