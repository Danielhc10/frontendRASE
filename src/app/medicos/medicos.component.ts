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

  listMedicos:any=[];
  listEsp:any=[];
  ModalTitle:string;
  ActivateAddEditDepComp: boolean=false;
  dep:any;

  ngOnInit(): void {
    this.refreshDocList()
   }
   refreshDocList(){
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
        this.router.navigateByUrl('/medicos/agregarmedico');
      } else if (result.isDenied) {
        this.router.navigateByUrl('/medicos')
      }
    })
    
  }



  clickDelete(ID_DOC: number){
    Swal.fire({
      title: '¿Estas seguro de eliminar el registro?',
      text: "Una vez eliminado no se podrá recuperar.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result)=>{
      if(result.isConfirmed){
        this.service.deleteMedico(ID_DOC).subscribe(data=>{
          this.refreshDocList();
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
    //console.log(ID_DOC);
    
  }

}
