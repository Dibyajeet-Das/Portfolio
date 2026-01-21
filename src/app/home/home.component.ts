import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { AudioControlComponent } from '../audio-control/audio-control.component';
import { LoadingService } from '../loading/loading.service';

interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
}

//below is the routing of different components map to the Single home component 
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, TechStackComponent, AudioControlComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {


    displayText = '';
    fullText = 'Software Engineer | Creative Developer';
    index = 0;
    currentView: 'home' | 'work' = 'home';
    isAtStart = true;
    isAtEnd = false;
    scrollPosition = 0;
    @ViewChild('projectsCarousel') projectsCarousel!: ElementRef<HTMLDivElement>;

    //implementing the loading service
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

    // onProjectsClick() {
    //     this.loadingService.show();
    //     setTimeout(() => {
    //         this.loadingService.hide();
    //         this.scrollTo('projects');
    //     }, 2000);
    // }
      onWorkClick() {
        this.loadingService.show();

        setTimeout(() => {
            this.loadingService.hide();
            this.currentView = 'work';
            // Update carousel button states after view changes
            setTimeout(() => this.updateCarouselButtons(), 100);
        }, 2000);
    }

    //OPTIONAL: BACK TO HOME
    backToHome() {
        this.loadingService.show();
        this.currentView = 'home';
        //instead of calling the video again we can restart it 
        //as the issue is coming it is being stucked on the browser
        setTimeout(() => {
            const video = this.bgVideo?.nativeElement;
            if (video) {
            video.pause();
            video.currentTime = 0;
            video.load();
            video.play().catch(() => {});
            }
        });
        // Pause video before transitioning
        // const video = this.bgVideo?.nativeElement;
        // if (video) {
        //     video.pause();
        // }
        
        // setTimeout(() => {
        //     this.currentView = 'home';
        //     this.loadingService.hide();
            
        //     // Resume video playback after view is ready
        //     if (video) {
        //         // Reset video to start
        //         video.currentTime = 0;
        //         const playPromise = video.play();
        //         if (playPromise !== undefined) {
        //             playPromise
        //                 .then(() => {
        //                     console.log('Video restarted successfully');
        //                 })
        //                 .catch((err: any) => {
        //                     console.warn('Could not restart video:', err);
        //                 });
        //         }
        //     }
        // }, 2000);
    }

    scrollTo(elementId: string) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    getProjects(): Project[] {
        return [
            {
                title: 'Health_And_Wellness_Booking_Portal',
                description: 'A sharp and fast e-commerce platform built with Angular and Node.js.',
                tech: ['Angular', 'Node.js', 'MongoDB'],
                link: '#'
            },
            {
                title: 'Dojo Scheduler',
                description: 'Management system for martial arts schools.',
                tech: ['Java', 'Spring Boot', 'PostgreSQL'],
                link: '#'
            },
            {
                title: 'Ronin Chat',
                description: 'Real-time messaging app for wandering developers.',
                tech: ['React', 'Firebase', 'Tailwind'],
                link: '#'
            }
        ];
    }

    scrollProjectsLeft() {
        const carousel = this.projectsCarousel?.nativeElement;
        if (carousel) {
            carousel.scrollBy({ left: -350, behavior: 'smooth' });
            setTimeout(() => this.updateCarouselButtons(), 300);
        }
    }

    scrollProjectsRight() {
        const carousel = this.projectsCarousel?.nativeElement;
        if (carousel) {
            carousel.scrollBy({ left: 350, behavior: 'smooth' });
            setTimeout(() => this.updateCarouselButtons(), 300);
        }
    }

    updateCarouselButtons() {
        const carousel = this.projectsCarousel?.nativeElement;
        if (carousel) {
            this.isAtStart = carousel.scrollLeft === 0;
            this.isAtEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10;
        }
    }

    
}
