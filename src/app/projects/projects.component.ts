import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
}

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    projects: Project[] = [
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
