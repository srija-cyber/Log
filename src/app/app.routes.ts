import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { dashBoardAuthGuard } from './dash-board-auth.guard';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashBoardComponent, canActivate:[dashBoardAuthGuard]},
    {path:'navbar',component:NavBarComponent},
    {path:'',redirectTo:'login',pathMatch:'full'},
];
