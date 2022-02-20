import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  constructor(private servicio: SharedService, private router: Router) { }

  listSucusal: any=[];

  ngOnInit(): void {
    this.refreshSucursalesList();
  }

  refreshSucursalesList(){
    this.servicio.getSucursalesList().subscribe(data=>{
      this.listSucusal=data;
    });
  }

  addSucursal(){
    Swal.fire({
      title: '¿Deseas agregar un nueva sucursal?',
      
      showCancelButton: true,
      confirmButtonText: 'Si',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 ',
        confirmButton: 'order-2 right-gap',
        
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/sucursales/agregarsucursal');
      } else if (result.isDenied) {
        this.router.navigateByUrl('/sucursales')
      }
    })
  }
}
