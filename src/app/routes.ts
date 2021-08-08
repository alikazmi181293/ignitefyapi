import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
export const appRoutes: Routes=[
    { 
        path:'home',component:HomeComponent
    },
    { 
        path:'login',component:LoginComponent
    },
    { 
        path:'dashboard',component:DashboardComponent
    },
    {
        path:'',redirectTo:'/login',pathMatch:'full'
    }
]