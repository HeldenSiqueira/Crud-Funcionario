package br.com.empresa.funcionarios.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.empresa.funcionarios.model.Funcionarios;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class FuncionariosController {


	@GetMapping("/funcionarios")
	public List<Funcionarios> getAllFuncionarios() {
		
	}