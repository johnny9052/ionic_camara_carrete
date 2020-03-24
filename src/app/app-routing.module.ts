import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'camara-carrete', pathMatch: 'full' },
  {
    path: 'camara-carrete',
    loadChildren: () => import('./pages/camara-carrete/camara-carrete.module').then( m => m.CamaraCarretePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
