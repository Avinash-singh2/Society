import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import {DevExtremeModule} from "devextreme-angular"
import notify from "devextreme/ui/notify";
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ActivatedRoute,Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterOutlet,FormsModule,LoginComponent,NavbarComponent,RegisterComponent,HttpClientModule,DevExtremeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

   constructor(private route: ActivatedRoute,private cookieService: CookieService,private router: Router) {}

  ngOnInit() {
    // Use ActivatedRoute to get route parameters or query parameters
    this.route.params.subscribe(params => {
      console.log(params);
    });
  }
  title = 'Frontend';

  FormdataFun(val:any){
    console.log("Val: ",val);
  }

  logout() {
    console.log("I am ");
    // Perform logout logic
    this.cookieService.delete('token');
    // Redirect to login
    this.router.navigate(['/']);
  }
}

// import { Component } from '@angular/core';
// import { DxDataGridModule } from 'devextreme-angular';
// @Component({
//   selector: 'app-root',
//     standalone: true,
//     imports: [DxDataGridModule],
//     templateUrl: './app.component.html',
//     styleUrl: './app.component.css'




// })
// export class AppComponent {
//   data: any[] = [
//     { id: 1, name: 'John Doe', age: 30 },
//     { id: 2, name: 'Jane Doe', age: 25 },
//     // ... other data
//   ];

//   columns: any[] = [
//     { dataField: 'id', caption: 'ID' },
//     { dataField: 'name', caption: 'Name' },
//     { dataField: 'age', caption: 'Age' },
//     // ... other columns
//   ];
// }
