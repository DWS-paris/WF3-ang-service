import { Component, OnInit } from '@angular/core';

// Importer les module pour la gestion du formulaire
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// Importer le service
import { CrudService } from "../../service/crud.service";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html'
})
export class CreatePageComponent implements OnInit {

  // Déclaration
  public addFormData: FormGroup;

  constructor(
    private CrudService: CrudService,
    private FormBuilder: FormBuilder
  ) { }

  // Créer une fonction pour initialiser le formulaire
  private resetForm = () => {
    this.addFormData = this.FormBuilder.group({
      title: [ null, Validators.required ],
      body: [ null, Validators.required ],
      userId: [ 41, Validators.required ]
    });
  }

  // Création d'une fonction pour utiliser la fonction postData() de CrudService
  public postData = (url: string, data: Object) => {
    this.CrudService.postData(url, data)
    .then( data => {
      // Réinitialiser le formulaire
      this.resetForm();
      
      console.log(`postData: ${url}`, data)
    })
    .catch( err => console.error(err) );
  }

  ngOnInit(): void {
    this.resetForm()
  }

}
