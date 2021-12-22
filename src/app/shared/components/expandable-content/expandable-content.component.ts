import { GeneralApiService } from './../../../core/general-api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-expandable-content',
    templateUrl: './expandable-content.component.html',
    styleUrls: ['./expandable-content.component.css']
})
export class ExpandableContentComponent implements OnInit {

    constructor(private generalApiService: GeneralApiService) { }

    @Input() data: any;
    @Input() title: any;
    @Input() image: any;
    @Input() id: any;
    isExpand: boolean = false;

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        setTimeout(() => {

            jQuery(".expanded-box-hover").on("mouseover", (event) => {
                var target = jQuery(event.target);
                if (target.is('.expanded-box-hover')) {
                    jQuery('#hover-box').css('display', 'block');

                    const className = target.attr('class').split(' ');
                    const id = target.attr('id');

                    var class_names = '#' + id + '.' + className[0] + '.' + className[1] + '.' + className[2];
                    let value = jQuery(class_names).find('h3').text();
                    this.generalApiService.selectedBox.text = value;
                    this.generalApiService.selectedBox.id = id;

                    let data = jQuery(class_names).find('p.expanded-data').text();
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

            // jQuery(".expanded-box-hover").on("mouseleave", (event) => {
            //     jQuery('#hover-box').css('display', 'none');
            // });
            this.setBookmarkedHighLight();
        }, 2000);

    }

    readMore() {
        this.isExpand ? this.isExpand = false : this.isExpand = true
    }

    setBookmarkedHighLight() {
        let highLightedBookmarkData: any = localStorage.getItem('highLightedBox');
        if (highLightedBookmarkData) {
            highLightedBookmarkData = JSON.parse(highLightedBookmarkData);
            if (highLightedBookmarkData.length > 0) {
                highLightedBookmarkData.forEach(element => {
                    if (element.highLightedData.paraId === this.id) {
                        jQuery('#' + this.id).addClass('highlightBox');
                    }
                });
            } else {
                jQuery('#' + this.id).removeClass('highlightBox');
            }
        }
    }

}
