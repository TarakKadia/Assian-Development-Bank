import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import chapter2CardJsonData from "../../../constants/chapter2-cards.json";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

    chapter2Data : Array<any>= [];
    loading: any;
  
    constructor(
      private spinner: NgxSpinnerService,
      private router:Router,
      private route: ActivatedRoute
      ) { }
  
    ngOnInit(): void {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
    }, 1000);
      this.chapter2Data = chapter2CardJsonData;
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    
      
    }
  
    goToRegions(id: number){
      this.router.navigate(['/report'], { queryParams: { id: id } });
    }
  

}
