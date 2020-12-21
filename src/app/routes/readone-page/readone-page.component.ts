import { Component, OnInit } from '@angular/core';

// Importer le module pour récupérer la valeur d'un paramètre
import { ActivatedRoute } from "@angular/router";

// Importer le service
import { CrudService } from "../../service/crud.service";

@Component({
  selector: 'app-readone-page',
  templateUrl: './readone-page.component.html',
  styles: [
  ]
})
export class ReadonePageComponent implements OnInit {
  // Déclaration
  public singlePost: any;

  constructor(
    private CrudService: CrudService,
    private ActivatedRoute: ActivatedRoute
  ) { 
    // Capter la valeur du paramètre id
    this.ActivatedRoute.params.subscribe( params => {
      console.log(params)
      this.getData('https://jsonplaceholder.typicode.com/posts/' + params.id)
    });
  }

  // Création d'une fonction pour utiliser la fonction getData() de CrudService
  public getData = (url: string) => {
    this.CrudService.getData(url)
    .then( data => { 
      console.log(`getData: ${url}`, data) 
      // Mettre à jour la singlePost
      this.singlePost = data;

    })
    .catch( err => console.error(err) );
  }

  ngOnInit(): void {
  }

}
