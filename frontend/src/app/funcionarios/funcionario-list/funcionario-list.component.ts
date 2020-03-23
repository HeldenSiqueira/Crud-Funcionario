import { Observable } from "rxjs";
import { FuncionarioService } from "../funcionario.service";
import { Funcionario } from "../funcionario";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {
  funcionarios: Observable<Funcionario[]>;
  
  constructor(private funcionarioService: FuncionarioService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.funcionarios = this.funcionarioService.getFuncionarioList();
  }
}