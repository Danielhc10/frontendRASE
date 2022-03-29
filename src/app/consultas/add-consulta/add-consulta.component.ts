import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IConsulta } from 'src/app/models/consulta/consulta';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';

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
      masaCorp: new FormControl('0'),
      temperatura: new FormControl('0'),
      frecResp: new FormControl('0'),
      presArt: new FormControl('0'),
      frecCar: new FormControl('0'),
      grasaCorp: new FormControl('0'),
      masaMusc: new FormControl('0'),
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
    Swal.fire({
      title: 'Confirmar consulta',
      text: "¿Desea guardar el registro?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Guardar y agregar receta'
    }).then((result) => {
      if (result.isConfirmed) {
        let consulta: IConsulta = Object.assign({}, this.newConsulta.value);
        console.table(consulta);
        this.service.createConsulta(consulta)
          .subscribe(consulta=>this.onSaveSuccess(),
                      error=>console.log(error))
        Swal.fire(
          'Guardado',
          'La consulta ha sido guardada correctamente',
          'success'
        )
      }
    })
  }
  onSaveSuccess(){
    this.router.navigateByUrl('/consultas/agregareceta')
  }
}
