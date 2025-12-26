import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-audio-control',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './audio-control.component.html',
    styleUrl: './audio-control.component.css'
})
export class AudioControlComponent {
    @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
    isPlaying = false;
    toggleAudio() {
        const audio = this.audioPlayer.nativeElement;
        if (this.isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(e => console.log('Audio play failed:', e));
        }
        this.isPlaying = !this.isPlaying;
    }
}
