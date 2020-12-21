// Importer le module pour configurer les routes
import { Routes } from "@angular/router";

// Imports des composants des routes
import { ReadallPageComponent } from './routes/readall-page/readall-page.component';
import { CreatePageComponent } from './routes/create-page/create-page.component';
import { ReadonePageComponent } from './routes/readone-page/readone-page.component';
import { UpdatePageComponent } from './routes/update-page/update-page.component';
import { DeletePageComponent } from './routes/delete-page/delete-page.component';

export const AppRouterModule: Routes = [ 
    {
        path: '',
        component: ReadallPageComponent
    },
    {
        path: 'create',
        component: CreatePageComponent
    },
    {
        path: 'readone/:id',
        component: ReadonePageComponent
    },
    {
        path: 'update/:id',
        component: UpdatePageComponent
    },
    {
        path: 'delete',
        component: DeletePageComponent
    }
];