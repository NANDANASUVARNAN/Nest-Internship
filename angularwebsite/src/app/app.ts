import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { About } from "./pages/about/about";
import { Exinterpolation } from "./exinterpolation/exinterpolation";

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, RouterOutlet, Exinterpolation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angularproject');
}
