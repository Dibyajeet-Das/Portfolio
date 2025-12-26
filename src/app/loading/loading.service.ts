import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private _isLoading = new BehaviorSubject<boolean>(true);
    isLoading$ = this._isLoading.asObservable();

    constructor() { }

    show() {
        this._isLoading.next(true);
    }

    hide() {
        this._isLoading.next(false);
    }

    // Helper to show loading for a specific duration then hide
    showFor(durationMs: number) {
        this.show();
        setTimeout(() => {
            this.hide();
        }, durationMs);
    }
}
