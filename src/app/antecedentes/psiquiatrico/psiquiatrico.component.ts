import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

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

  accion="AGREGAR"
  ID_PAC=0;

  constructor(private servicios:SharedService,
    private router:Router,
    private aRoute:ActivatedRoute) {
    this.His=new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPsi: new FormControl('',[Validators.required]),
      anot: new FormControl('')
    });
    this.Con=new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPsi: new FormControl('',[Validators.required]),
      anot: new FormControl('')
    });
    this.Tra=new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPsi: new FormControl('',[Validators.required]),
      anot: new FormControl('')
    });
    this.Med=new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regPsi: new FormControl('',[Validators.required]),
      anot: new FormControl('')
    });
    this.ID_PAC=+this.aRoute.snapshot.paramMap.get('ID_PAC');
  }

  ngOnInit(): void {
  }

}
