import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { animations } from 'src/app/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:animations,
})
export class AppComponent implements OnInit {
  activeHome : boolean = false;
  activeAbout : boolean = false;
  activeSkills : boolean = false;
  activePortfolio : boolean = false;
  activeContact : boolean = false;
  activeMenu : boolean = false;
  customCursor : boolean = false;
  windowHeight : number = 0;
  windowWidth : number = 0;
  showCursor : boolean = true;
  cursorPosition : number[] = [0,0];
  activeAlert : boolean = false;
  controlTimer : number = 0;
  timerId : any;
  firstTouchValue : number = 0;
  title = 'portfolio';

  ngOnInit(): void {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;

    this.changeStateOfCursor();

    setTimeout(() => {
      this.activeAlert = true;
    }, 5000);
  }
  
  activeHomeAnimation(activeHomeAnimation : boolean) : void{
    this.activeHome = activeHomeAnimation;
  }
  activeMenuAnimation(activeMenuAnimation : boolean) : void{
    this.activeMenu = activeMenuAnimation;
  }
  changeAplicationView(changeAplicationView : string) : void {
    this.activeHome = false;
    this.activeAbout = false;
    this.activeSkills = false;
    this.activeContact = false;
    this.activePortfolio = false;
    this.activeMenu = false;

    if(changeAplicationView == "Home"){
      setTimeout(()=>{this.activeHome = true},2000);
    }
    if(changeAplicationView == "About"){
      setTimeout(()=>{this.activeAbout = true},2000);
    }
    if(changeAplicationView == "Skills"){
      setTimeout(()=>{this.activeSkills = true},2000);
    }
    if(changeAplicationView == "Contact"){
      setTimeout(()=>{this.activeContact = true},2000);
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event : any) {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    this.changeStateOfCursor();
  }
  closeAlert() : void {
    this.activeAlert = false;
  }
  changeStateOfCursor() : void {
    if(this.windowWidth >= 1024){
      this.showCursor = true;
    }
    else{
      this.showCursor = false;
    }
  }
  onMouseDown(e : any) : void {

    const viewsArray : boolean[] = [this.activeHome,this.activeAbout,this.activeSkills,this.activeContact];
    const namesOfViews : string[] = ['Home','About','Skills','Contact'];

    if(e.clientY + 200 >= this.windowHeight && this.showCursor == true){
      
      this.customCursor = true;
      this.cursorPosition[0] = e.clientX;
      this.cursorPosition[1] = e.clientY;

      this.controlTimer += 1;

      if(this.controlTimer == 1){
        this.timerId = window.setTimeout(()=>{
          if(e.clientY + 200 >= this.windowHeight){
            viewsArray.some((element,index)=>{
              if(element === true){
                if(index == viewsArray.length - 1){
                  this.changeAplicationView(namesOfViews[0]);
                }
                else{
                  this.changeAplicationView(namesOfViews[index + 1]);
                }
                return true;
              }
              else{
                return false;
              }
            })
          }
          this.controlTimer = 0;
        },1500)
      }
      }
    else{
      this.customCursor = false;
      window.clearTimeout(this.timerId);
      this.controlTimer = 0;
    }
  }
  onTouchStart(event : any) : void {
    const touch = event.touches[0];
    this.firstTouchValue = touch.clientY;
  }
  onTouchEnd(event : any) : void {
    const viewsArray : boolean[] = [this.activeHome,this.activeAbout,this.activeSkills,this.activeContact];
    const namesOfViews : string[] = ['Home','About','Skills','Contact'];
    const touch = event.changedTouches[0];
    if(touch.clientY - this.firstTouchValue < 0){
      viewsArray.some((element,index)=>{
        if(element === true){
          if(index == viewsArray.length - 2){
            this.changeAplicationView(namesOfViews[0]);
          }
          else{
            this.changeAplicationView(namesOfViews[index + 1]);
          }
          return true;
        }
        else{
          return false;
        }
      })
    }
    if(touch.clientY - this.firstTouchValue > 0){
      viewsArray.some((element,index)=>{
        if(element === true){
          if(index - 1 == -1 ){
            this.changeAplicationView(namesOfViews[2]);
          }
          else{
            this.changeAplicationView(namesOfViews[index - 1]);
          }
          return true;
        }
        else{
          return false;
        }
      })
    }
  }
}
