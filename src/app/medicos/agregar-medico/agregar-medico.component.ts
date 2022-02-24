import { Component, Input, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { IMedicos } from '../../models/medicos'

@Component({
  selector: 'app-agregar-medico',
  templateUrl: './agregar-medico.component.html',
  styleUrls: ['./agregar-medico.component.css']
})
export class AgregarMedicoComponent implements OnInit {

  /**
   * curp: FormGroup;
  email: FormGroup;
   */ 

  newMedic: FormGroup;
  accion ="AGREGAR";
  ID_DOC=0;
  
 
  constructor(
    private service: SharedService, 
    private router: Router,
    private aRoute: ActivatedRoute) { 
      this.newMedic = new FormGroup({
        //idDoc: new FormControl(''),
        nomDoc: new FormControl('',[Validators.required]),
        apPatDoc: new FormControl('',[Validators.required]),
        apMatDoc: new FormControl('',[Validators.required]),
        curpDoc: new FormControl('',[Validators.required, Validators.minLength(18)]),
        recDis: new FormControl('', [Validators.required, Validators.maxLength(3)]),
        correoDoc: new FormControl('',[Validators.required, Validators.email]),
        idEsp: new FormControl('', [Validators.required]),
        telDoc: new FormControl('', [Validators.required, Validators.minLength(10)]),
        cedP: new FormControl('',[Validators.required]),
      })
      this.ID_DOC = +this.aRoute.snapshot.paramMap.get('ID_DOC')!;
    }

  ngOnInit(): void {
    this.esEditar();
  }

  esEditar(){
    if(this.ID_DOC !==0){
      this.accion="EDITAR";
      this.service.getMedico(this.ID_DOC).subscribe(data=>{
        console.table(data);
        this.newMedic.patchValue({
          nomDoc: data.NOM_DOC,
          AP_PAT_DOC: data.AP_PAT_DOC,
          AP_MAT_DOC: data.AP_MAT_DOC,
          CURP_DOC: data.CURP_DOC,
          REC_DIS: data.REC_DIS,
          CORREO_DOC: data.CORREO_DOC,
          ID_ESP: data.ID_ESP,
          TEL_DOC: data.TEL_DOC,
          CED_P: data.CED_P
        })
      },error=>{
        console.log(error);
        
      })
    }
  }
  addMedico(){
    let medico: IMedicos = Object.assign({}, this.newMedic.value);
    console.table(medico);
    
    this.service.createMedico(medico)
      .subscribe(medico => this.onSaveSuccess(),
                  error => console.log(error))
  }
  onSaveSuccess(){
    this.router.navigate(['/medicos'])
  }
  changeUpperCase(textToUpper: string) {
    //console.log("textToUpper: " + textToUpper);
    //var newWord = textToUpper.toUpperCase();
    //console.log("The word in upper case: " + newWord);
 }

}
