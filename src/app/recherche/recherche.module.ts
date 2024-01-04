import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechercheRoutingModule } from './recherche-routing.module';
import { RechercheComponent } from './composants/recherche/recherche.component';


@NgModule({
  declarations: [RechercheComponent],
  imports: [
    CommonModule,
    RechercheRoutingModule
  ]
})
export class RechercheModule { }
