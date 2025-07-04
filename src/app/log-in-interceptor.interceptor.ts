import { HttpInterceptorFn } from '@angular/common/http';

export const logInInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Interceptor called!',req);
 
  const token=localStorage.getItem('token')
  const newHeader = req.clone({
    setHeaders: {
      Authorization: 'Bearer '+token
    }
  })
  return next(newHeader);
};
