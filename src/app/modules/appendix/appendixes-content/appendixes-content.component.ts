import { Component, OnInit } from '@angular/core';

import appendixesContentJsonData from 'src/app/constants/appendixes-content.json'
import appendixesListJsonData from 'src/app/constants/appendixes-list.json'
import appendixesTable from 'src/app/constants/appendixes-table.json'

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
  value : Array<any> = [];
  title: any;
  subTitle: any;



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

    })

  }

  showImage(img: any) {
    // this.sourceImages = img;
    this.tableData = img;
    this.isShowImage ? this.isShowImage = false : this.isShowImage = true;
  }
  getTitle(){
    this.value.map(el => {
      if(el.type === 'title'){
        this.title = el.title ;
      }     
    });
  }

  getSubTitle(){
    this.value.map(el => {
      if(el.type === 'title'){
        this.subTitle = el.subTitle ;
      }     
    });
  }

}
