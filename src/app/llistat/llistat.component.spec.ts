import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { LlistatComponent } from './llistat.component';

describe('LlistatComponent', () => {
  let component: LlistatComponent;
  let fixture: ComponentFixture<LlistatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistatComponent, HttpClientModule], // Afegeix HttpClientModule aquí
    }).compileComponents();

    fixture = TestBed.createComponent(LlistatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
