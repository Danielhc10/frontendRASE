import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-psiquiatrico',
  templateUrl: './psiquiatrico.component.html',
  styleUrls: ['./psiquiatrico.component.css']
})
export class PsiquiatricoComponent implements OnInit {

  His:FormGroup;
  Con:FormGroup;
  Tra:FormGroup;
  Med:FormGroup;

  ID_PAC=0;
  antecedentes:any[];

  constructor() {
    this.His=new FormGroup({
      idAnt:new FormControl('1022'),
      regpat:new FormControl('',[Validators.required]),
      anpat:new FormControl('',[Validators.maxLength(60)])
    });
    this.Con=new FormGroup({
      idAnt:new FormControl('1023'),
      regpat:new FormControl('',[Validators.required]),
      anpat:new FormControl('',[Validators.maxLength(60)])
    });
    this.Tra=new FormGroup({
      idAnt:new FormControl('1024'),
      regpat:new FormControl('',[Validators.required]),
      anpat:new FormControl('',[Validators.maxLength(60)])
    });
    this.Med=new FormGroup({
      idAnt:new FormControl('1025'),
      regpat:new FormControl('',[Validators.required]),
      anpat:new FormControl('',[Validators.maxLength(60)])
    });
    this.antecedentes=[
      {met:'His',nom:'Historial en su familia'},
      {met:'Con',nom:'Conciencia de enfermedad'},
      {met:'Tra',nom:'Tratamiento'},
      {met:'Med',nom:'Medicamentos'}
    ]
  }

  ngOnInit(): void {
  }

}
