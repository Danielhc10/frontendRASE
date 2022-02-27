import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  edicion:boolean=false;
  listEsp: any=[];
  accion ="AGREGAR";
  ID_DOC=0;
  
  
 
  constructor(
    private service: SharedService, 
    private router: Router,
    private aRoute: ActivatedRoute,
    private fb: FormBuilder) { 
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
    this.service.getEspecialidad().subscribe(esp => {
      this.listEsp = esp;
      console.table(esp);
    })
    this.esEditar();
  }
  esEditar(){
   if (this.ID_DOC != 0) {
     this.accion="EDITAR";
     this.service.getMedico(this.ID_DOC).subscribe(data=>{
       console.table(data)
       this.newMedic.patchValue({
         nomDon: data.nomDoc,
         apPatDoc: data.apPatDoc,
         apMatDoc: data.apMatDoc,
         curpDoc: data.curpDoc,
         recDis: data.recDis,
         idEsp: data.idEsp,
         correoDoc: data.correoDoc,
         telDoc: data.telDoc,
         cedP: data.cedP
       })
     }, error =>{
       console.log(error);
     })
   }   
  }
  /* cargarFormulario(doctor: IMedicos){
    console.table(doctor);
    
    this.newMedic.patchValue({
      NOM_DOC: doctor.nomDoc,
      AP_PAT_DOC: doctor.apPatDoc,
      AP_MAT_DOC: doctor.apMatDoc,
      CURP_DOC: doctor.curpDoc,
      REC_DIS: doctor.recDis,
      CORREO_DOC: doctor.correoDoc,
      ID_ESP: doctor.idEsp,
      TEL_DOC: doctor.telDoc,
      CED_P: doctor.cedP
    })
  } */

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

  /* editarDoc(doctor: IMedicos){
    //console.log(doctor);
    this.accion="EDITAR";
    this.ID_DOC = doctor.idDoc;

    console.log(doctor);
    
    this.newMedic.patchValue({
      NOM_DOC: doctor.nomDoc,
      AP_PAT_DOC: doctor.apPatDoc,
      AP_MAT_DOC: doctor.apMatDoc,
      CURP_DOC: doctor.curpDoc,
      REC_DIS: doctor.recDis,
      CORREO_DOC: doctor.correoDoc,
      ID_ESP: doctor.idEsp,
      TEL_DOC: doctor.telDoc,
      CED_P: doctor.cedP
    })
    
  } */
  changeUpperCase(textToUpper: string) {
    //console.log("textToUpper: " + textToUpper);
    //var newWord = textToUpper.toUpperCase();
    //console.log("The word in upper case: " + newWord);
 }

}
