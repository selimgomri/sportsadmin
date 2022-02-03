import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BaseComponent],
  imports: [CommonModule, RouterModule, FlexLayoutModule, SharedModule],
})
export class BaseModule {}
