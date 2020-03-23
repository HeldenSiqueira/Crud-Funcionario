import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from '../funcionario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators} from '@angular/forms';


@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  funcionario: Funcionario = new Funcionario();
  submitted = false;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private funcionarioService: FuncionarioService,
    private router: Router) { }




  ngOnInit() {
    this.form = this.formBuilder.group({
    nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
    sobrenome: [null, [Validators.required]],
    
    email: [null, [Validators.required, Validators.email]]
    
    })
  }
  

  newFuncionario(): void {
    this.submitted = false;
    this.funcionario = new Funcionario();

  }

  save() {
    this.funcionarioService.createFuncionario(this.funcionario)
      .subscribe(data => console.log(data), error => console.log(error));
    this.funcionario = new Funcionario();

    this.gotoList();
  }

 

  onSubmit() {
    if (this.form.valid) {
      this.save();
    } else {
      console.log('form invalido');
      this.verificaValidacoesForm(this.form);
    }
  }
    
  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      controle.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm(controle);
      }
    });
  }
  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }
  verificaEmailInvalido() {
    const campoEmail = this.form.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }
  
  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }
  resetar() {
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/funcionarios']);
  }
  
}