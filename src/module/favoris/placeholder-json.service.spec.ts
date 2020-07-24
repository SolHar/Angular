import { TestBed } from '@angular/core/testing';

import { PlaceholderJsonService } from './placeholder-json.service';

describe('PlaceholderJsonService', () => {
  let service: PlaceholderJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceholderJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
