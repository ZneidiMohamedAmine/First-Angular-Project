import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApartmentsService } from 'src/app/services/apartments.service';
import { Apartment } from 'src/app/core/models/apartment';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  apartForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apartmentsService: ApartmentsService,
    private router: Router
  ) {
    this.apartForm = this.fb.group({
      apartNum: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
      floorNum: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
      surface: ['', Validators.required],
      terrace: [false],
      surfaceterrace: [''],
      category: ['', Validators.required],
      ResidenceId: ['', Validators.required]
    });

    this.apartForm.get('terrace')?.valueChanges.subscribe(value => {
      if (!value) {
        this.apartForm.get('surfaceterrace')?.disable();
        this.apartForm.get('surfaceterrace')?.setValue('');
      } else {
        this.apartForm.get('surfaceterrace')?.enable();
      }
    });
  }

  onFormSubmit() {
    if (this.apartForm.valid) {
      const newApart: Apartment = this.apartForm.value;
      this.apartmentsService.addApartment(newApart);
      console.log('Nouvel appartement ajouté:', newApart);
      this.router.navigate(['/apartments']); // Redirection après ajout
    }
  }
}
