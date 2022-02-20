import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISucursales } from 'src/app/models/sucursales';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-sucursal',
  templateUrl: './add-sucursal.component.html',
  styleUrls: ['./add-sucursal.component.css']
})
export class AddSucursalComponent implements OnInit {

  newSucursal: FormGroup;
  constructor(private servicio: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.newSucursal = new FormGroup({
      nomSuc: new FormControl ('',[Validators.required]),
      dirSuc: new FormControl('', [Validators.required])
    })
  }
  addSucursal(){
    let sucursal: ISucursales = Object.assign({}, this.newSucursal.value);
    console.table(sucursal);
    
    this.servicio.createSucursal(sucursal)
      .subscribe(sucursal => this.onSaveSuccess(),
                  error => console.log(error))
  }
  onSaveSuccess(){
    this.router.navigate(['/sucursales'])
  }
}
