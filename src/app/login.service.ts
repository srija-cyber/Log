import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl:string='/api/User/Login'
  getUser='/api/User/GetAllUsers'

  constructor(private http : HttpClient) { 

  }

  login(body:any){
    return this.http.post(this.loginUrl,body)
  }

  getUsers():any{
    // let token = localStorage.getItem('token');
    // const header = new HttpHeaders({
    //   Authorization: 'Bearer ' + token
    // });
    return this.http.get(this.getUser) //{ headers: header }
  }
}
