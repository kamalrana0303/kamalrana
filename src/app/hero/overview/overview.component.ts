import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  items=[
    {
      parent: 'overview-article',
      ref: 'overview-work',
      title: 'Work at'
    },
    {
      parent:'overview-article',
      ref: 'overview-studied',
      title: 'Studied from'
    },
    
  ]
  selectedId?:string;
  observer= new IntersectionObserver((entries)=>{
    entries.forEach(entry=> {
      if(entry.isIntersecting === true){
        this.selectedId= entries[0].target.id;  
      }
    })

  }, {threshold:[0.1]})

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.items.forEach(item=>{
      this.observer.observe(<any>document.getElementById(item.ref))
    })
    
  }
  selectedItem(item:any){
    this.router.navigate(item.ref)
  }

}
