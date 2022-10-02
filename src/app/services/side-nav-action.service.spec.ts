import { TestBed } from '@angular/core/testing';

import { SideNavActionService } from './side-nav-action.service';

describe('SideNavActionService', () => {
  let service: SideNavActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideNavActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
