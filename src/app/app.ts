import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AudioControlComponent } from './audio-control/audio-control.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AudioControlComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
