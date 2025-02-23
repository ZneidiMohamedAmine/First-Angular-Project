import { Injectable } from '@angular/core';
import { Apartment } from '../core/models/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsService {
  private apartments: Apartment[] = [
    { apartNum: 101, floorNum: 1, surface: 50, terrace: true, surfaceterrace: 10, category: "Standard", ResidenceId: 1 },
    { apartNum: 102, floorNum: 2, surface: 60, terrace: false, surfaceterrace: 0, category: "Luxury", ResidenceId: 1 },
    { apartNum: 201, floorNum: 1, surface: 55, terrace: true, surfaceterrace: 12, category: "Premium", ResidenceId: 2 }
  ];

  constructor() {}

  getApartments(): Apartment[] {
    return this.apartments;
  }

  getApartmentsByID(residenceId: number): Apartment[] {
    console.log(`Recherche des appartements pour la résidence ${residenceId}`);
    const result = this.apartments.filter(apart => apart.ResidenceId === residenceId);
    console.log("Appartements trouvés :", result);
    return result;
  }

  addApartment(apartment: Apartment): void {
    this.apartments.push(apartment);
    console.log('Appartement ajouté avec succès !', apartment);
  }
}
