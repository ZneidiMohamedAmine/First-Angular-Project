import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listResidences = [
    { id: 1, name: "EL Fel", address: "Borj Cedria", image: "assets/alpha.jpg", status: "Disponible" },
    { id: 2, name: "El Yasmine", address: "Ezzahra", image: "assets/beta.jpg", status: "En Construction" },
    { id: 3, name: "El Arij", address: "inconnu", image: "assets/gamma.jpg", status: "Vendu" }
  ];

  constructor() {}

  ngOnInit(): void {}
}
