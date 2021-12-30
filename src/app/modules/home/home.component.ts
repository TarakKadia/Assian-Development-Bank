import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import homeJsonData from "src/app/constants/home.json";
import smallCards from "src/app/constants/smallCards.json";
import counterCardsJsonData from "src/app/constants/counterCards.json";
import chapterCards from "src/app/constants/chapterCards.json"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeData: any;
  chapterCards : Array<any> = [];
  smallCards : Array<any>= [];
  counterCardsJsonData : Array<any>= [];
  loading: any;

  constructor(
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.homeData = homeJsonData;
    this.chapterCards = chapterCards;
    this.smallCards = smallCards;
    this.counterCardsJsonData = counterCardsJsonData;
    console.log("this.homeJsonData ",homeJsonData)

    setTimeout(() => {
      this.loading = false;
  }, 1000);

  }

  goToReport(id:number){
    // if(this.homeData){}
    if (id === 1 || id ==3 || id ==4 ) {
        this.router.navigate(['/report'], { queryParams: { id: id } });
    } else {
        this.router.navigate(['/region']);
    }
  }
  

  goToFinancialHighlights(){
    this.router.navigate(['/financial-highlights'])
  }

  goToSideMenu(id: number){
    this.route.queryParams
      .subscribe(params => {
        // console.log(params.id);
        if(id == 1){
          this.router.navigate(['/presidents-message']);
          // console.log("id = 1");
        } else if(id == 2){
          this.router.navigate(['/board-of-directors']);
          // console.log("id = 2");          
        } else if (id == 3){
          this.router.navigate(['/financial-highlights']);
        }
      }
    )
  }

  goToAppendixes(){
    this.router.navigate(['/appendixes-content']);
  }

  onSwipe(evt: any) {
      console.log("Tarak bhai greatest");
      
    const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left') : '';
    if (x === 'left') {
        window.history.back();

    } else {
        window.history.forward();
    }
}


}
