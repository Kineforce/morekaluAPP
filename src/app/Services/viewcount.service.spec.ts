/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViewCountService } from './viewcount.service';

describe('Service: Viewcount', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewCountService]
    });
  });

  it('should ...', inject([ViewCountService], (service: ViewCountService) => {
    expect(service).toBeTruthy();
  }));
});
