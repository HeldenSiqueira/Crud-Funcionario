
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioListComponent } from './funcionarios/funcionario-list/funcionario-list.component';
import { FuncionarioDetailsComponent } from './funcionarios/funcionario-details/funcionario-details.component';
import { FuncionarioUpdateComponent } from './funcionarios/funcionario-update/funcionario-update.component';
import { FuncionarioFormComponent } from './funcionarios/funcionario-form/funcionario-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'funcionario', pathMatch: 'full' },
  { path: 'funcionarios', component: FuncionarioListComponent },
  { path: 'add', component: FuncionarioFormComponent },
  { path: 'update/:id', component: FuncionarioUpdateComponent },
  { path: 'details/:id', component: FuncionarioDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }