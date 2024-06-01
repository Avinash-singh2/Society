import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboredComponent } from './dashbored/dashbored.component';
import { TableComponent } from './table/table.component';
import { authGuard } from './auth.guard';
import { LoansComponent } from './components/loans/loans.component';
import { UsersComponent } from './components/users/users.component';
import { AmountsComponent } from './components/amounts/amounts.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { TansactionsComponent } from './components/tansactions/tansactions.component';


export const routes: Routes = [
    {
        path:"",component:LoginComponent
    },
    {
        path:"register",component:RegisterComponent, canActivate:[authGuard]
    },
    {
        path:"dashboared",component:DashboredComponent
        // , canActivate:[authGuard]
    },
    {
        path:"table",component:TableComponent
    },
    {
        path:"transaction",component:TansactionsComponent
    },
    {
        path:"loan",component:LoansComponent
    }
    ,
    {
        path:"user",component:UsersComponent
    },
    {
        path:"amount",component:AmountsComponent
    },
    {
        path:"payments",component:PaymentsComponent
    }
];
