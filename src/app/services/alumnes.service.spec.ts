import { TestBed } from '@angular/core/testing';
import { AlumnesService } from './alumnes.service';
import { provideHttpClient } from '@angular/common/http';

describe('AlumnesService', () => {
  let service: AlumnesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AlumnesService,
        provideHttpClient(), // Proveedor necesario para HttpClient
      ],
    });
    service = TestBed.inject(AlumnesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
