import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MyTaskDirective } from './my-task.directive';
import { FormatCurrencyPipe } from './format-currency.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskService } from "app/task.service";
import { CepComponent } from './cep/cep.component';
import { CepService } from "app/cep/cep.service";
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    MyTaskDirective,
    FormatCurrencyPipe,
    FormatDatePipe,
    TaskNewComponent,
    CepComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TaskService,
    CepService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
