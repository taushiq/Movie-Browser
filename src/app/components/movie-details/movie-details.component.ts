import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: any;

  constructor(private service: MoviesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .subscribe(
        params => {
          this.service.getMovieDetails(params['id']).subscribe(
            data => {this.movie = data;
              console.log(this.movie.Ratings.length);
              console.log(this.movie.Ratings.length == 1 ? 'hello' : 'N/A');}
          );
        }
      );

    

  }

  goBack(){
    window.history.back();
  }

}
