import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterPageComponent } from '../reactive/register-page/register-page.component';
import { DynamicPageComponent } from '../reactive/dynamic-page/dynamic-page.component';
import { SwitchesPageComponent } from '../reactive/switches-page/switches-page.component';


@NgModule({
  declarations: [
    BasicPageComponent,
    RegisterPageComponent,
    DynamicPageComponent,
    SwitchesPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveModule { }
