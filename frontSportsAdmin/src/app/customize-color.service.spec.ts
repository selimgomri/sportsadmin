import { TestBed } from '@angular/core/testing';

import { CustomizeColorService } from './customize-color.service';

describe('CustomizeColorService', () => {
  let service: CustomizeColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomizeColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
