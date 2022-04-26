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
    @Input() tag: any;

    isExpand: boolean = false;

    constructor(private generalApiService: GeneralApiService) { }

    ngOnInit(): void {
        this.generalApiService.updateHighlight.subscribe((isHighlight) => {
            if (isHighlight) {
                this.setBookmarkedHighLight() 
            }
        });

    }

    readMore() {
        this.isExpand ? this.isExpand = false : this.isExpand = true;
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
    
    ngAfterViewInit(): void {
        setTimeout(() => {
            jQuery(".content").on("mouseover", (event) => {
                var target = jQuery(event.target);
                if (target.is('.expanded-box-hover-two') || target.is('h3')) {
                    jQuery('#hover-expanded-two').css('display', 'block');

                    const className = target.attr('class')?.split(' ');
                    let id = '';
                    if (target.is('div')) {
                        id = target.attr('id');
                    } else {
                        id = target.parent().attr('id');
                    }

                    if (className) {

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

                        jQuery('#hover-expanded-two').css('top', (position.top - 60) + 'px');
                        jQuery('#hover-expanded-two').css('left', (position.left + width - 60) + 'px');
                    }

                } else {
                    jQuery('#hover-expanded-two').css('display', 'none');
                }
            });
        }, 2000);
    }
}
