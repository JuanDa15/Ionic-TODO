import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTypePipe } from './list-type.pipe';



@NgModule({
  declarations: [ListTypePipe],
  exports: [ListTypePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
