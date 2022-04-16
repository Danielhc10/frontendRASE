import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tratact } from 'src/app/models/antecedentes/tratact'
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-tratamiento',
  templateUrl: './tratamiento.component.html',
  styleUrls: ['./tratamiento.component.css']
})
export class TratamientoComponent implements OnInit {

  antTra:FormGroup;
  accion="AGREGAR";
  ID_PAC=0;
  constructor(private servicios:SharedService,
    private router:Router,
    private aRoute:ActivatedRoute) {
    this.antTra= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      TipoT: new FormControl(''),
      Med: new FormControl('')
    });
    this.ID_PAC=+this.aRoute.snapshot.paramMap.get('ID_PAC');

  }

  ngOnInit(): void {
  }

  addAntTratamiento(){
    let antTrat:Tratact=this.antTra.value;
    this.servicios.createTratAct(antTrat).subscribe(antTrat=>
      this.onSaveSucess(),
      error=>console.log(error))
  }
  onSaveSucess(){
    this.router.navigate(['/medicos/pacientes'])
  }

}
