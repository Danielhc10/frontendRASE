import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert'

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  listMedicos:any[]=[
    {nombre: "Xochitl Cruz", especialidad:"Neonatologa", telefono:"7839876543"},
    {nombre: "Daniel Hernandez", especialidad:"Otorrinolaringolo", telefono:"7822596985"},
    {nombre: "Juan Zumaya", especialidad:"Oftalmologo", telefono:"7821234567"},
  ]

  constructor() { }

  ngOnInit(): void {
  }
  noooo(){
    Swal({
      title: "¿Estás seguro de eliminar al médico?",
      text: "Una vez borrado, podrás activarlo nuevamento en el apartado de agregar médico",
      icon: "warning",
      buttons: {
        confirm: true,
        cancel: true
      },
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        Swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        Swal("Your imaginary file is safe!");
      }
    });
  }

}
