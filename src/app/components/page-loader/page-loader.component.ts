import { Component, ElementRef, OnInit } from '@angular/core';
import { animations } from 'src/app/animations/animations';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.css'],
  animations: animations,
})

export class PageLoaderComponent implements OnInit {

  @Output() activeHomeAnimation = new EventEmitter<boolean>();

  activeAnimation : boolean = true;
  text : string = '<div class="loader">Loading</div>';
  zindex : number = 1000;

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
    const textInterval = setInterval(()=>{
      this.text == "" ? clearInterval(textInterval) : this.showText();
      if(this.text.length == 1){
        setTimeout(()=>{
          this.activeHomeAnimation.emit(true)
          this.zindex = 2;
        },1000);
      }
    },70);
  }
  showText() : void {
    const textElement : HTMLElement = this.elementRef.nativeElement.querySelector('.loader-wrapper-text')
    textElement.insertAdjacentHTML(
      'beforeend', 
      `<span class="loader-wrapper-text-span">${this.text[0] == " " ? '&nbsp;' : this.text[0]}</span>`
    );
    this.text = this.text.substring(1,this.text.length);
  }

}
