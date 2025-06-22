import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home';
import { AuthService } from '@auth0/auth0-angular';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    // Mock AuthService
    const mockAuthService = {
      user$: of({
        name: 'Test User',
        html_url: 'https://github.com/test-user'
      })
    };

    // Mock Router
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display user name and GitHub URL', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Test User');
    expect(compiled.textContent).toContain('https://github.com/test-user');
  });

  it('should navigate to /weather with city query param', () => {
    component.city = 'Manila';
    component.displayWeather();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/weather'], {
      queryParams: { city: 'Manila' }
    });
  });
});
