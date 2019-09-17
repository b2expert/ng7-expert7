import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout.component';
import { HttpTokenInterceptor } from './interceptors/http-token-iterceptor.service';
import { AppSessionService } from './services/session.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { UtilityService } from './services/utility.service';
import { InfoComponent } from './controls/info/info.component';
import { AppMatModule } from './app-mat.module';

@NgModule({
  declarations: [
    LayoutComponent,
    InfoComponent
  ],
  entryComponents: [InfoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMatModule
  ],
  providers: [
    AppSessionService,
    UtilityService,
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    },
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpTokenInterceptor, 
      multi: true 
    }
  ],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
