import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-alergico',
  templateUrl: './alergico.component.html',
  styleUrls: ['./alergico.component.css']
})
export class AlergicoComponent implements OnInit {

  antaler: FormGroup;
  accion="AGREGAR";
  ID_PAC=0;

  constructor(private servicio: SharedService,
    private router:Router,
    private aRoute: ActivatedRoute) {
    this.antaler= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      regAler: new FormControl('',[Validators.required]),
      anot: new FormControl('')
    });
    this.ID_PAC=+this.aRoute.snapshot.paramMap.get('ID_PAC');
  }

  ngOnInit(): void {
  }

}
