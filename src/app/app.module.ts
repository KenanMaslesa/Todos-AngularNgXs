import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { TodoModule } from './todo/todo.module';
import { AppComponent } from './app.component';
import { TodoState } from './todo/+state/todo.state';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TodoModule,
    NgxsModule.forRoot([]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
