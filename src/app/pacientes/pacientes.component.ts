import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  
  newPaciente: FormGroup;

  constructor() { }
  
  ngOnInit(): void {
    this.newPaciente = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      apePaterno: new FormControl('',[Validators.required]),
      apeMaterno: new FormControl('',[Validators.required]),
      fechaNac: new FormControl('',[Validators.required]),
      sexo: new FormControl('',[Validators.required]),
      curp: new FormControl('',[Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      correo: new FormControl('',[Validators.required]),
      tipoSangre: new FormControl('',[Validators.required]),
      estadoCivil: new FormControl('',[Validators.required]),
      ocupacion: new FormControl('',[Validators.required]),
      notas: new FormControl('',[Validators.required]),
      archivo: new FormControl('',[Validators.required])
    })
  }

}
