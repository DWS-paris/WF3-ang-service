import { Component, OnInit } from '@angular/core';

// Importer le service
import { CrudService } from "../../service/crud.service";

@Component({
  selector: 'app-delete-page',
  templateUrl: './delete-page.component.html',
  styles: [
  ]
})
export class DeletePageComponent implements OnInit {

  constructor(
    private CrudService: CrudService,
  ) { }

  // Création d'une fonction pour utiliser la fonction deleteData() de CrudService
  public deleteData = (url: string, id:any) => {
    this.CrudService.deleteData(`${url}/${id}`)
    .then( data => console.log(`deleteData: ${url}`, data) )
    .catch( err => console.error(err) );
  }

  ngOnInit(): void {
  }

}
