import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamePipe } from './name.pipe';
import { DisplayPipe } from './display.pipe';
import { ItemService } from './item.service';
import { ColorDirective } from './color.directive';
import { NotDirective } from './not.directive';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    NamePipe,
    DisplayPipe,
    ColorDirective,
    NotDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
