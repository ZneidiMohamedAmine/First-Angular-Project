import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/core/models/apartment';
import { ApartmentsService } from 'src/app/services/apartments.service';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent implements OnInit {
  apartments: Apartment[] = [];
  residenceId!: number;

  constructor(private apartmentService: ApartmentsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      
      if (!isNaN(id)) {
        this.residenceId = id;
        this.apartments = this.apartmentService.getApartmentsByID(this.residenceId);
        console.log(`Résidence ID : ${this.residenceId}`);
      } else {
        console.error("ID de résidence invalide !");
      }
    });
  }
}
