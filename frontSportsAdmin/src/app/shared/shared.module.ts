import { RouterModule } from '@angular/router';
import { PageMyclubsComponent } from './page-myclubs/page-myclubs.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HeaderBarComponent, SideBarComponent, PageMyclubsComponent],
  imports: [CommonModule, RouterModule, FlexLayoutModule],
  exports: [HeaderBarComponent, SideBarComponent, PageMyclubsComponent],
})
export class SharedModule {}
