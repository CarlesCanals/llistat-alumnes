import { TestBed } from '@angular/core/testing';
import { NotesComponent } from './notes.component';


describe('NotesComponent', () => {
  let component: NotesComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
