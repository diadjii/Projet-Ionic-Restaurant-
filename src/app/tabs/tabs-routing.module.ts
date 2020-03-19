import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'plat',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../plat/tab1.module').then(m => m.Tab1PageModule)
          },  {
              path: 'ajouter',
              loadChildren: () => import('../plat/ajouter-plat/ajouter-plat.module').then( m => m.AjouterPlatPageModule)
            },
            {
              path: 'modifier/:id',
              loadChildren: () => import('../plat/modifier-plat/modifier-plat.module').then( m => m.ModifierPlatPageModule)
            },
            {
              path: 'menu',
              loadChildren: () => import('../plat/menu/menu.module').then( m => m.MenuPageModule)
            }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'profile',
        loadChildren: () => import('../user/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/plat',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/plat',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
