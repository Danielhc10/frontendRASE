import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-no-patologicos',
  templateUrl: './no-patologicos.component.html',
  styleUrls: ['./no-patologicos.component.css']
})
export class NoPatologicosComponent implements OnInit {

  AFis:FormGroup;
  Tab: FormGroup;
  Alc:FormGroup;
  Caf:FormGroup;
  Drog:FormGroup;
  Vac:FormGroup;
  Otros:FormGroup;

  ID_PAC=0;
  antecedentes:any[];

  constructor() {
    this.AFis=new FormGroup({
      idAnt:new FormControl('1015'),
      regpat: new FormControl('',[Validators.required]),
      anpat:new FormControl('',[Validators.maxLength(60)]) ,
    });
    this.Tab=new FormGroup({
      idAnt:new FormControl('1016') ,
      regpat: new FormControl('',[Validators.required]),
      anpat:new FormControl('',[Validators.maxLength(60)]) ,
    });
    this.Alc=new FormGroup({
      idAnt:new FormControl('1017') ,
      regpat: new FormControl('',[Validators.required]),
      anpat:new FormControl('',[Validators.maxLength(60)]) ,
    });
    this.Caf=new FormGroup({
      idAnt:new FormControl('1018') ,
      regpat: new FormControl('',[Validators.required]),
      anpat:new FormControl('',[Validators.maxLength(60)]) ,
    });
    this.Drog=new FormGroup({
      idAnt:new FormControl('1019') ,
      regpat: new FormControl('',[Validators.required]),
      anpat:new FormControl('',[Validators.maxLength(60)]) ,
    });
    this.Vac=new FormGroup({
      idAnt:new FormControl('1020') ,
      regpat: new FormControl('',[Validators.required]),
      anpat:new FormControl('',[Validators.maxLength(60)]) ,
    });
    this.Otros=new FormGroup({
      idAnt:new FormControl('1014') ,
      regpat: new FormControl('',[Validators.required]),
      anpat:new FormControl('',[Validators.maxLength(60)]) ,
    });
    this.antecedentes=[
      {met:'AFis',nom:'Actividad física'},
      {met:'Tab',nom:'Tabaquismo'},
      {met:'Alc',nom:'Alcoholismo'},
      {met:'Caf',nom:'Cafeína'},
      {met:'Drog',nom:'Uso de otras sustancias (drogas)'},
      {met:'Vac',nom:'Vacuna o Inmunización reciente'},
      {met:'Otros',nom:'Otros'}

    ];
  }

  ngOnInit(): void {
  }

}
