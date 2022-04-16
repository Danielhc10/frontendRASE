import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-no-patologicos',
  templateUrl: './no-patologicos.component.html',
  styleUrls: ['./no-patologicos.component.css']
})
export class NoPatologicosComponent implements OnInit {

  Fis:FormGroup;
  Tab: FormGroup;
  Alc:FormGroup;
  Caf:FormGroup;
  Dro:FormGroup;
  Vac:FormGroup;
  Otr:FormGroup;

  accion="AGREGAR";
  ID_PAC=0;

  constructor(private servicio: SharedService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.Fis=new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regNPat: new FormControl('',[Validators.required]),
      anot: new FormControl('',[Validators.required])
    });
    this.Tab=new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regNPat: new FormControl('',[Validators.required]),
      anot: new FormControl('',[Validators.required])
    });
    this.Alc=new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regNPat: new FormControl('',[Validators.required]),
      anot: new FormControl('',[Validators.required])
    });
    this.Caf=new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regNPat: new FormControl('',[Validators.required]),
      anot: new FormControl('')
    });
    this.Dro=new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regNPat: new FormControl('',[Validators.required]),
      anot: new FormControl('')
    });
    this.Vac=new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regNPat: new FormControl('',[Validators.required]),
      anot: new FormControl('')
    });
    this.Otr=new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idAnt: new FormControl('',[Validators.required]),
      regNPat: new FormControl('',[Validators.required]),
      anot: new FormControl('')
    });
    this.ID_PAC=+this.aRoute.snapshot.paramMap.get('ID_PAC');
  }

  ngOnInit(): void {
  }

}
