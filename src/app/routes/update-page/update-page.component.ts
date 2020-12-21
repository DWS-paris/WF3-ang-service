import { Component, OnInit } from '@angular/core';

// Importer les module pour la gestion du formulaire
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// Importer le service
import { CrudService } from "../../service/crud.service";

// Importer le module pour récupérer la valeur d'un paramètre
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styles: [
  ]
})
export class UpdatePageComponent implements OnInit {

  // Déclaration
  public updateFormData: FormGroup;

  constructor(
    private CrudService: CrudService,
    private FormBuilder: FormBuilder,
    private ActivatedRoute: ActivatedRoute
  ) { 
    // Capter la valeur du paramètre id
    this.ActivatedRoute.params.subscribe( params => {
      console.log(params)
      this.getData('https://jsonplaceholder.typicode.com/posts/' + params.id)
    });
  }

  // Créer une fonction pour initialiser le formulaire
  private resetForm = (singlePost) => {
    this.updateFormData  = this.FormBuilder.group({
      title: [ singlePost.title, Validators.required ],
      body: [ singlePost.body, Validators.required ],
      userId: [ singlePost.userId, Validators.required ]
    });
  }

  // Création d'une fonction pour utiliser la fonction getData() de CrudService
  public getData = (url: string) => {
    this.CrudService.getData(url)
    .then( data => { 
      console.log(`getData: ${url}`, data) 
      // Mettre à jour la singlePost
      this.resetForm(data)
    })
    .catch( err => console.error(err) );
  }

  // Création d'une fonction pour utiliser la fonction putData() de CrudService
  public putData = (url: string, data: Object) => {
    this.CrudService.putData(url, data)
    .then( data => {
      console.log(`putData: ${url}`, data)
    })
    .catch( err => console.error(err) );
  }

  ngOnInit(): void {
  }

}
