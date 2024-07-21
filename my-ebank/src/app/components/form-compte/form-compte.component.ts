import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { GlobaleService } from '../../service/globale.service';
import {Compte} from "../../models/model";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-form-compte',
  templateUrl: './form-compte.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  styleUrls: ['./form-compte.component.css']
})
export class FormCompteComponent {
  compteForm: FormGroup;

  constructor(private fb: FormBuilder, private globaleService: GlobaleService) {
    this.compteForm = this.fb.group({
      type: ['', Validators.required],
      soldeInitial: [0, [Validators.required, Validators.min(0)]],
      utilisateurId: ['', Validators.required],
      dateCreation: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.compteForm.valid) {
      const newCompte: Compte = {
        ...this.compteForm.value,
        dateCreation: new Date(this.compteForm.value.dateCreation)
      };
      this.globaleService.ajouterCompte(newCompte).subscribe(
        response => {
          console.log('Compte created successfully:', response);
          this.compteForm.reset();
        },
        error => {
          console.error('Error creating compte:', error);
        }
      );
    }
  }
}
