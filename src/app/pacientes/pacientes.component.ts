import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { IPacientes } from '../models/pacientes';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  newPaciente: FormGroup;

  accion="AGREGAR"
  ID_PAC=0;
  constructor(private servicio: SharedService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.newPaciente = new FormGroup({
      nomPac: new FormControl('',[Validators.required]),
      apPatPac: new FormControl('',[Validators.required]),
      apMatPac: new FormControl('',[Validators.required]),
      FecNacPac: new FormControl('',[Validators.required]),
      sexoPac: new FormControl('',[Validators.required]),
      curpPac: new FormControl('',[Validators.required]),
      telPac: new FormControl('', [Validators.required]),
      correoPac: new FormControl('',[Validators.required]),
      tSangrePac: new FormControl('',[Validators.required]),
      estCivPac: new FormControl('',[Validators.required]),
      ocupacionPac: new FormControl('',[Validators.required]),
      notasPac: new FormControl('',[Validators.required]),
      archPac: new FormControl('',[Validators.required]),
    });
    this.ID_PAC =+this.aRoute.snapshot.paramMap.get('ID_PAC')
  }

  ngOnInit(): void {
    if(this.ID_PAC!=0){
      this.accion="EDITAR";

      this.servicio.getPaciente(this.ID_PAC).subscribe(([paciente])=>{
        this.newPaciente.setValue({
          nomPac: paciente.NOM_PAC,
          apPatPac: paciente.AP_PAT_PAC,
          apMatPac: paciente.AP_MAT_PAC,
          FecNacPac: paciente.FEC_NAC_PAC,
          sexoPac: paciente.SEXO_PAC,
          curpPac: paciente.CURP_PAC,
          telPac: paciente.TEL_PAC,
          correoPac: paciente.CORREO_PAC,
          tSangrePac: paciente.T_SANGRE_PAC,
          estCivPac: paciente.EST_CIV_PAC,
          ocupacionPac: paciente.OCUPACION_PAC,
          notasPac: paciente.NOTAS_PAC,
          archPac: paciente.ARCH_PAC
        })
      })
    }

  }
  addPaciente(){
    let paciente: IPacientes = Object.assign({}, this.newPaciente.value);
    console.table(paciente);

    if (this.ID_PAC != 0) {

      Swal.fire(
        '¡Registro actualizado!',
        'El paciente ha sido actualizado correctamente',
        'success'
      )
      //Actualizamos al paciente
      paciente.idPac = this.ID_PAC;
      this.servicio.updatePaciente(this.ID_PAC, paciente).subscribe(data=>{
        this.onSaveSuccess();
      })

    } else {

      Swal.fire(
        '¡Registro agregado!',
        'El paciente ha sido agregado correctamente',
        'success'
      )
      this.servicio.createPaciente(paciente)
      .subscribe(/* paciente => this.onSaveSuccess(), */
                  error => console.log(error))
    }

  }

  onSaveSuccess(){
    this.router.navigate(['/medicos/pacientes'])
  }

}

