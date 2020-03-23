package br.com.empresa.funcionarios.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "funcionarios")
public class Funcionarios {
	
		private long id;
		private String nome;
		private String sobrenome;
		private String email;
		
		public Funcionarios() {
			
		}
		
		public Funcionarios(String nome, String sobrenome, String email) {
			this.nome = nome;
			this.sobrenome = sobrenome;
			this.email = email;
		}
		
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		
		@Column(name = "nome", nullable = false)
		public String getNome() {
			return nome;
		}
		public void setNome(String nome) {
			this.nome = nome;
		}
		
		@Column(name = "sobrenome", nullable = false)
		public String getSobrenome() {
			return sobrenome;
		}
		public void setSobrenome(String sobrenome) {
			this.sobrenome = sobrenome;
		}
		
		@Column(name = "email", nullable = false)
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}

		@Override
		public String toString() {
			return "Funcionario [id=" + id + ", nome=" + nome + ", sobrenome=" + sobrenome + ", email=" + email
					+ "]";
		}
		
	}
