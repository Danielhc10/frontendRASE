import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  
  listConsultas: any=[];  

  /* dataSource = new MatTableDataSource<any>(this.listConsultas)
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } */
  constructor(private servicio: SharedService, private router: Router) { }
  
  
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
        this.router.navigateByUrl('/consultas/agregarconsultas');
      } else if (result.isDenied) {
        this.router.navigateByUrl('/consultas')
      }
    })
  }
  clickDelete(ID_CON: number){
    Swal.fire({
      title: '¿Estas seguro de eliminar el registro?',
      text: "Una vez eliminado no se podrá recuperar.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.deleteConsulta(ID_CON).subscribe(data=>{
          this.refreshConsultaList();
        }, error =>{
          console.log(error);
          
        }),
        Swal.fire(
          'Eliminado',
          'El registro se ha eliminado correctamente',
          'success'
        )
      }
    })
  }

  /* handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 5
  page_number: number = 1

  pageSizeOptions = [5,10,15,20] */
}
