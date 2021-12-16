import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class GeneralApiService {
    public updateHighlight: BehaviorSubject<any> = new BehaviorSubject(false);
    public bookmarkPara: BehaviorSubject<any> = new BehaviorSubject(false);
    public isBookmarkAdded: BehaviorSubject<any> = new BehaviorSubject(false);

    public selectedText = '';
    public selectedBox = {
        id: '',
        text: ''
    };
    public chapterDetails = {
        title: '',
        id: 0
    };
}