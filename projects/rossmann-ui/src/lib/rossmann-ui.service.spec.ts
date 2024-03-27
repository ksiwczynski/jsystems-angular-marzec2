import { TestBed } from '@angular/core/testing';

import { RossmannUiService } from './rossmann-ui.service';

describe('RossmannUiService', () => {
  let service: RossmannUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RossmannUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
