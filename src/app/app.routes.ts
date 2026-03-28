import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { MoviesComponent } from './movies/movies.component';
import { AnimeComponent } from './anime/anime.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    //adding the lazy loading here helps to load the projects component only when needed
    {
        path: 'projects',
        loadComponent: () =>
        import('./projects/projects.component').then(m => m.ProjectsComponent)
    },
    {
        path: 'movies',
        loadComponent: () =>
        import('./movies/movies.component').then(m => m.MoviesComponent)
    },
    {
        path: 'anime',
        loadComponent: () =>
        import('./anime/anime.component').then(m => m.AnimeComponent)
    },
    {
        path: 'hobbies',
        loadComponent: () =>
        import('./hobbies/hobbies.component').then(m => m.HobbiesComponent)
    },
    { path: '**', redirectTo: '' },
];
