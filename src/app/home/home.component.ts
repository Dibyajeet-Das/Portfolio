import {Component,OnInit,AfterViewInit,ViewChild,ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { AudioControlComponent } from '../audio-control/audio-control.component';
import { LoadingService } from '../loading/loading.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TechStackComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  isMovies = true;

  displayText = '';
  fullText = 'Software Engineer | Creative Developer';
  index = 0;

  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  constructor(
    private loadingService: LoadingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.typeWriter();
  }

  ngAfterViewInit(): void {
    const video = this.bgVideo?.nativeElement;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(err =>
        console.warn('Autoplay blocked by browser:', err)
      );
    }
  }

  typeWriter(): void {
    if (this.index < this.fullText.length) {
      this.displayText += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeWriter(), 100);
    }
  }

  goToProjects(): void {
    this.loadingService.show();

    setTimeout(() => {
      this.loadingService.hide();
      this.router.navigate(['/projects']);
    }, 800);
  }

  goToHobbies(): void {
    this.loadingService.show();

    setTimeout(() => {
      this.loadingService.hide();
      this.router.navigate(['/hobbies']);
    }, 800);
  }

  scrollToHobbies(): void {
    const element = document.getElementById('hobbies-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  showMovies() {
    this.isMovies = true;
  }

  showAnime() {
    this.isMovies = false;
  }
}
