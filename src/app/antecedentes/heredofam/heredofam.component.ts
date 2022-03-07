import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-heredofam',
  templateUrl: './heredofam.component.html',
  styleUrls: ['./heredofam.component.css']
})
export class HeredofamComponent implements OnInit {

  Dia:FormGroup;
  Car:FormGroup;
  Hip:FormGroup;
  EnfT:FormGroup
  Otros:FormGroup;

  ID_PAC=0;
  antecedentes:any[];

  constructor() {
    this.Dia=new FormGroup({
      idAnt:new FormControl('1002'),
      regpat: new FormControl('',[Validators.required]),
      anpat:new FormControl('',[Validators.maxLength(60)])
    });
    this.Car=new FormGroup({
      idAnt:new FormControl('1021') ,
      regpat: new FormControl('',[Validators.required]),
      anpat:new FormControl('',[Validators.maxLength(60)]) ,
    });
    this.Hip=new FormGroup({
      idAnt:new FormControl('1004') ,
      regpat: new FormControl('',[Validators.required]),
      anpat:new FormControl('',[Validators.maxLength(60)]) ,
    });
    this.EnfT=new FormGroup({
      idAnt:new FormControl('1003') ,
      regpat: new FormControl('',[Validators.required]),
      anpat:new FormControl('',[Validators.maxLength(60)]) ,
    });
    this.Otros=new FormGroup({
      idAnt:new FormControl('1014') ,
      regpat: new FormControl('',[Validators.required]),
      anpat:new FormControl('',[Validators.maxLength(60)]) ,
    });
    this.antecedentes=[
      {met:'Dia',nom:'Diabetes'},
      {met:'Car',nom:'Cardiopatías'},
      {met:'Hip',nom:'Hipertensión arterial'},
      {met:'EnfT',nom:'Enfermedades Tiroideas'},
      {met:'Otros',nom:'Otros'}
    ];
  }

  ngOnInit(): void {
  }

}
