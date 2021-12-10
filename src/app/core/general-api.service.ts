import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class GeneralApiService {
    public updateHighlight: BehaviorSubject<any> = new BehaviorSubject(false);

    public selectedText = '';
}