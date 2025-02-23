import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Residence } from 'src/app/core/models/residence';
import { CommonService } from 'src/app/core/models/services/common.service';
import { ResidenceService } from 'src/app/core/models/services/residence.service';
@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})


export class ResidencesComponent implements OnInit {

  listResidencesFavorite: Residence[]=[];
  listResidencesFiltered: Residence[]=[];
  listResidences: Residence[] = [];


  

  constructor(private router: Router, private residenceService : ResidenceService,private commonService: CommonService) { 
  } 

  ngOnInit(): void {
    this.residenceService.getResidences().subscribe(residences => this.listResidences = residences);
    this.listResidencesFiltered = this.listResidences;
    this.loadResidences();
  }

  loadResidences() {
    this.residenceService.getResidences().subscribe(
      data => this.listResidences = data
    );
  }

  onDeleteResidence(id: number) {
    const index = this.listResidences.findIndex(residence => residence.id === id);
    
    if (index !== -1) {
      this.residenceService.deleteResidence(id).subscribe(() => {
        this.listResidences.splice(index, 1); 
      });
    }
  }


  getNumberOfSimilarAddresses(address: string) {
    return this.commonService.getSameValueOf(this.listResidences, 'address', address);
  }



   ShowLocation(id: number){
      this.listResidences[id-1].locationShown = !this.listResidences[id-1].locationShown;
      console.log(this.listResidences[id-1].locationShown);
      if (this.listResidences[id-1].address=="inconnu"){
        alert("Adresse inconnue");
      } 
   }

   LikeRes(id: number){
    console.log(this.listResidencesFavorite);
    this.listResidencesFavorite.push(this.listResidences[id-1]);
   }

   filterResults(text: string) {
    if (!text) {
      this.listResidencesFiltered = this.listResidences;
      return;
    }
  
    this.listResidencesFiltered = this.listResidences.filter(
      Residence => Residence?.address.toLowerCase().includes(text.toLowerCase())
    );
  }

  OnSelect(res : Residence){
    this.router.navigate(['/residences', res.id]);
  }

  ListApartments(res : Residence){
    this.router.navigate(['/apartments', res.id]);
  }


}
