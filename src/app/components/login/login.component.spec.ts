import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginService } from '../../login.service';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let logServiceSpyObj !: jasmine.SpyObj<LoginService>;
  let routerSpyObj !: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    let loginSpy = jasmine.createSpyObj('LoginService', ['login']);
    let routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      imports: [LoginComponent,FormsModule],
      providers: [{
        provide:LoginService,useValue : loginSpy
      },
      {
        provide:Router, useValue : routerSpy
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    logServiceSpyObj = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>,
    routerSpyObj = TestBed.inject(Router) as jasmine.SpyObj<Router>
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Bind Form Values', () => {
    component.email='john123@gmail.com';
    component.password='qwerty';
    expect(component.email).toBe('john123@gmail.com');
    expect(component.password).toBe('qwerty');
  });
  it('Log in Success',()=>{
    const mockLogin:any = 
      {
      "message": "Login Success",
      "result": true,
      "data": {
        "token": "fake token"
      }
    };
    logServiceSpyObj.login.and.returnValue(of(mockLogin));
    const logObj= {
      EmailId:component.email,
      Password:component.password
    }

    component.submit();

    expect(logServiceSpyObj.login).toHaveBeenCalledWith(logObj);
    expect(routerSpyObj.navigate).toHaveBeenCalledWith(['dashboard'])
    
  })
});
