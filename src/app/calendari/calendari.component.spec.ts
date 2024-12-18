import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendariComponent } from './calendari.component';
import { provideHttpClient } from '@angular/common/http';

describe('CalendariComponent', () => {
  let component: CalendariComponent;
  let fixture: ComponentFixture<CalendariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendariComponent],
      providers: [
        provideHttpClient(), // Proveedor necesario para HttpClient
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CalendariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
