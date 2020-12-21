import { Component, OnInit } from '@angular/core';

// Importer le service
import { CrudService } from "../../service/crud.service";

@Component({
  selector: 'app-readall-page',
  templateUrl: './readall-page.component.html'
})
export class ReadallPageComponent implements OnInit {

  // Déclaration
  public postCollection: Array<any>;

  constructor(
    private CrudService: CrudService
  ) { }

  // Création d'une fonction pour utiliser la fonction getData() de CrudService
  public getData = (url: string) => {
    this.CrudService.getData(url)
    .then( data => { 
      console.log(`getData: ${url}`, data) 
      // Mettre à jour la collection postCollection
      this.postCollection = data;

    })
    .catch( err => console.error(err) );
  }

  // Création d'une fonction pour utiliser la fonction deleteData() de CrudService
  public deleteData = (url: string) => {
    this.CrudService.deleteData(`${url}`)
    .then( data => console.log(`deleteData: ${url}`, data) )
    .catch( err => console.error(err) );
  }

  ngOnInit(): void {
    this.getData('https://jsonplaceholder.typicode.com/posts')
  }

}
