import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeIconFontsizeWhenHover]'
})
export class ChangeIconFontsizeWhenHoverDirective {

  constructor(private elementRef : ElementRef) { }


  @HostBinding('class.toto') test = false;

  @HostListener('mouseenter', [])
  onHover() {
    this.test = true;

  }
  @HostListener('mouseleave', [])
  onLeave() {
    this.test = false;

  }
}
