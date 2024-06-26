import {
  Component, ElementRef,
  ViewEncapsulation,
  contentChild,
  inject,
  input
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
      },
    })
export class ControlComponent {
  // Used in Older versions
  // @HostBinding('class') className = 'control'
  // @HostListener("click") onClick() {
  //   console.log('clicked')
  // }
  private el = inject(ElementRef);
  label = input<string>('');
  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClick() {
    console.log('clicked');
    console.log(this.el);
    console.log(this.control);
  }
}
