import { Component } from '@angular/core';

@Component({
  selector: 'app-child-select',
  template: `
  <div style="border: 1px solid red; padding: 1rem;">
    <h4>Child Component with Select</h4>
    <div style="border: 1px solid orange; padding: 1rem">
      <ng-content select="header"></ng-content>
    </div>
    <div style="border: 1px solid green; padding: 1rem">
      <ng-content select="section"></ng-content>
    </div>
    <div style="border: 1px solid pink; padding: 1rem">
      <ng-content select=".class-select"></ng-content>
    </div>
    <div style="border: 1px solid purple; padding: 1rem">
      <ng-content select="footer"></ng-content>
    </div>
  </div>
  `,
  styles: []
})
export class ChildSelectComponent {
}
