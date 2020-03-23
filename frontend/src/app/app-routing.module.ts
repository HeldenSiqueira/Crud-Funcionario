import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioListComponent } from './funcionarios/funcionario-list/funcionario-list.component';



const routes: Routes = [
  { path: '', redirectTo: 'funcionario', pathMatch: 'full' },
  { path: 'funcionarios', component: FuncionarioListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


