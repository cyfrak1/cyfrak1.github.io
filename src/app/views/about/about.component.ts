import { Component, OnInit, Input, SimpleChange, Output, EventEmitter, HostListener } from '@angular/core';
import { animations } from 'src/app/animations/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: animations,
})
export class AboutComponent implements OnInit {

  @Input() activeAnimationAbout : boolean = false;
  @Output() activeMenuAnimation = new EventEmitter<boolean>();

  zindex : number = 1;
  fadeInAnimation : boolean = false;
  screenWidth : number = 0;
  
  constructor() { }

  ngOnInit(): void {
    this.onResize();
  }
  ngOnChanges(changes : SimpleChange) : void {
    setTimeout(()=>{
      this.activeMenuAnimation.emit(this.activeAnimationAbout);
      this.zindex = 4;
      this.fadeInAnimation = this.activeAnimationAbout;
    },this.activeAnimationAbout ? 1000 : 0)
  }
  @HostListener('window:resize', ['$event'])
  onResize() : void{
    this.screenWidth = window.innerWidth;
  }
}
