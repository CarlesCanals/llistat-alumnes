import { TestBed } from '@angular/core/testing';
import { NotesComponent } from './notes.component';
import { HttpClientModule } from '@angular/common/http';

describe('NotesComponent', () => {
  let component: NotesComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesComponent, HttpClientModule], // Importa NotesComponent i HttpClientModule
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
