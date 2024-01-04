import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTestComponent } from './menu-test.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: MenuTestComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule, 
   
    
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    MenuTestComponent
  ]
})
export class MenuTestModule { }
