import { Directive, ElementRef, Renderer2, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[bgBlur]'
})
export class BgBlurDirective implements OnChanges {

  @Input() bgBlur!: boolean;

  constructor( 
    private elementRef: ElementRef,
    private renderer: Renderer2 
  ) { }

  ngOnChanges(): void {
    if(this.bgBlur) {
      let el = this.elementRef.nativeElement;

      this.renderer.setStyle(el, 'filter', 'blur(20px)');
      this.renderer.setStyle(el, 'pointer-events', 'none');
      this.renderer.setStyle(el, 'user-select', 'none');
    }
    else {
      let el = this.elementRef.nativeElement;

      this.renderer.setStyle(el, 'filter', 'none');
      this.renderer.setStyle(el, 'pointer-events', 'all');
      this.renderer.setStyle(el, 'user-select', 'auto');
    }
  }
}
