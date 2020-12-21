import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importer le module pour gérer des formualires
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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
import { ReadallPageComponent } from './routes/readall-page/readall-page.component';
import { CreatePageComponent } from './routes/create-page/create-page.component';
import { ReadonePageComponent } from './routes/readone-page/readone-page.component';
import { UpdatePageComponent } from './routes/update-page/update-page.component';
import { DeletePageComponent } from './routes/delete-page/delete-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadallPageComponent,
    CreatePageComponent,
    ReadonePageComponent,
    UpdatePageComponent,
    DeletePageComponent
  ],
  // Intégrer tous les modules dans le tableau des imports
  imports: [
    BrowserModule,
    HttpClientModule,
    // Configuration du module du router
    RouterModule.forRoot( AppRouterModule, { onSameUrlNavigation: 'reload' } ),
    FormsModule, ReactiveFormsModule
  ],
  // Intégrer tous les services dans le tableau des providers
  providers: [ CrudService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
