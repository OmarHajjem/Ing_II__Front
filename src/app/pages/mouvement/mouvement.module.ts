// mouvement.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MouvementComponent } from './mouvement.component';
import { MouvementService } from '../../mouvement.service';
import { HttpClientModule } from '@angular/common/http';

export const routes = [
  { path: 'mouvements', component: MouvementComponent }  // Ajouter le chemin de votre choix
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    MouvementComponent
  ],
  providers: [
    MouvementService
  ],
  exports: [
    MouvementComponent
    // Ajoutez d'autres composants si nécessaire
  ]
})
export class MouvementModule { }
