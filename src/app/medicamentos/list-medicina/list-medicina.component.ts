import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-medicina',
  templateUrl: './list-medicina.component.html',
  styleUrls: ['./list-medicina.component.css']
})
export class ListMedicinaComponent implements OnInit {

  constructor(private servicio: SharedService, private router: Router) { }

  listMedicamentos: any[];
  modalTitle: string;
  ActivaNewMedicamento: boolean=false;
  dep:any;

  ngOnInit(): void {
    this.refreshMedList();
  }
  refreshMedList(){
    this.servicio.getMedicamentos().subscribe(data=>{
      this.listMedicamentos=data;
      console.table(data);
      
    });
  }
  addMedicamento(){
    this.dep={
      idMed:"",
      nomMed:"",
      descMed: ""
    }
    this.modalTitle="Agregando medicamento";
    this.ActivaNewMedicamento=true;
    this.refreshMedList();
  }
  editClick(med){
    this.dep=med; 
    this.modalTitle="Editar medicamento";
    this.ActivaNewMedicamento= true;
  }
  clickDelete(ID_MED: number){
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
        this.servicio.deleteMedicamentos(ID_MED).subscribe(data=>{
          this.refreshMedList();
        },error => {
          console.log(error);
          
        }),
        Swal.fire(
          'Eliminado',
          'El registro se ha eliminado correctamente',
          'success'
        )  
      }
    })
    //console.log('Medicamento con ID: '+ID_MED+' fue eliminado correctamente');    
  }
  
  closeClick(){
    this.ActivaNewMedicamento=false;
    this.refreshMedList();
  }
}
