import { TestBed } from '@angular/core/testing';

import { SwapiUrlParserService } from './swapi-url-parser.service';

describe('SwapiUrlParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwapiUrlParserService = TestBed.get(SwapiUrlParserService);
    expect(service).toBeTruthy();
  });
});
