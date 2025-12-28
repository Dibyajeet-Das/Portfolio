import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from '../projects/projects.component';
import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { AudioControlComponent } from '../audio-control/audio-control.component';
import { LoadingService } from '../loading/loading.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, ProjectsComponent, TechStackComponent, AudioControlComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
    displayText = '';
    fullText = 'Software Engineer | Creative Developer';
    index = 0;

    constructor(private loadingService: LoadingService) { }

    ngOnInit() {
        this.typeWriter();
    }

    ngAfterViewInit() {
        const video = document.querySelector('.video-bg') as HTMLVideoElement | null;
        if (video) {
            video.addEventListener('error', () => {
                console.error('Video element error', video.error);
            });
            video.addEventListener('loadedmetadata', () => {
                console.log('Video metadata loaded', video.videoWidth, video.videoHeight);
            });
            video.addEventListener('canplay', () => console.log('Video can play'));
        } else {
            console.warn('Video element .video-bg not found in DOM');
        }
    }

    typeWriter() {
        if (this.index < this.fullText.length) {
            this.displayText += this.fullText.charAt(this.index);
            this.index++;
            setTimeout(() => this.typeWriter(), 100);
        }
    }

    onProjectsClick() {
        this.loadingService.show();
        setTimeout(() => {
            this.loadingService.hide();
            this.scrollTo('projects');
        }, 2000);
    }

    scrollTo(elementId: string) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
