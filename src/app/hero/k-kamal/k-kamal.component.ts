import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'k-kamal',
  templateUrl: './k-kamal.component.html',
  styleUrls: ['./k-kamal.component.scss']
})
export class KKamalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  blogPage(){
    this.router.navigate(['','hero','blog'])
  }

}
