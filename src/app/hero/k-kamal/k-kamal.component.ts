import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'k-kamal',
  templateUrl: './k-kamal.component.html',
  styleUrls: ['./k-kamal.component.scss']
})
export class KKamalComponent implements OnInit {
  baseurl: string = environment.baseUrl;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  blogPage(){
    this.router.navigate(['','hero','blog'])
  }

}
