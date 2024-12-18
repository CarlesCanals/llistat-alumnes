import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LlistatComponent } from './llistat.component';
import { provideHttpClient } from '@angular/common/http';

describe('LlistatComponent', () => {
  let component: LlistatComponent;
  let fixture: ComponentFixture<LlistatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistatComponent], // Importa el componente standalone
      providers: [
        provideHttpClient(), // Proveedor necesario para HttpClient
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LlistatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
