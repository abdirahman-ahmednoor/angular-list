import { ElementRef, HostListener, Input } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {
  @Input('appHighlight') highlightText: string | undefined;

  constructor(private elem:ElementRef) { }

  @HostListener("click") onClick(){
    this.textDeco("line-through")
  }

  @HostListener("mouseleave") onMouseleave(){
    this.textDeco("none")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;
  }
}
