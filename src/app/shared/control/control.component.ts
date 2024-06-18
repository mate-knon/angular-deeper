import { Component, ElementRef, ViewEncapsulation, inject, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "control",
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // Used in Older versions
  // @HostBinding('class') className = 'control'
  // @HostListener("click") onClick() {
  //   console.log('clicked')
  // }
  private el = inject(ElementRef)
  label = input<string>('')

  onClick() {
    console.log('clicked')
    console.log(this.el)
  }
}
