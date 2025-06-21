import { Component } from '@angular/core';
import { NavbarComponent } from './navigation-bar/navigation-bar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './app.html',
})
export class AppComponent {}
