import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ColorScheme,
  primaryButtonColors,
  chartColors,
} from '@samply/lens-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public title: Title) {
    title.setTitle('Samply.Lens Demo');
  }

  public primaryButtonColors: primaryButtonColors = {
    buttonSuccess: ['#ffffff', '#007bff'],
    buttonWarning: ['#ffffff', '#dc3545'],
    buttonInfo: ['#6f42c1', '#ffffff'],
  };

  public chartColors: chartColors = {};

  public colorScheme = new ColorScheme().setPrimaryButtonColors(
    this.primaryButtonColors
  );
}
