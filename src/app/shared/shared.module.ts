import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DividerModule } from 'primeng/divider';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    FormsModule,
    InputTextModule,
    InputMaskModule,
    DividerModule
  ],
  exports: [
    RouterModule,
    RatingModule,
    FormsModule,
    InputTextModule,
    InputMaskModule,
    DividerModule
  ]
})
export class SharedModule { }
