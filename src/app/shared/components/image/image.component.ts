import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { GeneralApiService } from 'src/app/core/general-api.service';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit, AfterViewInit {

    @Input() image: any;
    @Input() tag: any;
    @Input() data: any;
    @Input() id: any;
    @Input() heading:any;
    @Input() text:any;
    @Input() titleTag:any;
    @Input() class:any;
    @Input() titleTagClass:any;


    constructor(
        public generalApiService: GeneralApiService
    ) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
       
    }

}
