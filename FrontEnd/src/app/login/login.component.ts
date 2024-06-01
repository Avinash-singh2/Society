import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private http: HttpClient,private router: Router,private cookieService: CookieService) { }


  FormdataFun(val:any){
    console.log("Val: ",val);
    this.http.post("/api/login",val).subscribe((response:any)=>{
      console.log("response: ",response);
      if(response.status!=-1)
      {
        this.router.navigate(['/dashboared']);
        this.cookieService.set('token', response.token);
      }
    });
    // console.log("login httpcalled");
    // this.router.navigate(['/dashboared']);
    // Swal.fire({
    //   position: "center",
    //   icon: "success",
    //   title: "Logged in Successfully",
    //   showConfirmButton: false,
    //   timer: 1500
    // });


  }
  singupdatafun(val:any){
    console.log("Val: ",val);
    this.http.post("/api/register",val).subscribe((response)=>{
      console.log("response: ",response);
      
    });
    console.log("httpcalled");

  }
}
