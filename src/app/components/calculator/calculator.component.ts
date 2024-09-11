import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  public skaicius=0;
  public daugiklis=0;
  public rezultatas="";

  public skaiciuoti(){
    this.rezultatas="Skaiciu sandauga: "+(this.skaicius*this.daugiklis);
  }
}
