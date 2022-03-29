import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  constructor(private servicio: SharedService, private router: Router) { }
  
  listConsultas: any=[];
  
  ngOnInit(): void {
    this.refreshConsultaList();
  }
  refreshConsultaList(){
    this.servicio.getConsultaList().subscribe(data=>{
      this.listConsultas=data;
    })
  }

  addConsulta(){
    Swal.fire({
      title: '¿Deseas generar una nueva consulta?',
      
      showCancelButton: true,
      confirmButtonText: 'Si',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 ',
        confirmButton: 'order-2 right-gap',
        
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/consultas/agregarconsultas/');
      } else if (result.isDenied) {
        this.router.navigateByUrl('/consultas')
      }
    })
  }

}
