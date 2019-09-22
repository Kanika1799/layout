import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbThemeModule } from '@nebular/theme';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutHeaderComponent,NbLayoutFooterComponent,NbLayoutColumnComponent,NbLayoutModule,NbListModule,NbListComponent,NbListItemComponent,NbCardComponent,NbCardModule,NbCardHeaderComponent,NbMenuModule,NbButtonModule } from '@nebular/theme';
import { MenuShowcaseComponent } from './menu-showcase/menu-showcase.component';
import { CardAccentsComponent } from './card-accents/card-accents.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuShowcaseComponent,
    CardAccentsComponent
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbListModule,
    NbCardModule,
    NbMenuModule.forRoot(),
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.modul
  ],
  providers: [],
  bootstrap: [AppComponent]
})
@NgModule ({
  declarations:[
    NbListComponent,
    NbListItemComponent,
    NbLayoutHeaderComponent,
    NbLayoutFooterComponent,
    NbLayoutColumnComponent,
    NbCardComponent,
    NbCardHeaderComponent,
    NbButtonModule,
  ],
  imports: [
   NbEvaIconsModule,
  ]
})
export class AppModule { }

