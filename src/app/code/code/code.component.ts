import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'c-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  constructor(private router:Router, private route:ActivatedRoute) {}
  firstChildFragment?:string;
  ngOnInit(): void {
    this.route.firstChild?.url.subscribe(x=>{
      this.firstChildFragment = x[0].path;
    })
  }

  goTo(path:string){
    this.route.firstChild?.url.subscribe(x=>{
    
      this.router.navigate(['ui',x[0].path, path])
    }
    )
   
  }
}
