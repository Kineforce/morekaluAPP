/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReviewDataService } from './review_data';

describe('Service: Data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewDataService]
    });
  });

  it('should ...', inject([ReviewDataService], (service: ReviewDataService) => {
    expect(service).toBeTruthy();
  }));
});
