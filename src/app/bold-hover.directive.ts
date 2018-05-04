import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBoldHover]',
})
export class BoldHoverDirective {
  private element: HTMLElement;
  @HostListener('mouseenter') onMouseEnter() {
    this.element.style.fontWeight = 'bold';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.style.fontWeight = 'normal';
  }

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }
}
