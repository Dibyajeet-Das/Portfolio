import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { CommonModule } from '@angular/common';
import { LoadingService } from './loading/loading.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, LoadingComponent, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

    constructor(private loadingService: LoadingService) { }

    ngOnInit() {
        // Initial load simulation
        this.loadingService.show();
        setTimeout(() => {
            this.loadingService.hide();
        }, 3000);
    }
}
