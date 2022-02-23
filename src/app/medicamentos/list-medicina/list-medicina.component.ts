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
    this.servicio.getMedicosList().subscribe(data=>{
      this.listMedicamentos=data;
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
    console.log('Medicamento con ID: '+ID_MED+' fue eliminado correctamente');
    
    this.servicio.deleteMedicamentos(ID_MED).subscribe(data=>{
      this.refreshMedList();
    },error => {
      console.log(error);
      
    })  
  }
  
  closeClick(){
    this.ActivaNewMedicamento=false;
    this.refreshMedList();
  }
}
