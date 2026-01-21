import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    //adding the lazy loading here helps to load the projects component only when needed
    {
        path: 'projects',
        loadComponent: () =>
        import('./projects/projects.component').then(m => m.ProjectsComponent)
    },
    { path: '**', redirectTo: '' },
];
