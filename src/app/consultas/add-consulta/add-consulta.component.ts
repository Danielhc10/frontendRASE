import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IConsulta } from 'src/app/models/consulta/consulta';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-consulta',
  templateUrl: './add-consulta.component.html',
  styleUrls: ['./add-consulta.component.css']
})
export class AddConsultaComponent implements OnInit {

  newConsulta: FormGroup;
  listMedicos: any = [];
  listPacientes: any = [];
  listSucursales: any = [];
  constructor(private service: SharedService, private router: Router) { 
    this.newConsulta= new FormGroup({
      idPac: new FormControl('',[Validators.required]),
      idDoc: new FormControl('',[Validators.required]),
      idSuc: new FormControl('',[Validators.required]),
      fechaCon: new FormControl('',[Validators.required]),
      estatura: new FormControl('',[Validators.required]),
      peso: new FormControl('',[Validators.required]),
      masaCorp: new FormControl('',[Validators.required]),
      temperatura: new FormControl('',[Validators.required]),
      frecResp: new FormControl('',[Validators.required]),
      presArt: new FormControl('',[Validators.required]),
      frecCar: new FormControl('',[Validators.required]),
      grasaCorp: new FormControl('',),
      masaMusc: new FormControl('',),
      satOxigeno: new FormControl('',[Validators.required]),
      motivo: new FormControl('',[Validators.required]),
      diagnostico: new FormControl('',[Validators.required]),
    })
  }

  ngOnInit(): void {
    this.service.getMedicosList().subscribe(data =>{
      this.listMedicos = data;
      console.table(data)
    });
    this.service.getPacientesList().subscribe(pacientes =>{
      this.listPacientes = pacientes;
      console.table(pacientes);
    })
    this.service.getSucursalesList().subscribe(sucursales =>{
      this.listSucursales = sucursales;
      console.table(sucursales)
    })
    /* traerMedicos(){
      this.service.getMedicosList().subscribe(medico=>{
        this.listMedicos=medico;
      })
    }
    traerPacientes(){
      this.service.getPacientesList().subscribe(paciente=>{
        this.listPacientes=paciente;
      })
    }
    traerSucursal(){
      this.service.getSucursalesList().subscribe(sucursal=>{
        this.listSucursales=sucursal;
      })
    }
 */
  }
  addConsulta(){
    let consulta: IConsulta = Object.assign({}, this.newConsulta.value);
    console.table(consulta);

    this.service.createConsulta(consulta)
      .subscribe(consulta=>this.onSaveSuccess(),
                  error=>console.log(error))
  }
  onSaveSuccess(){
    this.router.navigateByUrl('/pacientes')
  }
}
