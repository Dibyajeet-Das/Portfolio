import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies = [
    { title: 'Movie 1', thumbnail: 'assets/images/movie1.jpg' },
    { title: 'Movie 2', thumbnail: 'assets/images/movie2.jpg' },
    { title: 'Movie 3', thumbnail: 'assets/images/movie3.jpg' }
  ];
}