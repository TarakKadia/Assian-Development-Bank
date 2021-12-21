import { GeneralApiService } from 'src/app/core/general-api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-expandable-content-two',
    templateUrl: './expandable-content-two.component.html',
    styleUrls: ['./expandable-content-two.component.css']
})
export class ExpandableContentTwoComponent implements OnInit {

    @Input() title: any;
    @Input() data: any;
    @Input() image: any;
    @Input() id: any;
    
    isExpand: boolean = false;
    
    constructor(private generalApiService: GeneralApiService) { }

    ngOnInit(): void {

    }

    readMore() {
        this.isExpand ? this.isExpand = false : this.isExpand = true;
    }

    ngAfterViewInit(): void {
        setTimeout(() => {

            jQuery(".expanded-box-hover-two").on("mouseover", (event) => {
                var target = jQuery(event.target);
                if (target.is('.expanded-box-hover-two') || target.is('h3')) {
                    jQuery('#hover-box').css('display', 'block');

                    const className = target.attr('class').split(' ');
                    let id = ''; 
                    if (target.is('div')) {
                        id = target.attr('id');
                    } else {
                        id = target.parent().attr('id');
                    }

                    var class_names = '#' + id + '.' + className[0] + '.' + className[1] + '.' + className[2];
                    let value = jQuery(class_names).find('h3').text();
                    this.generalApiService.selectedBox.text = value;
                    this.generalApiService.selectedBox.id = id;

                    let data = jQuery(class_names).find('p').text();
                    if (data) {
                        this.generalApiService.selectedBox.data = data;
                    }

                    var position = jQuery(class_names).offset();
                    var width = jQuery(class_names).width() / 2;

                    jQuery('#hover-box').css('top', (position.top - 60) + 'px');
                    jQuery('#hover-box').css('left', (position.left + width - 60) + 'px');
                } else {
                    jQuery('#hover-box').css('display', 'none');
                }
            });
            // this.setBookmarkedHighLight();
        }, 2000);
    }
}
