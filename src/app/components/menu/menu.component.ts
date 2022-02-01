import { Component, OnInit, HostListener, Output } from '@angular/core';
import { Input, EventEmitter } from '@angular/core';
import { animations } from 'src/app/animations/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations:animations,
})
export class MenuComponent implements OnInit {

  @Input() activeAnimationMenu : boolean = false;
  @Output() changeView = new EventEmitter<string>();

  nameOfItems : string[] = ['Home','About','Skills'];
  tabletValueOfScreen : number = 600;
  desktopValueOfScreen : number = 1024;
  screenWidth: number = 0;
  showThumbnail : boolean[] = [false,false,false,false];

  constructor() { }

  ngOnInit() : void{
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])

  onResize() : void{
    this.screenWidth = window.innerWidth;
    if(this.nameOfItems.length == 3){
      this.screenWidth >= this.tabletValueOfScreen && this.nameOfItems.push('Contact');
    }
    else{
      this.screenWidth < this.tabletValueOfScreen && this.nameOfItems.splice(3,1);
    }
  }
  showThumbnailAfterMouseEnterItem(index : number) : void {
    if(this.screenWidth >= this.desktopValueOfScreen){
      this.showThumbnail[index] = true;
    }
  }
  hideThumbnailAfterMouseEnterItem(index : number) : void {
    if(this.screenWidth >= this.desktopValueOfScreen){
      this.showThumbnail[index] = false;
    }
  }
  navigateToView(nameOfItem : string) : void{
    this.changeView.emit(nameOfItem);
  }
}
