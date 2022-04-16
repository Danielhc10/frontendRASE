import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Antqui } from 'src/app/models/antecedentes/antqui';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-quirurgico',
  templateUrl: './quirurgico.component.html',
  styleUrls: ['./quirurgico.component.css']
})
export class QuirurgicoComponent implements OnInit {

  antqui:FormGroup;

  accion="AGREGAR"
  ID_PAC=0;

  constructor(private servicios:SharedService,
    private router:Router,
    private aRoute: ActivatedRoute) {
    this.antqui=new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      regQui: new FormControl('',[Validators.required]),
      edad: new FormControl(''),
      tipo: new FormControl('')
    });
    this.ID_PAC=+this.aRoute.snapshot.paramMap.get('ID_PAC')
  }
  ngOnInit(): void {
  }
  addAntQuirurgico(){
    let antQuirur:Antqui=this.antqui.value;
    this.servicios.createAntQui(antQuirur).subscribe(antQuirur=>
      this.onSaveSucess(),
      error=>console.log(error))
  }
  onSaveSucess(){
    this.router.navigate(['/medicos/pacientes'])
  }

}
