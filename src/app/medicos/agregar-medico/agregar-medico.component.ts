import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-medico',
  templateUrl: './agregar-medico.component.html',
  styleUrls: ['./agregar-medico.component.css']
})
export class AgregarMedicoComponent implements OnInit {

  curp: FormGroup;
  email: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.curp = new FormGroup({
      medicurp: new FormControl ('',[Validators.required, Validators.minLength(18)])
    }),
    this.email = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email])
    })
  }
  changeUpperCase(textToUpper: string) {
    //console.log("textToUpper: " + textToUpper);
    //var newWord = textToUpper.toUpperCase();
    //console.log("The word in upper case: " + newWord);
 }

}
