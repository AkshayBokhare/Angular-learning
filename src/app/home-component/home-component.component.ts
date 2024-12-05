import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

  StaticInput:string = "Satic two way binding";
  DynamicInput: string = "";

  inputValue: string = "";
  dynamicValue:string ="";


  show(){
    this.dynamicValue = this.inputValue
  }

}
