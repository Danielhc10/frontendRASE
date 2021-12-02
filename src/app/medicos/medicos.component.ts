import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  listMedicos:any[]=[
    {nombre: "Xochitl Cruz", especialidad:"Neonatologa", telefono:"7839876543"},
    {nombre: "Daniel Hernandez", especialidad:"Otorrinolaringolo", telefono:"7822596985"},
    {nombre: "Juan Zumaya", especialidad:"Oftalmologo", telefono:"7821234567"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
