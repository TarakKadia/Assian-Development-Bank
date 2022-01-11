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

    constructor(
        public generalApiService: GeneralApiService
    ) { }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        // setTimeout(() => {
        //     jQuery(".content").on("mouseover", (event) => {
        //         var target = jQuery(event.target);
        //         if (target.is('img.topimg')) {
        //             jQuery('#hover-image').css('display', 'block');

        //             const className = target.parent().attr('class').split(' ');
        //             const id = target.parent().attr('id');
        //             var class_names = '#' + id + '.' + className[0];

        //             // let value = jQuery(class_names).find('h3').text();
        //             // this.generalApiService.selectedBox.text = value;
        //             // this.generalApiService.selectedBox.id = id;

        //             // let data = jQuery(class_names).find('p.box-data').text();
        //             // if (data) {
        //             //     this.generalApiService.selectedBox.data = data;
        //             // }

        //             var position = jQuery(class_names).offset();
        //             var width = jQuery(class_names).width() / 2;

        //             jQuery('#hover-image').css('top', (position.top - 60) + 'px');
        //             jQuery('#hover-image').css('left', (position.left + width - 60) + 'px');
        //         } else {
        //             jQuery('#hover-image').css('display', 'none');
        //         }
        //     });
        // }, 2000);
    }

}
