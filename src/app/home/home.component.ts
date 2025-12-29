import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
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
    @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
    ngAfterViewInit() {
    const video = this.bgVideo?.nativeElement;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const playPromise = video.play();

    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log('Background video autoplay started');
            })
            .catch((err: any) => {
                console.warn('Autoplay blocked by browser:', err);
            });
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
