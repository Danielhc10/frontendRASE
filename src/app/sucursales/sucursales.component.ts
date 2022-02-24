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
  modalTitle: string;
  ActivaNewSucursal: boolean=false;
  dep:any;

  ngOnInit(): void {
    this.refreshSucursalesList();
  }

  refreshSucursalesList(){
    this.servicio.getSucursalesList().subscribe(data=>{
      this.listSucusal=data; 
    });
  }

  addSucursal(){
    this.dep={
      idSuc:"",
      nomSuc:"",
      dirSuc:""
    }
    this.modalTitle="Agregando sucursal";
    this.ActivaNewSucursal=true;
    this.refreshSucursalesList();
  }
  closeClick(){
    this.ActivaNewSucursal=false;
    this.refreshSucursalesList();
  }
}
