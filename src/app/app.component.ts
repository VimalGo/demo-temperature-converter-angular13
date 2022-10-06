import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'temperature-converter';

  celsiusChangeEvent: number = 0;
  fahrenheitChangeEvent: number = 0;

  celsius: number = 0;
  fahrenheit: number = 0;

  CelsiusToFahrenheitChangeEvent(c: any) {
    let cel: number = +(c.target as HTMLInputElement).value;
    this.fahrenheitChangeEvent = +parseFloat(
      (cel * (9 / 5) + 32).toString()
    ).toFixed(1);
  }

  FahrenheitToCelsiusChangeEvent(f: any) {
    let fah: number = +(f.target as HTMLInputElement).value;
    this.celsiusChangeEvent = +parseFloat(
      (((fah - 32) * 5) / 9).toString()
    ).toFixed(1);
  }

  CelsiusToFahrenheit(c: string) {
    let cel: number = +c;
    this.fahrenheit = +parseFloat((cel * (9 / 5) + 32).toString()).toFixed(1);
  }

  FahrenheitToCelsius(f: string) {
    let fah: number = +f;
    this.celsius = +parseFloat((((fah - 32) * 5) / 9).toString()).toFixed(1);
  }
}
