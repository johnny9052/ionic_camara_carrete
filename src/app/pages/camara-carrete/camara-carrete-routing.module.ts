import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamaraCarretePage } from './camara-carrete.page';

const routes: Routes = [
  {
    path: '',
    component: CamaraCarretePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamaraCarretePageRoutingModule {}
