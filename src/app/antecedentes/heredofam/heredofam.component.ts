import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

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

  accion="AGREGAR"
  ID_PAC=0;

  constructor(private servicio: SharedService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.Dia=new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regHer: new FormControl('',[Validators.required]),
      anot:new FormControl('')
    });
    this.Car=new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regHer: new FormControl('',[Validators.required]),
      anot:new FormControl('') ,
    });
    this.Hip=new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regHer: new FormControl('',[Validators.required]),
      anot:new FormControl('')
    });
    this.EnfT=new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regHer: new FormControl('',[Validators.required]),
      anot:new FormControl('')
    });
    this.Otros=new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regHer: new FormControl('',[Validators.required]),
      anot:new FormControl('')
    });

    this.ID_PAC=+this.aRoute.snapshot.paramMap.get('ID_PAC');
  }

  ngOnInit(): void {
  }

}
