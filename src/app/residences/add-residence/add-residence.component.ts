import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {
  residenceId!: number | null;
  isUpdate = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.residenceId = Number(id);
        this.isUpdate = true; // Si un ID est présent, on est en mode mise à jour
      } else {
        this.residenceId = null;
        this.isUpdate = false; // Mode ajout
      }
    });
  }
}
