import { Component, OnInit } from '@angular/core';

import appendixesContentJsonData from 'src/app/constants/appendixes-content.json'
import appendixesListJsonData from 'src/app/constants/appendixes-list.json'
import appendixesImagesJsonData from 'src/app/constants/appendixes-images.json'

@Component({
  selector: 'app-appendixes-content',
  templateUrl: './appendixes-content.component.html',
  styleUrls: ['./appendixes-content.component.css']
})
export class AppendixesContentComponent implements OnInit {
  
  scrollPosition = 0;
  isShowImage = false;
  sourceImages = [];

  tableData: any;

  data :Array<any> = [];
  list :Array<any>= [];
  id :Array<any>= [];
  images :Array<any>= [];
  loading:any;

  constructor() { }

  ngOnInit(): void {
    this.loading=true;
    setTimeout(() => {
      this.loading = false;
  }, 1000);
    this.data = appendixesContentJsonData;
    this.list = appendixesListJsonData;
    this.list.map(el => {
      this.id = el.id;
      // console.log("\n id : ",this.id);

    })

    this.showImage(this.list[0]?.tableData);
  }

  showImage(img: any) {
    // this.sourceImages = img;
    this.tableData = img;
    console.log('this.tableData', this.tableData);
    this.isShowImage ? this.isShowImage = false : this.isShowImage = true;
  }


}
