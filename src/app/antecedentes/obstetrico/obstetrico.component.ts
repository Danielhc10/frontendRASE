import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

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
  meno:FormGroup;

  accion="AGREGAR";
  ID_PAC=0;

  constructor(private servicio: SharedService,
    private router: Router,
    private aRoute: ActivatedRoute) {

    this.pperiodo= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regObs: new FormControl('',[Validators.required]),
      anot: new FormControl('')
    });
    this.uperiodo= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regObs: new FormControl('',[Validators.required]),
      anot: new FormControl('')
    });
    this.numemba= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regObs: new FormControl('',[Validators.required]),
      anot: new FormControl('')
    });
    this.numembaries= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regObs: new FormControl('',[Validators.required]),
      anot: new FormControl('')
    });
    this.numhijo= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regObs: new FormControl('',[Validators.required]),
      anot: new FormControl('')
    });
    this.anti= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regObs: new FormControl('',[Validators.required]),
      anot: new FormControl('')
    });
    this.meno= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regObs: new FormControl('',[Validators.required]),
      anot: new FormControl('')
    });
    this.ID_PAC=+this.aRoute.snapshot.paramMap.get('ID_PAC');
  }

  ngOnInit(): void {
  }

}
