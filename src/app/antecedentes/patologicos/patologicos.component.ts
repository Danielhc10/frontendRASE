import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Antpat } from 'src/app/models/antecedentes/antpat';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-patologicos',
  templateUrl: './patologicos.component.html',
  styleUrls: ['./patologicos.component.css']
})
export class PatologicosComponent implements OnInit {

  Hosp:FormGroup;
  Cirugias:FormGroup;
  Diabetes:FormGroup;
  Tiroideas:FormGroup;
  Hipertension:FormGroup;
  Cardio:FormGroup;
  Trauma:FormGroup;
  Cancer:FormGroup;
  Tuber:FormGroup;
  Trans:FormGroup;
  PResp:FormGroup;
  PGastro:FormGroup;
  ETS:FormGroup;
  Vista:FormGroup;
  Otros:FormGroup;
  ID_PAC=0;
  antecedentes:any[];

  antPat:FormGroup;

  constructor(private servicios:SharedService,
    private router:Router) {
    this.antPat=new FormGroup({
      idPac: new FormControl(''),
      idAnt: new FormControl(''),
      regPat: new FormControl(''),
      anPat: new FormControl('')
    })

  }

  ngOnInit(): void {
  }
  addAntecedente(){
    let antecedente:Antpat=this.antPat.value;
    this.servicios.createAntPat(antecedente).subscribe(antecedente=>
      this.onSaveSuccess(),
      error=>console.log(error)
    )
  }
  onSaveSuccess(){
    this.router.navigate(['/medicos/pacientes'])
  }

}
