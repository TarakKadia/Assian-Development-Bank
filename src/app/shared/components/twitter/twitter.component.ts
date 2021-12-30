import { GeneralApiService } from './../../../core/general-api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-twitter',
    templateUrl: './twitter.component.html',
    styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

    @Input() data: any;
    @Input() id: any;

    constructor(
        private generalApiService: GeneralApiService
    ) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            jQuery(".content").on("mouseover", (event) => {
                var target = jQuery(event.target);
                if (target.is('.tweet-hover')) {
                    jQuery('#hover-twitter').css('display', 'block');

                    const className = jQuery('.tweet').attr('class').split(' ');

                    let id = '';
                    if (target.is('div')) {
                        id = target.attr('id');
                    } else if (target.is('p')) {
                        id = target.parent().attr('id');
                    } else if (target.is('b')) {
                        id = target.parent().parent().attr('id');
                    } else {
                        id = target.parent().parent().parent().attr('id');
                    }
                    
                    var class_names = '#' + id + '.' + className[0] + '.' + className[1];

                    let value = jQuery(class_names).find('a').text();
                    this.generalApiService.selectedBox.text = value;
                    this.generalApiService.selectedBox.id = id;

                    let data = jQuery(class_names).find('a').text();
                    if (data) {
                        this.generalApiService.selectedBox.data = data;
                    }

                    var position = jQuery(class_names).offset();
                    var width = jQuery(class_names).width() / 2;

                    jQuery('#hover-twitter').css('top', (position.top - 60) + 'px');
                    jQuery('#hover-twitter').css('left', (position.left + width - 60) + 'px');
                } else {
                    jQuery('#hover-twitter').css('display', 'none');
                }
            });
            // this.setBookmarkedHighLight();
        }, 2000);

    }

}
