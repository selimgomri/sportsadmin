import { Injectable } from '@angular/core';
import { Theme, defaultTheme, customTheme } from './ColorInterface';

@Injectable({
  providedIn: 'root'
})
export class CustomizeColorService {

  private active: Theme;
  private availableThemes: Theme[] = [defaultTheme, customTheme];


  setDefaultTheme(): void {
    this.setActiveTheme(defaultTheme);
    }
    setCustomTheme(): void {
    this.setActiveTheme(customTheme);
    }


    setActiveTheme(theme: Theme): void {
      this.active = theme;

      Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
      property,
      this.active.properties[property]
      );
      });
      }

}
