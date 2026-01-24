import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
}

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule,RouterModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    projects: Project[] = [
        {
            title: 'Health & Wellness Booking Portal',
            description: 'A service booking platform that allows users to discover healthcare services, manage appointments, and handle provider availability through a structured backend-driven system.',
            tech: ['JavaScript', 'Spring Boot', 'MySQL'],
            link: 'https://github.com/Dibyajeet-Das/Health_And_Wellness_Booking_Portal'
        },
        {
            title: 'Food Delight – AI Recipe Generator',
            description: 'A creative AI-based application that transforms dish names into complete recipes and visuals, focusing on user interaction and generative AI outputs.',
            tech: ['Python', 'Django', 'JavaScript', 'GPT-2', 'Stable Diffusion'],
            link: 'https://github.com/Dibyajeet-Das/Food_Recipie_Generator'
        },
        {
            title: 'ChatRoom App',
            description: 'Real-time messaging app for wandering developers.',
            tech: ['WebSockets', 'SpringBoot', 'JavaScript'],
            link: 'https://github.com/Dibyajeet-Das/ChatRoom_App'
        }
    ];
    loadingService: any;
    router: any;

    // goBackHome(): void {
    //     this.router.navigate(['/']);
    // }
}
