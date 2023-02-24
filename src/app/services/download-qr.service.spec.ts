import { TestBed } from '@angular/core/testing';

import { DownloadQrService } from './download-qr.service';

describe('DownloadQrService', () => {
  let service: DownloadQrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadQrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
