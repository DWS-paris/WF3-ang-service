/* 
Un service en Angular est prévu pour manipuler une API
- Gestion des requêtes HTTP (POST/GET/PUT/DELETE)
- Mise en place d'un CRUD
*/

// Compore du module Injectable pour configurer le service
import { Injectable } from '@angular/core';

// Importer le module HttpClient pour gérer des requêtes HTTP (POST, GET, PUT ou DELETE)
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // Pour utiliser un module il faut l'injecter dans la classe grâce au construtor
  constructor(
    private HttpClient: HttpClient
  ) { }

  /* 
  CRUD : "Create" => Ajouter du contenu via une requpete HTTP POST
  */
    public postData = (url: string, data: Object) => {
      // Retourner une requête HTTP avec la méthode post() de HttpClient et retourner une promesse
      return this.HttpClient.post(url, data).toPromise().then( data => data ).catch( err => err );
    }
  //

  /* 
  CRUD : "Read" => Lire du contenu via une requpete HTTP GET
  */
    public getData = (url: string) => {
      // Retourner une requête HTTP avec la méthode get() de HttpClient et retourner une promesse
      return this.HttpClient.get(url).toPromise().then( data => data ).catch( err => err );
    }
  //

  /* 
  CRUD : "Update" => Mettre à jour du contenu via une requpete HTTP PUT
  */
    public putData = (url: string, data: Object) => {
      // Retourner une requête HTTP avec la méthode put() de HttpClient et retourner une promesse
      return this.HttpClient.put(url, data).toPromise().then( data => data ).catch( err => err );
    }
  //

  /* 
  CRUD : "Delete" => Supprimer du contenu via une requpete HTTP DELETE
  */
    public deleteData = (url: string) => {
      // Retourner une requête HTTP avec la méthode delete() de HttpClient et retourner une promesse
      return this.HttpClient.delete(url).toPromise().then( data => data ).catch( err => err );
    }
  //
}