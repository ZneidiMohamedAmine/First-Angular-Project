import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from 'src/app/core/models/residence.model';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residenceId!: number;
  residence!: Residence;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.residenceId = Number(this.route.snapshot.paramMap.get('id')); // Récupère l'ID de l'URL
  }
  goToNextResidence(): void {
    const nextId = this.residenceId + 1;
    this.residence
  }
}
