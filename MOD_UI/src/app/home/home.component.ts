import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {

  }
  
  navToSearch()
  {
    this.router.navigateByUrl("/search-trainings");
  }

}
