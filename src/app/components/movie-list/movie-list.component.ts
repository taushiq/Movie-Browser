import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

const swal = window['swal'];

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Array<any>;

  constructor(private router: Router, private service: MoviesService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(
      qparams => {
        this.service.searchMovies(qparams['q'])
      .subscribe(data => {
        console.log(data);
        if(data.Response === "False"){


          swal ( "Oops" ,  "Sorry! Could not find any movie with keyword '" + qparams['q'] + "'" ,  "error" ,)
          .then(result => {
            if (result == true) {
              this.router.navigate(['home']);  
            }
      
          }
      
          )






        }else{
          this.movies = data.Search;
        }

      } 
        
      ); 
      }
    );
    
    
  }

}
