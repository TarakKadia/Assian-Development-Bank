import { GeneralApiService } from 'src/app/core/general-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// import buttonJsonData from "src/app/constants/button.json";
import chapter1JsonData from "src/app/constants/chapter1.json";
// import chapter2CardJsonData from "../constants/chapter2-cards.json"
import chapter3CardJsonData from "src/app/constants/chapter3.json"
import chapter4CardJsonData from "src/app/constants/chapter4.json";
import centralWestAsia from "src/app/constants/central-west-asia.json";
import eastAsia from "src/app/constants/east-asia.json";
import pacific from "src/app/constants/pacific.json";
import southasia from "src/app/constants/south-asia.json";
import southeastasia from "src/app/constants/south-east-asia.json";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
    selector: 'app-menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

    data = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private generalApiService: GeneralApiService
    ) { }

    isShowMenu = false;
    isSocialMenu = false;
    isBookmarkMenu = false;
    bookmarks: any = [];
    highlitedBookmark:any;

    ngOnInit(): void {
        this.getBookmarks();
        this.generalApiService.isBookmarkAdded.subscribe((isAdded) => {
            if (isAdded) {
                this.getBookmarks();
            }
        })
     }

     getBookmarks() {
        let bookmarksData: any = localStorage.getItem('highlitedBookmark');
        if (bookmarksData) {
            bookmarksData = JSON.parse(bookmarksData);
            if (bookmarksData.length > 0) {
                this.bookmarks = [];
                bookmarksData.forEach(element => {
                    let isAdded = false;
                    this.bookmarks.forEach(item => {
                        if (element.chapterId === item.id) {
                            isAdded = true;
                            item.text.push(element)
                        }
                    });

                    if (!isAdded) {
                        this.bookmarks.push({ id: element.chapterId, title: element.chapterTitle, text: [element] });
                    }

                    if (this.bookmarks.length === 0) {
                        this.bookmarks.push({ id: element.chapterId, title: element.chapterTitle, text: [element] });
                    }
                });
            }

            // console.log('this.bookmarks', this.bookmarks);
        }
     }


    showMenu() {
        this.isShowMenu ? this.isShowMenu = false : this.isShowMenu = true;
    }

    openSocialMenu() {
        this.isSocialMenu ? this.isSocialMenu = false : this.isSocialMenu = true;
    }

    openBookmarkMenu() {
        this.isBookmarkMenu ? this.isBookmarkMenu = false : this.isBookmarkMenu = true;
    }

    goToPresidentsMessage() {
        this.showMenu();
        this.router.navigate(['/presidents-message']);
    }

    goToBoardOfDirectors() {
        this.showMenu();
        this.router.navigate(['/board-of-directors']);
    }

    goToFinancialHighlights() {
        this.showMenu();
        this.router.navigate(['/financial-highlights']);
    }

    goToReport(id: number) {
        // this.router.navigate(['/report']);



        if (id == 1) {
            // this.data=chapter1JsonData;
            this.router.navigate(['/report'], { queryParams: { id: 1 } });
            // console.log("this.data",this.data);

        } else if (id == 4) {
            this.router.navigate(['/report'], { queryParams: { id: 4 } });
        } else if (id == 3) {
            this.router.navigate(['/report'], { queryParams: { id: 3 } });
        } else if (id == 2) {
            this.router.navigate(['/region']);
        } else if (id == 10) {
            this.router.navigate(['/report'], { queryParams: { id: 10 } });
        } else if (id == 11) {
            this.router.navigate(['/report'], { queryParams: { id: 11 } });
        } else if (id == 12) {
            this.router.navigate(['/report'], { queryParams: { id: 12 } });
        } else if (id == 13) {
            this.router.navigate(['/report'], { queryParams: { id: 13 } });
        } else if (id == 14) {
            this.router.navigate(['/report'], { queryParams: { id: 14 } });
        }

        this.showMenu();
    }

    goToBookmark(){
        document.getElementById("targetGreen").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });
   }

    goToAppendixes() {
        this.showMenu();
        this.router.navigate(['/appendixes-content']);
    }

    goToBookmarkPage(url: any) {
        this.openBookmarkMenu();
        this.router.navigate([url.url], { queryParams: { id: url.chapterId, parId: url.paraID } });
    }


    removeBookmark(data:any){
        let bookmarkStorageArr: any = localStorage.getItem('highlitedBookmark');
        if (bookmarkStorageArr) {
            bookmarkStorageArr = JSON.parse(bookmarkStorageArr)
        } else {
            bookmarkStorageArr = [];
        }
        if (bookmarkStorageArr.length > 0) {
            let isAdded = true;
            bookmarkStorageArr.forEach((element: any, index: any) => {
                console.log("this.generalApiService.selectedId",this.generalApiService.selectedId);
                let tmpUrl = this.generalApiService.url.split('?').length > 1 ? this.generalApiService.url.split('?')[0] : this.generalApiService.url;
                
                
                console.log("paraIDparaIDparaID",data.paraID);
                if (element.url == tmpUrl && element.paraID === data.paraID) {
                    
                
                    bookmarkStorageArr.splice(index, 1);
                    return;

                } else {
                    isAdded = false;
                }
            });
        }
        localStorage.setItem('highlitedBookmark', JSON.stringify(bookmarkStorageArr));
        this.generalApiService.isBookmarkAdded.next(true);
        
    }
    
}

