import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {



  age: number | undefined;
  isEligible: string = '';

  checkEligibility() {
    if (this.age && this.age >= 18) {
      this.isEligible = 'eligible';
    } else {
      this.isEligible = 'notEligible';
    }
  }
}
