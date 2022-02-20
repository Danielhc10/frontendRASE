import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-paciente',
  templateUrl: './list-paciente.component.html',
  styleUrls: ['./list-paciente.component.css']
})
export class ListPacienteComponent implements OnInit {

  constructor( private servicio: SharedService, private router: Router) { }

  listPacientes: any=[];

  ngOnInit(): void {
    this.refreshPacienteList();
  }
  refreshPacienteList(){
    this.servicio.getPacientesList().subscribe(data=>{
      this.listPacientes=data;
    });
  }
  addPaciente(){
    Swal.fire({
      title: '¿Deseas agregar un nuevo paciente?',
      
      showCancelButton: true,
      confirmButtonText: 'Si',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 ',
        confirmButton: 'order-2 right-gap',
        
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/medicos/agregarpac');
      } else if (result.isDenied) {
        this.router.navigateByUrl('/medicos/pacientes')
      }
    })
  }
  noooo(){
    Swal.fire({
      title: "¿Estás seguro de eliminar al médico?",
      text: "Una vez borrado, podrás activarlo nuevamento en el apartado de agregar médico",
      icon: "warning",
      //buttons: {
        //confirm: true,
       // cancel: true
      //},
      //dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        Swal.fire("Poof! Your imaginary file has been deleted!");
      } else {
        Swal.fire("Your imaginary file is safe!");
      }
    })
  }
}
