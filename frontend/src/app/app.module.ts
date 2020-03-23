import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FuncionarioListComponent } from './funcionarios/funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './funcionarios/funcionario-form/funcionario-form.component';
import { FuncionarioUpdateComponent } from './funcionarios/funcionario-update/funcionario-update.component';
import { FuncionarioDetailsComponent } from './funcionarios/funcionario-details/funcionario-details/funcionario-details.component';
import { CampoErrorComponent } from './shared/campo-error/campo-error.component';
import { ErrorMsgComponent } from './shared/error-msg/error-msg.component';



@NgModule({
  declarations: [
    AppComponent,

    FuncionarioListComponent,

  

    FuncionarioFormComponent,

  

    FuncionarioUpdateComponent,

  

    FuncionarioDetailsComponent,

  

    CampoErrorComponent,

  

    ErrorMsgComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
