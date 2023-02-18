import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies:any[]= [
  
    { 
      name: 'avatar',
      path: '../../assets/movies/avatar.jpeg',
      zPath: '../../assets/movies/images-zoom/avatar.jpeg'
    },
    { 
      name: 'batman',
      path: '../../assets/movies/batman.jpeg',
      zPath: '../../assets/movies/images-zoom/batman.jpeg'
    },
    { 
      name: 'fellowship of the ring',
      path: '../../assets/movies/fellowship_of_the_ring.jpeg',
      zPath: '../../assets/movies/images-zoom/fellowship_of_the_ring.jpeg'
    },
    { 
      name: 'forest gump',
      path: '../../assets/movies/forest_gump.jpeg',
      zPath: './../assets/movies/images-zoom/forest_gump.jpeg'
    },
    { 
      name: 'inception',
      path: '../../assets/movies/inception.jpeg',
      zPath: './../assets/movies/images-zoom/inception.jpeg'
    },
    { 
      name: 'matrix',
      path: '../../assets/movies/matrix.jpeg',
      zPath: './../assets/movies/images-zoom/matrix.jpeg'
    },
    { 
      name: 'top gun',
      path: '../../assets/movies/maverick.jpeg',
      zPath: './../assets/movies/images-zoom/maverick.jpeg'
    },
    { 
      name: 'return of the king',
      path: '../../assets/movies/return_of_the_king.jpeg',
      zPath: './../assets/movies/images-zoom/return_of_the_king.jpeg'
    },
    { 
      name: 'titanic',
      path: '../../assets/movies/titanic.jpeg',
      zPath: './../assets/movies/images-zoom/titanic.jpeg'
    },
    { 
      name: 'wakanda forever',
      path: '../../assets/movies/wakanda.jpeg',
      zPath: './../assets/movies/images-zoom/wakanda_forever.jpeg'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
