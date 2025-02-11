import { Component, EventEmitter, Output } from '@angular/core';
import { Residence } from '../core/models/residence.model';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  @Output() residencesLoaded = new EventEmitter<any[]>();
  searchText: string = ''; 
  favoriteResidences: any[] = []; 

  listResidences = [
    { id: 1, name: "EL Fel", address: "Borj Cedria", image: "alpha.jpg", status: "Disponible" },
    { id: 2, name: "El Yasmine", address: "Ezzahra", image: "beta.jpg", status: "En Construction" },
    { id: 3, name: "El Arij", address: "inconnu", image: "gamma.jpg", status: "Vendu" }
  ];

  
  filterResidences() {
    console.log("Search Text:", this.searchText);
    return this.listResidences.filter(residence =>
      residence.address.includes(this.searchText)
    );  
  }

  showLocation(residence: Residence) {
    if (residence.address === "inconnu") {
      alert("L'adresse de cette résidence est inconnue");
    } else {
      alert(`Adresse : ${residence.address}`);
    }
  }

  addToFavorites(residence: any) {
    if (!this.favoriteResidences.some(fav => fav.id === residence.id)) {
      this.favoriteResidences.push(residence);
    }
  }
}
