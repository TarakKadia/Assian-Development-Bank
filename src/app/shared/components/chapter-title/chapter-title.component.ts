import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-title',
  templateUrl: './chapter-title.component.html',
  styleUrls: ['./chapter-title.component.css']
})
export class ChapterTitleComponent implements OnInit {

  constructor() { }
@Input() chapterTitle:any;
@Input() heading:any;
@Input() data:any;
@Input() tag:any;
  ngOnInit(): void {
    // console.log(this.chapterTitle)
  }

}
