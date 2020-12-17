import { Component, OnInit } from '@angular/core';

// Importer le service
import { CrudService } from "./service/crud.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  // Déclaration
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
    private CrudService: CrudService
  ){}

  // Création d'une fonction pour utiliser la fonction getData() de CrudService
  public getData = (url: string) => {
    this.CrudService.getData(url)
    .then( data => console.log(`getData: ${url}`, data) )
    .catch( err => console.error(err) );
  }

  // Création d'une fonction pour utiliser la fonction postData() de CrudService
  public postData = (url: string, data: Object) => {
    this.CrudService.postData(url, data)
    .then( data => console.log(`postData: ${url}`, data) )
    .catch( err => console.error(err) );
  }

  // Création d'une fonction pour utiliser la fonction putData() de CrudService
  public putData = (url: string, data: Object) => {
    this.CrudService.putData(url, data)
    .then( data => console.log(`putData: ${url}`, data) )
    .catch( err => console.error(err) );
  }

  // Création d'une fonction pour utiliser la fonction deleteData() de CrudService
  public deleteData = (url: string, id:any) => {
    this.CrudService.deleteData(`${url}/${id}`)
    .then( data => console.log(`deleteData: ${url}`, data) )
    .catch( err => console.error(err) );
  }

  ngOnInit(): void {
    // Exécuter la fonction getData() de app.component.ts
    this.getData('https://jsonplaceholder.typicode.com/posts');
    this.getData('https://jsonplaceholder.typicode.com/posts/14');

    // Exécuter la fonction postData() de app.component.ts
    this.postData('https://jsonplaceholder.typicode.com/posts', this.newPost);

    // Exécuter la fonction putData() de app.component.ts
    this.putData('https://jsonplaceholder.typicode.com/posts/1', this.updatedPost);
    this.putData('https://jsonplaceholder.typicode.com/posts/14', this.updatedPost);

    // Exécuter la fonction deleteData() de app.component.ts
    this.deleteData('https://jsonplaceholder.typicode.com/posts/', '14');
    this.deleteData('https://jsonplaceholder.typicode.com/posts/', '1');
  }
}
