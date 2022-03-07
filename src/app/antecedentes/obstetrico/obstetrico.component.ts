import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-obstetrico',
  templateUrl: './obstetrico.component.html',
  styleUrls: ['./obstetrico.component.css']
})
export class ObstetricoComponent implements OnInit {

  pperiodo:FormGroup;
  uperiodo:FormGroup;
  numemba:FormGroup;
  numembaries:FormGroup;
  numhijo:FormGroup;
  anti:FormGroup;
  meno:FormGroup

  ID_PAC=0;
  antecedentes:any[];

  constructor() {
    
    this.antecedentes=[
      {met:'pperiodo',nom:'Edad del primer periodo'},
      {met:'uperiodo',nom:'Último periodo'},
      {met:'numemba',nom:'Número de embarazos'},
      {met:'numembaries',nom:'Número de embarazos de riesgo'},
      {met:'numhijo',nom:'Número de hijos'},
      {met:'anti',nom:'Uso de anticonceptivos'},
      {met:'meno',nom:'Edad de menopausia'}
    ];
  }

  ngOnInit(): void {
  }

}
