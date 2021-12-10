import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralApiService } from './core/general-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pwa';

  data:any;

  constructor(private aRouter: ActivatedRoute, private router: Router,  private generalApiService: GeneralApiService){
    // document.onselectionchange = () => {
    //     setTimeout(() => {
    //         this.setSelectedText();
    //     }, 1000);
    // };
  }
  
  ngOnInit(){
      this.selectedText();
  }

  getSelectionText() {
    let text = "";
    let selectionFunc = window.getSelection();
    const doc = document as any;
    if (selectionFunc) {
        text = selectionFunc.toString();
    } else if (doc.selection && doc.selection.type != "Control") {
        text = doc.selection.createRange().text;
    }
    return text;
}

setSelectedText() {
    const currentURLSeg = this.router.url.split('?')[0].split('/');
    const currentURL = currentURLSeg[currentURLSeg.length-1];
    const id = this.aRouter.snapshot.queryParams['id'];
    console.log('currentURL : ', currentURL);
    console.log('ID : ', id);
    let tempObj = {
        url: currentURL,
        id: id,
        data: [this.getSelectionText()]
    };
    let highlitedTextArray: Array<any> = JSON.parse(window.localStorage.getItem('highlitedText') || '[]');
    console.log(highlitedTextArray);
    let selectedDataItem = highlitedTextArray.filter((el: any) => el.id === id && el.url === currentURL);
    console.log("selectedDataItem : ", selectedDataItem);
    if (selectedDataItem.length) {
        selectedDataItem[0].data.push(this.getSelectionText());
        window.localStorage.setItem('highlitedText', JSON.stringify(highlitedTextArray));
    } else {
        console.log("highlitedTextArray : ", highlitedTextArray);
        console.log("tempObj : ", tempObj);
        highlitedTextArray.push(tempObj);
        console.log("highlitedTextArray : ", highlitedTextArray);
        window.localStorage.setItem('highlitedText', JSON.stringify(highlitedTextArray));
    }
}

selectedText(): void {
    let cookieData: any = localStorage.getItem('highLightedText');
    if (cookieData) {
        cookieData = JSON.parse(cookieData);
        if (cookieData) {
            let cookieData2 = cookieData[0].highLightedData;
            if (cookieData2.length > 0) {
                cookieData2.forEach((element: any, index: any) => {
                    if (element.text === this.generalApiService.selectedText) {
                        cookieData2.splice(index, 1);
                    }
                });
            }
        }
        localStorage.setItem('highLightedText', JSON.stringify(cookieData));
        this.generalApiService.updateHighlight.next(true);
    }
}



}