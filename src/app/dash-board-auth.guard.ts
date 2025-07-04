import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const dashBoardAuthGuard: CanActivateFn = (route, state) => {
  const rout = inject(Router)
  const token = localStorage.getItem('token')

  if(token){
    return true
  }else {
    rout.navigate(['login'])
    return false
  }
};
