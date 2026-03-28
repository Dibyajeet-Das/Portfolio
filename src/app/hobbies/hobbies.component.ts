import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MoviesComponent } from '../movies/movies.component';
import { AnimeComponent } from '../anime/anime.component';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule, MoviesComponent, AnimeComponent],
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  isMovies = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  showMovies() {
    this.isMovies = true;
  }

  showAnime() {
    this.isMovies = false;
  }

  goBack() {
    this.router.navigate(['/']);
  }
}