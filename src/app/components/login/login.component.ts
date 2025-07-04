import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService : LoginService, private router: Router) { }
  email:string=''
  password:string=''
  submit(){
    console.log(this.email);
    console.log(this.password);
    let reqBody={
        EmailId : this.email,
        Password : this.password
    }
    this.loginService.login(reqBody).subscribe({
      next: (res:any) => {
        console.log(res);
        localStorage.setItem('token',res.data.token)
        this.router.navigate(['dashboard'])
        alert(res.message)
      },
      error:(err)=> {
        console.error(err)
        alert(err.message)
      }
    })
  }

}
