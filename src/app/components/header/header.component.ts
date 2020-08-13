import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  query: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(event){
    event.preventDefault();
    this.router.navigate(['/movies'], { queryParams: { q : this.query}});

  }

}
