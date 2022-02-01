import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { animations } from 'src/app/animations/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations:animations,
})
export class ContactComponent implements OnInit {

  @Input() activeAnimationContact : boolean = false;
  @Output() activeMenuAnimation = new EventEmitter<boolean>();

  zindex : number = 1;
  fadeInAnimation : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes : SimpleChange) : void {
    setTimeout(()=>{
      this.activeMenuAnimation.emit(this.activeAnimationContact);
      this.fadeInAnimation = this.activeAnimationContact;
    },this.activeAnimationContact ? 1000 : 0);
    if(this.activeAnimationContact == true){
      this.zindex = 3;
    }
  }

}
