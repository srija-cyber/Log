import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
   
  add(a: number, b: number){
    return a+b
  }
  subtract(a:number, b:number){
    return a-b
  }
  multiply(a:number,b:number){
    return a*b
  }
  divide(a:number,b:number){
    return a/b
  }
}
