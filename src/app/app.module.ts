import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* 
Gestion des requêtes HTTP
*/
  // Importer le module Angular pour gérer des requête HTTP
  import { HttpClientModule } from "@angular/common/http";

  // Import des services de l'application
  import { CrudService } from "./service/crud.service";
//

/* 
Gestion des routes
*/
  // Importer le module Angular pour la gestion des routes
  import { RouterModule } from "@angular/router";

  // Importer le modules pour configurer les routes
  import { AppRouterModule } from "./app.router";
//


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  // Intégrer tous les modules dans le tableau des imports
  imports: [
    BrowserModule,
    HttpClientModule,
    // Configuration du module du router
    RouterModule.forRoot( AppRouterModule, { onSameUrlNavigation: 'reload' } )
  ],
  // Intégrer tous les services dans le tableau des providers
  providers: [ CrudService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
