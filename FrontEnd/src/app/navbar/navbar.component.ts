import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router,private cookieService: CookieService) { }

  logout() {
    console.log("I am ");
    // Perform logout logic
    this.cookieService.delete('token');
    // Redirect to login
    this.router.navigate(['/']);
  }

  GetUsers(){
    
  }

  // GetUsers(){
  //   this.http.post("/api/login",val).subscribe((response:any)=>{
  //     if(response)
  //     {
  //       this.router.navigate(['/dashboared']);
  //       this.cookieService.set('token', response.token);
  //     }
  //   });
  //   console.log("Get Users: ");
  // }
}
