import { Component, Input, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { IMedicos } from '../../models/medicos'

@Component({
  selector: 'app-agregar-medico',
  templateUrl: './agregar-medico.component.html',
  styleUrls: ['./agregar-medico.component.css']
})
export class AgregarMedicoComponent implements OnInit {

  /**
   * curp: FormGroup;
  email: FormGroup;
   */
  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  newMedic: FormGroup;
 
  constructor(private service: SharedService, private router: Router) { }

  ngOnInit(): void {
    
   
    this.newMedic = new FormGroup({
      nomDoc: new FormControl('',[Validators.required]),
      apPatDoc: new FormControl('',[Validators.required]),
      apMatDoc: new FormControl('',[Validators.required]),
      curpDoc: new FormControl('',[Validators.required, Validators.minLength(18)]),
      recDis: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      correoDoc: new FormControl('',[Validators.required, Validators.email]),
      idEsp: new FormControl('', [Validators.required]),
      telDoc: new FormControl('', [Validators.required, Validators.minLength(10)]),
      cedP: new FormControl('',[Validators.required]),
    })
  }
  addMedico(){
    let medico: IMedicos = Object.assign({}, this.newMedic.value);
    console.table(medico);
    
    this.service.createMedico(medico)
      .subscribe(medico => this.onSaveSuccess(),
                  error => console.log(error))
  }
  onSaveSuccess(){
    this.router.navigate(['/medicos'])
  }
  changeUpperCase(textToUpper: string) {
    //console.log("textToUpper: " + textToUpper);
    //var newWord = textToUpper.toUpperCase();
    //console.log("The word in upper case: " + newWord);
 }

}
