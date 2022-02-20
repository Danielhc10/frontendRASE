import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedService  } from "../../shared.service";

@Component({
  selector: 'app-edit-medico',
  templateUrl: './edit-medico.component.html',
  styleUrls: ['./edit-medico.component.css']
})
export class EditMedicoComponent implements OnInit {

  constructor(private service: SharedService) { }
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  newMedic: FormGroup;


  @Input() dep:any;
  Telefonomed:string;
  Recetas:number;

  ngOnInit(): void {
    //this.Telefonomed = this.dep.Telefonomed;
    //this.Recetas = this.dep.Recetas;
  }


  updateMedico(){
    var val= {
      Telefonomed: this.Telefonomed,
      Recetas: this.Recetas
    }
    this.service.updateMedico(val).subscribe(res =>{
      alert(res.toString());
    })
  }
}
