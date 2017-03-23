import { Component } from '@angular/core';

@Component({
  selector: 'hb-loading',
  template: `
  <div class="sk-three-bounce">
    <div class="sk-child sk-bounce1"></div>
    <div class="sk-child sk-bounce2"></div>
    <div class="sk-child sk-bounce3"></div>
  </div>
  `,
})
export class LoadingComponent {

}