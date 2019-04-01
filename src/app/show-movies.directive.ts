import {  Directive , ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appShowMovies]'
})
export class ShowMoviesDirective  implements OnInit{
  
  @HostBinding ('style.backgroundcolor') myBackgroundColor:string;

  constructor(private elRef:ElementRef, private renderer:Renderer2 ) { }

  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }
  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '3.0em');
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '1.0em');
  }

}
