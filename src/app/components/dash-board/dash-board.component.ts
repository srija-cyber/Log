import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { LoginService } from '../../login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dash-board',
  imports: [NavBarComponent,FormsModule,CommonModule],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {
  userData:any;


  constructor(private logservice : LoginService){

    this.getUserDetails()

  }

  getUserDetails(){
    this.logservice.getUsers().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.userData=res;
      },
      error:(err:any)=>{
        console.error(err);
      }
    })
  }

}
