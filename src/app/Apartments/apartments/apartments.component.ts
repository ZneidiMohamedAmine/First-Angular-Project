import { Component, OnInit } from '@angular/core';
import { ApartmentsService } from 'src/app/services/apartments.service';
import { Apartment } from 'src/app/core/models/apartment';
import { CommonService } from 'src/app/core/models/services/common.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  apartments: Apartment[] = [];

  constructor(private apartmentsService: ApartmentsService,private commonService: CommonService) {}

  ngOnInit(): void {
    this.loadApartments();
  }

  loadApartments() {
    this.apartments = this.apartmentsService.getApartments();
  }

  getNumberOfSimilarSurfaces(surface: number) {
    return this.commonService.getSameValueOf(this.apartments, 'surface', surface);
  }
}
