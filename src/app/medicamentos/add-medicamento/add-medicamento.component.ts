import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMedicamento } from 'src/app/models/medicamentos/medicamento';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.component.html',
  styleUrls: ['./add-medicamento.component.css']
})
export class AddMedicamentoComponent implements OnInit {

  constructor(private servicio: SharedService, private router: Router) { }
  
  newMedicina: FormGroup;
  ngOnInit(): void {
    this.newMedicina = new FormGroup({
      nomMed: new FormControl('',[(Validators.required)]),
      descMed: new FormControl('',[Validators.required])
    })
    
  }
  addMedicamento(){
    let medicamento: IMedicamento = Object.assign({}, this.newMedicina.value);
    console.table(medicamento);
    
    this.servicio.createMedicamento(medicamento)
      .subscribe(medicamento => this.onSaveSuccess(),
                  error => console.log(error))
  }
  onSaveSuccess(){
    this.router.navigateByUrl('/medicamentos')
  }
}
