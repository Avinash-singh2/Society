import { Component, OnInit, OnDestroy } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-dashbored',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashbored.component.html',
  styleUrl: './dashbored.component.css'
})
export class DashboredComponent implements OnInit{
  // constructor(private route: ActivatedRoute) {}


  currentUrl: string='';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
      console.log('Current URL:', this.currentUrl);
    });
  }

 

}
