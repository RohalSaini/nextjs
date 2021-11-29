import { HostListener, Renderer2 } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOnclick]'
})
export class OnclickDirective {
  isShow = true;
  // constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  // @HostListener('click', ['$event']) toggleOpen() {
  //   const nextEl = this.renderer.nextSibling(this.elRef.nativeElement);
  //   this.isShow = !this.isShow;
  //   if (this.isShow) {
  //     this.renderer.addClass(nextEl, 'active');
  //   } else {
  //     this.renderer.removeClass(nextEl, 'active');
  //   }
  // }
}
