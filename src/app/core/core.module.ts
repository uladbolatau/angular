import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
  ],
  exports: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
