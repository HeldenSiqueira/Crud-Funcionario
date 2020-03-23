package br.com.empresa.funcionarios.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.empresa.funcionarios.exception.ResourceNotFoundException;
import br.com.empresa.funcionarios.model.Funcionarios;
import br.com.empresa.funcionarios.repository.FuncionariosRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class FuncionariosController {
	@Autowired
	private FuncionariosRepository funcionarioRepository;

	@GetMapping("/funcionarios")
	public List<Funcionarios> getAllFuncionarios() {
		return funcionarioRepository.findAll();
	}

	@GetMapping("/funcionarios/{id}")
	public ResponseEntity<Funcionarios> getFuncionarioById(@PathVariable(value = "id") Long funcionarioId)
			throws ResourceNotFoundException {
		Funcionarios funcionario = funcionarioRepository.findById(funcionarioId)
				.orElseThrow(() -> new ResourceNotFoundException("Funcionario not found for this id :: " + funcionarioId));
		return ResponseEntity.ok().body(funcionario);
	}

	@PostMapping("/funcionarios")
	public Funcionarios createFuncionario(@Valid @RequestBody Funcionarios funcionario) {
		return funcionarioRepository.save(funcionario);
	}

	@PutMapping("/funcionarios/{id}")
	public ResponseEntity<Funcionarios> updateFuncionario(@PathVariable(value = "id") Long funcionarioId,
			@Valid @RequestBody Funcionarios funcionarioDetails) throws ResourceNotFoundException {
		Funcionarios funcionario = funcionarioRepository.findById(funcionarioId)
				.orElseThrow(() -> new ResourceNotFoundException("Funcionario not found for this id :: " + funcionarioId));

		funcionario.setEmail(funcionarioDetails.getEmail());
		funcionario.setSobrenome(funcionarioDetails.getSobrenome());
		funcionario.setNome(funcionarioDetails.getNome());
		final Funcionarios updatedFuncionario = funcionarioRepository.save(funcionario);
		return ResponseEntity.ok(updatedFuncionario);
	}

	@DeleteMapping("/funcionarios/{id}")
	public Map<String, Boolean> deleteFuncionario(@PathVariable(value = "id") Long funcionarioId)
			throws ResourceNotFoundException {
		Funcionarios funcionario = funcionarioRepository.findById(funcionarioId)
				.orElseThrow(() -> new ResourceNotFoundException("Funcionario not found for this id :: " + funcionarioId));

		funcionarioRepository.delete(funcionario);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}

