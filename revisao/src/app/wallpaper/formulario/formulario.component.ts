import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-fotoform',
  templateUrl: './fotoform.component.html',
  styleUrls: ['./fotoform.component.css']
})
export class FotoformComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    
    this.formulario = this.formBuilder.group({

      usuario: [''],
      senha: ['']
      
    });
  }


  
  
  //Método cadastrar()

  cadastrar(form: any){
    console.log(form.value);  
  }
}
