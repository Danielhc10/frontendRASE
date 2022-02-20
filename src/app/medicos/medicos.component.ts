import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { IMedicos } from '../models/medicos';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }
  /*listMedicos:any[]=[
    {nombre: "Xochitl Cruz", especialidad:"Neonatologa", telefono:"7839876543"},
    {nombre: "Daniel Hernandez", especialidad:"Otorrinolaringolo", telefono:"7822596985"},
    {nombre: "Juan Zumaya", especialidad:"Oftalmologo", telefono:"7821234567"},
  ]*/

  listMedicos:any=[];
  ModalTitle:string;
  ActivateAddEditDepComp: boolean=false;
  dep:any;

  ngOnInit(): void {
    this.refreshDepList();
   }
   refreshDepList(){
    this.service.getMedicosList().subscribe(data=>{
      this.listMedicos=data;
    });
  }
  addMedico(){
    Swal.fire({
      title: '¿Deseas agregar un nuevo médico?',
      
      showCancelButton: true,
      confirmButtonText: 'Si',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 ',
        confirmButton: 'order-2 right-gap',
        
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/agregarmedico');
      } else if (result.isDenied) {
        this.router.navigateByUrl('/medicos')
      }
    })
    
  }
  editClick(medico: IMedicos){
    this.router.navigate(['/medicos/editarmedico'])
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
    });
  }

}
