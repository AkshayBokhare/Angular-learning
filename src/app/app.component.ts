import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponentComponent } from "./home-component/home-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-learning';
}
