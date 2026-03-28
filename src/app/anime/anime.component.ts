import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anime',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent {
  animes = [
    { title: 'Anime 1', thumbnail: 'assets/images/anime1.jpg' },
    { title: 'Anime 2', thumbnail: 'assets/images/anime2.jpg' },
    { title: 'Anime 3', thumbnail: 'assets/images/anime3.jpg' }
  ];
}