import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ul>
      <li><a [routerLink]="['/Product']">Product</a></li>
      <li><a [routerLink]="['/Inventory']">Inventory</a></li>
  </ul>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
