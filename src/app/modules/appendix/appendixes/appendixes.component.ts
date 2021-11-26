import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appendixes',
  templateUrl: './appendixes.component.html',
  styleUrls: ['./appendixes.component.css']
})
export class AppendixesComponent implements OnInit {

  loading:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loading=true;
    setTimeout(() => {
      this.loading = false;
  }, 1000);
  }
  onClick(){
    this.router.navigate(['/appendixes-content']);
  }

}
