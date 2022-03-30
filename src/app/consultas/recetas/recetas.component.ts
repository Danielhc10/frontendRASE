import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  newTratamiento:FormGroup;
  listMedicina: any=[];
  listPaciente: any=[];

  constructor(private servicio: SharedService, private router: Router) {
    this.newTratamiento = new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idCon: new FormControl('',[Validators.required]),
      idMed: new FormControl('',[Validators.required]),
      indicaciones: new FormControl('',[Validators.required]),
      frecuencia: new FormControl('',[Validators.required]),
      duracion: new FormControl('',[Validators.required]),
      notas: new FormControl('',[Validators.required]),
    }) 
   }

  
  ngOnInit(): void {
    this.servicio.getMedicamentos().subscribe(data=>{
      this.listMedicina=data;
    }),
    this.servicio.getPacientesList().subscribe(pac=>{
      this.listPaciente=pac;
    })
    
  }
}
