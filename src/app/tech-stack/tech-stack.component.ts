import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tech-stack',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tech-stack.component.html',
    styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {
    skills = [
        { name: 'Java', level: 'Master' },
        { name: 'Angular', level: 'Expert' },
        { name: 'C', level: 'Advanced' },
        { name: 'C++', level: 'Advanced' },
        { name: 'SQL', level: 'Expert' },
        { name: 'PostgreSQL', level: 'Expert' }
    ];
}
