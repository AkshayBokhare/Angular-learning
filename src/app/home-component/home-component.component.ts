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

 quantiity:number =1;
 pricePerItem:number=100;


 get totalePrice():number{
  return this.quantiity * this.pricePerItem;
 }
}
