import { TestBed } from '@angular/core/testing';

import { ProjectExplorerService } from './project-explorer.service';

describe('ProjectExplorerService', () => {
  let service: ProjectExplorerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectExplorerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
