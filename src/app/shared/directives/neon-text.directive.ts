import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[neonText]'
})
export class NeonTextDirective implements OnChanges {

  @Input() fontColor?: string;
  @Input() primaryColor!: string;
  @Input() secondaryColor?: string;
  @Input() camadas: number = 3;

  constructor( 
    private elementRef: ElementRef,
    private renderer: Renderer2 
  ) { }

  ngOnChanges(): void {
    let el = this.elementRef.nativeElement;

    if(this.fontColor){
      this.renderer.setStyle(el, 'color', this.fontColor);
    }

    let txtShadow = '';
    let i = 1;

    for(; i < this.camadas/2; i++){
      txtShadow += ` 0 0 ${2*i}px ${this.primaryColor},`
    }

    if(!this.secondaryColor){
      this.secondaryColor = this.primaryColor;
    }

    for(; i <= this.camadas; i++){
      if (i == this.camadas){
        txtShadow += ` 0 0 ${4*i}px ${this.secondaryColor}`
      } else {
        txtShadow += ` 0 0 ${3*i}px ${this.secondaryColor},`
      }
    }

    console.log(txtShadow)
    this.renderer.setStyle(el, 'text-shadow', txtShadow);

  }

}
