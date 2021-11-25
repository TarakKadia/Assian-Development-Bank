import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import chapter2CardJsonData from "../../../constants/chapter2-cards.json";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-chapter2',
  templateUrl: './chapter2.component.html',
  styleUrls: ['./chapter2.component.css']
})
export class Chapter2Component implements OnInit {

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
    console.log("chapter2CardJsonData : ",chapter2CardJsonData);
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  
    
  }

  goToRegions(id: number){
    this.router.navigate(['/report'], { queryParams: { id: id } });
  }

  //   this.route.queryParams
  //     .subscribe(params => {
  //       console.log(params.id);

  //       if (id == 1) {
  //         this.router.navigate(['/central-west-asia'], { queryParams: { id: id } });
  //       } else if (id == 2) {
  //         this.router.navigate(['/east-asia'], { queryParams: { id: id } });
  //       } else if(id == 3){
  //         this.router.navigate(['/pacific'], { queryParams: { id: id } });
  //       }else if(id == 4){
  //         this.router.navigate(['/south-asia'], { queryParams: { id: id } });
  //       }else {
  //         this.router.navigate(['/south-east-asia'], { queryParams: { id: id } });
  //       }
  //     }
  //   ); 
  // }

}
