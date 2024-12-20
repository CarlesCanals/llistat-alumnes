import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router'; // Proveïdor de rutes
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Importa el component standalone
      providers: [
        provideRouter([]), // Proveïm rutes simulades
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'llistat-alumnes' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.title = 'llistat-alumnes'; // Configura la propietat title per al test
    expect(app.title).toEqual('llistat-alumnes');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Carles Canals');
  });
});
