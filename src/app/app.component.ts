import { Component, OnInit } from '@angular/core';

// Importer les module pour la gestion du formulaire
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// Importer le service
import { CrudService } from "./service/crud.service";

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  // Déclaration
  public postCollection: Array<any>;
  public singlePost: any;
  public addFormData: FormGroup;
  public updateFormData: FormGroup;

  public newPost = {
    title: 'Titre du post de Julien',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maxime id labore, perspiciatis minima tempore libero exercitationem vitae at nihil pariatur minus suscipit perferendis laborum animi laboriosam rem natus omnis.',
    userId: 41
  };

  public updatedPost = {
    id: 1,
    title: 'Update Titre du post de Julien',
    body: 'Update Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maxime id labore, perspiciatis minima tempore libero exercitationem vitae at nihil pariatur minus suscipit perferendis laborum animi laboriosam rem natus omnis.',
    userId: 2
  };

  // Injecter le service dans le classe via le constructor
  constructor(
    private CrudService: CrudService,
    private FormBuilder: FormBuilder
  ){}

  // Créer une fonction pour initialiser le formulaire
  private resetForm = () => {
    this.addFormData = this.FormBuilder.group({
      title: [ null, Validators.required ],
      body: [ null, Validators.required ],
      userId: [ 41, Validators.required ]
    });

    this.updateFormData  = this.FormBuilder.group({
      title: [ this.singlePost.title, Validators.required ],
      body: [ this.singlePost.body, Validators.required ],
      userId: [ this.singlePost.userId, Validators.required ]
    });
  }

  // Création d'une fonction pour utiliser la fonction getData() de CrudService
  public getData = (url: string, type: string) => {
    this.CrudService.getData(url)
    .then( data => { 
      console.log(`getData: ${url}`, data) 
      // Vérifier le type
      if( type === 'list' ){
        this.postCollection = data;
      }
      else{
        this.singlePost = data;
        // Appeler le resetFrom pour charger les données du post 14
        this.resetForm();
      }

    })
    .catch( err => console.error(err) );
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

  // Création d'une fonction pour utiliser la fonction putData() de CrudService
  public putData = (url: string, data: Object) => {
    this.CrudService.putData(url, data)
    .then( data => {
      // Réinitialiser le formulaire
      this.resetForm();

      console.log(`putData: ${url}`, data)
    })
    .catch( err => console.error(err) );
  }

  // Création d'une fonction pour utiliser la fonction deleteData() de CrudService
  public deleteData = (url: string, id:any) => {
    this.CrudService.deleteData(`${url}/${id}`)
    .then( data => console.log(`deleteData: ${url}`, data) )
    .catch( err => console.error(err) );
  }

  ngOnInit(): void {
    /* // Initialiser le formulaire
    this.resetForm();

    // Exécuter la fonction getData() de app.component.ts
    this.getData('https://jsonplaceholder.typicode.com/posts', 'list');
    this.getData('https://jsonplaceholder.typicode.com/posts/14', 'single');

    // Exécuter la fonction postData() de app.component.ts
    this.postData('https://jsonplaceholder.typicode.com/posts', this.newPost);

    // Exécuter la fonction putData() de app.component.ts
    this.putData('https://jsonplaceholder.typicode.com/posts/1', this.updatedPost);
    this.putData('https://jsonplaceholder.typicode.com/posts/14', this.updatedPost);

    // Exécuter la fonction deleteData() de app.component.ts
    this.deleteData('https://jsonplaceholder.typicode.com/posts/', '14');
    this.deleteData('https://jsonplaceholder.typicode.com/posts/', '1'); */
  }
}
