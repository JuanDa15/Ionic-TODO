import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists/lists.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    ListsComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    ListsComponent
  ]
})
export class ComponentsModule { }
