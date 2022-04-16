import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Antpat } from 'src/app/models/antecedentes/antpat';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-patologicos',
  templateUrl: './patologicos.component.html',
  styleUrls: ['./patologicos.component.css']
})
export class PatologicosComponent implements OnInit {
  antPat:FormGroup;

  Hos:FormGroup;
  Cir:FormGroup;
  Dia:FormGroup;
  Tir:FormGroup;
  Hip:FormGroup;
  Car:FormGroup;
  Trau:FormGroup;
  Can:FormGroup;
  Tub:FormGroup;
  Tran:FormGroup;
  Res:FormGroup;
  Gas:FormGroup;
  Ets:FormGroup;
  Vis:FormGroup;
  Otr:FormGroup;

  accion="AGREGAR";
  ID_PAC=0;
  
  constructor(private servicios:SharedService,
    private router:Router,
    private aRoute: ActivatedRoute) {
    this.antPat= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPat: new FormControl('',[Validators.required]),
      anPat: new FormControl('')
    });
    this.Hos= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPat: new FormControl('',[Validators.required]),
      anPat: new FormControl('')
    });
    this.Cir= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPat: new FormControl('',[Validators.required]),
      anPat: new FormControl('')
    });

    this.Dia= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPat: new FormControl('',[Validators.required]),
      anPat: new FormControl('')
    });
    this.Tir= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPat: new FormControl('',[Validators.required]),
      anPat: new FormControl('')
    });
    this.Hip= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPat: new FormControl('',[Validators.required]),
      anPat: new FormControl('')
    });
    this.Car= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPat: new FormControl('',[Validators.required]),
      anPat: new FormControl('')
    });
    this.Trau= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPat: new FormControl('',[Validators.required]),
      anPat: new FormControl('')
    });
    this.Can= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPat: new FormControl('',[Validators.required]),
      anPat: new FormControl('')
    });
    this.Tub= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPat: new FormControl('',[Validators.required]),
      anPat: new FormControl('')
    });
    this.Tran= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPat: new FormControl('',[Validators.required]),
      anPat: new FormControl('')
    });
    this.Res= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPat: new FormControl('',[Validators.required]),
      anPat: new FormControl('')
    });
    this.Gas= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPat: new FormControl('',[Validators.required]),
      anPat: new FormControl('')
    });
    this.Ets= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPat: new FormControl('',[Validators.required]),
      anPat: new FormControl('')
    });
    this.Vis= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPat: new FormControl('',[Validators.required]),
      anPat: new FormControl('')
    });
    this.Otr= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPat: new FormControl('',[Validators.required]),
      anPat: new FormControl('')
    });
    this.ID_PAC=+this.aRoute.snapshot.paramMap.get('ID_PAC');
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
