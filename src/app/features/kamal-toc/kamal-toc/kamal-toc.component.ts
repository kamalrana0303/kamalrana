import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'kamal-toc',
  templateUrl: './kamal-toc.component.html',
  styleUrls: ['./kamal-toc.component.scss'],
})
export class KamalTocComponent implements OnInit {
  @Input()
  items: any[] = [];
  @Input()
  selectedId?:string;
  baseurl: string = environment.baseUrl;
  
  constructor(private router: Router) {}

  ngOnInit(): void {}

  routeTo(ref: string) {
    this.router.navigate([ref]);
  }
  scrollTo(childId: string, parentId: string) {
    this.selectedId = childId;
    var parent = document.getElementById(parentId);
    var child = document.getElementById(childId);
    if (parent && child) {
      var parentRect = parent.getBoundingClientRect();
      // What can you see?
      var parentViewableArea = {
        height: parent.clientHeight,
        width: parent.clientWidth,
      };

      // Where is the child
      var childRect = child.getBoundingClientRect();
      // Is the child viewable?
      var isViewable =
        childRect.top >= parentRect.top &&
        childRect.top <= parentRect.top + parentViewableArea.height;
        parent.scrollTop = childRect.top + parent.scrollTop - parentRect.top;
      // if you can't see the child try to scroll parent
      if (!isViewable) {
        console.log( child)
        
      }
    }
  }
}
