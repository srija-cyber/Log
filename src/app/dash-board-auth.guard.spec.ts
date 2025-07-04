import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { dashBoardAuthGuard } from './dash-board-auth.guard';

describe('dashBoardAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => dashBoardAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
