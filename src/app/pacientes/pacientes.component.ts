import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPacientes } from '../models/pacientes';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  toppings = new FormControl();
  
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  newPaciente: FormGroup;

  constructor(private servicio: SharedService, private router: Router) { }
  
  ngOnInit(): void {
    this.newPaciente = new FormGroup({
      nomPac: new FormControl('',[Validators.required]),
      apPatPac: new FormControl('',[Validators.required]),
      apMatPac: new FormControl('',[Validators.required]),
      FecNacPac: new FormControl('',[Validators.required]),
      sexoPac: new FormControl('',[Validators.required]),
      curpPac: new FormControl('',[Validators.required]),
      telPac: new FormControl('', [Validators.required]),
      correoPac: new FormControl('',[Validators.required]),
      tSangrePac: new FormControl('',[Validators.required]),
      estCivPac: new FormControl('',[Validators.required]),
      ocupacionPac: new FormControl('',[Validators.required]),
      notasPac: new FormControl('',[Validators.required]),
      archPac: new FormControl('',[Validators.required]),
    });
  }
  addPaciente(){
    let paciente: IPacientes = Object.assign({}, this.newPaciente.value);
    console.table(paciente);
    
    this.servicio.createPaciente(paciente)
      .subscribe(paciente => this.onSaveSuccess(),
                  error => console.log(error))
  }
  onSaveSuccess(){
    this.router.navigate(['/medicos/pacientes'])
  }

}

