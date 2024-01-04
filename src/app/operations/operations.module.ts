import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { AlimentationComponent } from './composants/alimentation/alimentation.component';
import { ExtraitComponent } from './composants/extrait/extrait.component';
import { AffichageComponent } from './composants/affichage/affichage.component';


@NgModule({
  declarations: [AlimentationComponent, ExtraitComponent, AffichageComponent],
  imports: [
    CommonModule,
    OperationsRoutingModule
  ]
})
export class OperationsModule { }
