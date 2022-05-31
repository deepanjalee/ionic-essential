import { TestBed } from '@angular/core/testing';

import { CanEnterTabPageGuard } from './can-enter-tab-page.guard';

describe('CanEnterTabPageGuard', () => {
  let guard: CanEnterTabPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanEnterTabPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
